import { describe, expect, it } from "vitest";
import { prisma } from "../../../database/prisma";
import { category } from "../../mocks/category.mocks";
import {
   getTaskList,
   invalidDataUpdateTask,
   updateTask,
} from "../../mocks/tasks.mocks";
import { secondUserMock } from "../../mocks/user.mocks";
import {
   generateAuthentication,
   generateInvalidToken,
} from "../../utils/generateAuthentication";
import { taskDefaultExpects } from "../../utils/taskDefaultExpects";
import { request } from "express";

const updateCarBeforeEach = async () => {
  const { user: user1, token: token1 } = await generateAuthentication();

  await prisma.category.create({ data: category(user1.id) });
  const carList = await getCarList(user1.id);
  await prisma.car.createMany({ data: carList });

  const { token: token2 } = await generateAuthentication(secondUserMock);

  return { user: user1, token: token1, secondToken: token2 };
};

describe("update car", () => {
  it("should be able to update car successfully ", async () => {
    const { user, token } = await updateCarBeforeEach();

    const task = await prisma.car.findFirst();

    const data = await request
      .patch(`/tasks/${car?.id}`)
      .set("Authorization", `Bearer ${token}`)
      .send(updateCar)
      .expect(200)
      .then((response) => response.body);

    carDefaultExpects(data, user.id);

    expect(data.title).toBe(updateCar.title);
    expect(data.content).toBe(updateCar.content);
    expect(data.finished).toBe(updateCar.finished);
  });

  it("should throw error when try to update a invalid car", async () => {
    const { token } = await updateCarBeforeEach();

    const tasks = await prisma.car.findMany();

    const id = tasks[1].id + 1;

    await request
      .patch(`/car/${id}`)
      .set("Authorization", `Bearer ${token}`)
      .expect(404)
      .then((response) => response.body);
  });

  it("should throw error when try to update a car with invalid data types", async () => {
    const { token } = await updateCarBeforeEach();

    const task = await prisma.car.findFirst();

    await request
      .patch(`/car/${task?.id}`)
      .set("Authorization", `Bearer ${token}`)
      .send(invalidDataUpdateCar)
      .expect(400);
  });

  it("should throw error when try update a car from a different user", async () => {
    const { secondToken } = await updateCarBeforeEach();

    const task = await prisma.task.findFirst();

    await request
      .patch(`/car/${task?.id}`)
      .set("Authorization", `Bearer ${secondToken}`)
      .send(updateTask)
      .expect(403);
  });

  it("should throw error when there is no token", async () => {
    await request.patch("/car/1").expect(401);
  });

  it("should throw error when the token is invalid", async () => {
    const token = generateInvalidToken();

    await request
      .patch("/car/1")
      .set("Authorization", `Bearer ${token}`)
      .expect(401);
  });
});
