import { Fragment } from "react";
import { Formik, Form, Field } from "formik";
import { Storage, API } from "aws-amplify";
import ImageUploadComponent from "../../upload/ImageUploadComponent";
import { createResource } from "../../../src/graphql/mutations";
import ImagePreview from "../../upload/ImagePreview";
import { resourceSchema } from "../../../validation/resource/resource";
import { toast } from "react-toastify";
import RingSpinner from "../../loading/RingSpinner";

export default function CreateCourse() {
  const initialValues = {
    title: "",
    subtitle: "",
    subtitle1: "",
    subtitle2: "",
    files: [],
    description: "",
    page: "",
    section: "",
  };

  const handleSubmit = async (values, actions) => {
    console.log("VALUES", values);
    try {
      //uploading the image to s3 one at a time with the file name as the key
      const imageKeys = await Promise.all(
        values.files.map(async (file) => {
          const key = await Storage.put(file.name, file);
          return key.key;
        })
      );
      values.files = imageKeys;
      const res = await API.graphql({
        query: createResource,
        variables: { input: values },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      console.log("RESOURCE", res);
      if (res.data.createResource) {
        toast.success("Course has been created");
        actions.resetForm();
      }
    } catch (error) {
      console.log("ERROR", error);
      if (error.errors[0].errorType === "Unauthorized") {
        toast.error("Access denied");
        actions.resetForm();
      } else {
        toast.error("Course couldnot be created");
        actions.resetForm();
      }
    }
  };

  return (
    <Fragment>
      <div className="mt-6 pb-12">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={resourceSchema}
        >
          {({ values, errors, setFieldValue, isSubmitting }) => (
            <Form className="space-y-5">
              <div>
                <label
                  htmlFor="title"
                  className="text-gray-400 text-sm block pb-1"
                >
                  Title
                </label>
                <Field
                  name="title"
                  type="text"
                  id="title"
                  value={values.title}
                  className={`${
                    errors.title ? " field field-error" : " field"
                  } `}
                />
                <div className="mt-1 text-xs text-red-500">
                  {errors.title && errors.title}
                </div>
              </div>
              <div>
                <label
                  htmlFor="subtitle"
                  className="text-gray-400 text-sm block pb-1"
                >
                  Subtitle
                </label>
                <Field
                  name="subtitle"
                  type="text"
                  id="subtitle"
                  rows="2"
                  as="textarea"
                  value={values.subtitle}
                  className={`${
                    errors.subtitle ? " field field-error" : " field"
                  } `}
                />
                <div className="mt-1 text-xs text-red-500">
                  {errors.subtitle && errors.subtitle}
                </div>
              </div>
              <div>
                <label
                  htmlFor="subtitle1"
                  className="text-gray-400 text-sm block pb-1"
                >
                  Subtitle1
                </label>
                <Field
                  name="subtitle1"
                  type="text"
                  id="subtitle1"
                  rows="2"
                  as="textarea"
                  value={values.subtitle1}
                  className={`${
                    errors.subtitle1 ? " field field-error" : " field"
                  } `}
                />
                <div className="mt-1 text-xs text-red-500">
                  {errors.subtitle1 && errors.subtitle1}
                </div>
              </div>
              <div>
                <label
                  htmlFor="subtitle2"
                  className="text-gray-400 text-sm block pb-1"
                >
                  Subtitle2
                </label>
                <Field
                  name="subtitle2"
                  type="text"
                  id="subtitle2"
                  rows="2"
                  as="textarea"
                  value={values.subtitle2}
                  className={`${
                    errors.subtitle2 ? " field field-error" : " field"
                  } `}
                />
                <div className="mt-1 text-xs text-red-500">
                  {errors.subtitle2 && errors.subtitle2}
                </div>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="text-gray-400 text-sm block pb-1"
                >
                  Description
                </label>
                <Field
                  name="description"
                  type="text"
                  id="description"
                  rows="4"
                  as="textarea"
                  value={values.description}
                  className={`${
                    errors.description ? " field field-error" : " field"
                  } `}
                />
                <div className="mt-1 text-xs text-red-500">
                  {errors.description && errors.description}
                </div>
              </div>
              <div className="sm:flex sm:space-x-4">
                <div className="sm:w-1/2">
                  <label
                    htmlFor="page"
                    className="text-gray-400 text-sm block pb-1"
                  >
                    Page
                  </label>
                  <Field
                    name="page"
                    type="text"
                    id="page"
                    value={values.page}
                    className={`${
                      errors.page ? " field field-error" : " field"
                    } `}
                  />
                  <div className="mt-1 text-xs text-red-500">
                    {errors.page && errors.page}
                  </div>
                </div>
                <div className="sm:w-1/2">
                  <label
                    htmlFor="section"
                    className="text-gray-400 text-sm block pb-1"
                  >
                    Section
                  </label>
                  <Field
                    name="section"
                    type="text"
                    id="section"
                    value={values.section}
                    className={`${
                      errors.section ? " field field-error" : " field"
                    } `}
                  />
                  <div className="mt-1 text-xs text-red-500">
                    {errors.section && errors.section}
                  </div>
                </div>
              </div>

              <div className="mt-6 px-7 py-4 border border-dashed border-pink-600 rounded-md shadow">
                <ImageUploadComponent setFieldValue={setFieldValue} />
              </div>
              <div>
                <ImagePreview image={values.files} />
              </div>
              <div className="mt-12">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className={`${
                    isSubmitting ? "bg-gray-800" : ""
                  }  text-medium w-full rounded-md bg-pink-500 px-7 py-4 font-semibold uppercase  tracking-wider text-white hover:bg-pink-600 `}
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Fragment>
  );
}
