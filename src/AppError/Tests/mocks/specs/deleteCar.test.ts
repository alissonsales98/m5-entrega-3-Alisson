// import { describe, it } from "vitest";
// import { prisma } from "../../../database/prisma";
// import { task } from "../../mocks/tasks.mocks";
// import { secondUserMock } from "../../mocks/user.mocks";
// import {
//    generateAuthentication,
//    generateInvalidToken,
// } from "../../utils/generateAuthentication";
// import { request } from "express";

// const deleteCarBeforeEach = async () => {
//   const { user: user1, token: token1 } = await generateAuthentication();

//   const deleteCar = await prisma.task.create({
//     data: { ...car, userId: user1.id },
//   });

//   const { token: token2 } = await generateAuthentication(secondUserMock);

//   return { token: token1, secondToken: token2, deleteCar };
// };

// describe("delete car", () => {
//   it("should be able to delete car sucessfully", async () => {
//     const { token, deleteCar } = await deleteCarBeforeEach();

//     await request
//       .delete(`/tasks/${deleteCar?.id}`)
//       .set("Authorization", `Bearer ${token}`)
//       .expect(204);
//   });

//   it("should throw error when try to delete a invalid car", async () => {
//     const { token, deleteCar } = await deleteCarBeforeEach();

//     const id = (deleteCar?.id as number) + 1;

//     await request
//       .delete(`/car/${id}`)
//       .set("Authorization", `Bearer ${token}`)
//       .expect(404);
//   });

//   it("should throw error when try to delete a car from a different user", async () => {
//     const { secondToken, deleteCar } = await deleteCarBeforeEach();

//     await request
//       .delete(`/tasks/${deleteCar?.id}`)
//       .set("Authorization", `Bearer ${secondToken}`)
//       .expect(403);
//   });

//   it("should throw error when there is no token", async () => {
//     await request.delete("/car/1").expect(401);
//   });

//   it("should throw error when the token is invalid", async () => {
//     const token = generateInvalidToken();

//     await request
//       .delete("/car/1")
//       .set("Authorization", `Bearer ${token}`)
//       .expect(401);
//   });
// });
