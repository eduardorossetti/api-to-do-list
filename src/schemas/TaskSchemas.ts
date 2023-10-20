import { object, string } from "yup";

export const GetSchema = object().shape({
  status: string()
    .required("status is required!")
    .test("isValid", (status) => {
      if (status === "in_progress" || status === "completed") {
        return true;
      } else {
        return false;
      }
    }),
});

export const GetByIdSchema = object().shape({
  id_task: string().required("id_task is required!").uuid(),
});

export const AddSchema = object().shape({
  description: string().required("description is required!"),
  date: string().required("date is required!"),
  status: string()
    .required("status is required!")
    .test("addIsValid", (status) => {
      if (status === "completed" || status === "in_progress") {
        return true;
      } else {
        return false;
      }
    }),
});

export const UpdateSchema = object().shape({
  id: string().required("id is required!"),
  description: string().required("description is required!"),
  date: string().required("date is required!"),
  status: string()
    .required("status is required!")
    .test("updateIsValid", (status) => {
      if (status === "completed" || status === "in_progress") {
        return true;
      } else {
        return false;
      }
    }),
});

export const UpdateSchemaParams = string().required().uuid();

export const DeleteSchema = string().required("id_task is required!").uuid();
