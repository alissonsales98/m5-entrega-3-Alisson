// import { request } from "express";
// import { describe, it } from "vitest";
// // import {
// //    invalidDataTask,
// //    task,
// //    taskWithInvalidCategory,
// // } from "../../mocks/tasks.mocks";
// // import {
// //    generateAuthentication,
// //    generateInvalidToken,
// // } from "../../utils/generateAuthentication";
// // import { taskDefaultExpects } from "../../utils/taskDefaultExpects";

// describe("create car", () => {
//   it("should be able to create car sucessfully", async () => {
//     const { user, token } = await generateAuthentication();

//     const data = await request
//       .post("/tasks")
//       .set("Authorization", `Bearer ${token}`)
//       .send(car)
//       .expect(201)
//       .then((response) => response.body);

//     carDefaultExpects(data, user.id);
//   });

//   it("should throw error when try to create a car in a invalid category", async () => {
//     const { token } = await generateAuthentication();

//     await request
//       .post("/car")
//       .set("Authorization", `Bearer ${token}`)
//       .send(carWithInvalidCategory)
//       .expect(404);
//   });

//   it("should throw error when try to create a car with a missing body parameter", async () => {
//     const { token } = await generateAuthentication();

//     await request
//       .post("/car")
//       .set("Authorization", `Bearer ${token}`)
//       .expect(400);
//   });

//   it("should throw error when try to create a car with invalid data types", async () => {
//     const { token } = await generateAuthentication();

//     await request
//       .post("/car")
//       .set("Authorization", `Bearer ${token}`)
//       .send(invalidDataCar)
//       .expect(400);
//   });

//   it("should throw error when there is no token", async () => {
//     await request.post("/car").expect(401);
//   });

//   it("should throw error when the token is invalid", async () => {
//     const token = generateInvalidToken();

//     await request
//       .post("/car")
//       .set("Authorization", `Bearer ${token}`)
//       .expect(401);
//   });
// });
