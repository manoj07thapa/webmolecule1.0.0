import { Fragment } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { Storage, API } from "aws-amplify";
import ImageUploadComponent from "../../upload/ImageUploadComponent";
import { categories, languages, level } from "../../../data/course/courseData";
import FrameworkField from "./FrameworkField";
import { createCourse } from "../../../src/graphql/mutations";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";
import ImagePreview from "../../upload/ImagePreview";
import { courseSchema } from "../../../validation/course/course";

export default function CreateCourse() {
  const initialValues = {
    title: "",
    subtitle: "",
    category: "",
    price: 0,
    files: [],
    language: "",
    courseContent: [{ topic: "", description: "", duration: "" }],
    tutor: "",
    tutorWho: "",
    relatedSkills: [""],
    youLearn: [""],
    duration: "",
    framework: "",
    reqKnowledge: "",
    level: "",
    time: "",
  };

  const handleSubmit = async (values, actions) => {
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
        query: createCourse,
        variables: { input: values },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      console.log("RESPONSECOURSECREATION", res);
      // if (res.data.createCourse) {
      //   actions.resetForm();
      // }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <Fragment>
      <div className="mt-6 pb-12">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={courseSchema}
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
              <div className="sm:flex sm:space-x-4">
                <div className="sm:w-1/2">
                  <label
                    htmlFor="language"
                    className="text-gray-400 text-sm block pb-1"
                  >
                    Choose Language
                  </label>
                  <Field
                    as="select"
                    name="language"
                    type="text"
                    id="language"
                    value={values.language}
                    className={`${
                      errors.language ? " field field-error" : " field "
                    } `}
                  >
                    {languages.map((c) => (
                      <option key={c} value={c} className="py-3 bg-gray-200 ">
                        {c}
                      </option>
                    ))}
                  </Field>
                  <div className="mt-1 text-xs text-red-500">
                    {errors.language && errors.language}
                  </div>
                </div>
                <div className="sm:w-1/2">
                  <label
                    htmlFor="price"
                    className="text-gray-400 text-sm block pb-1"
                  >
                    Price
                  </label>
                  <Field
                    name="price"
                    type="number"
                    id="price"
                    value={values.price}
                    className={`${
                      errors.price ? " field field-error" : " field"
                    } `}
                  />
                  <div className="mt-1 text-xs text-red-500">
                    {errors.price && errors.price}
                  </div>
                </div>
              </div>
              <div className="sm:flex sm:space-x-4">
                <div className="sm:w-1/2">
                  <label
                    htmlFor="category"
                    className="text-gray-400 text-sm block pb-1"
                  >
                    Choose Category
                  </label>
                  <Field
                    as="select"
                    name="category"
                    type="text"
                    id="category"
                    value={values.category}
                    className={`${
                      errors.category ? " field field-error" : " field"
                    } `}
                  >
                    {categories.map((c) => (
                      <option
                        key={c}
                        value={c}
                        className="space-y-12 bg-gray-200 py"
                      >
                        {c}
                      </option>
                    ))}
                  </Field>
                  <div className="mt-1 text-xs text-red-500">
                    {errors.category && errors.category}
                  </div>
                </div>

                <FrameworkField />
              </div>
              <div className="flex sm:space-x-4">
                <div className="sm:w-1/2">
                  <label
                    htmlFor="duration"
                    className="text-gray-400 text-sm block pb-1"
                  >
                    Duration
                  </label>
                  <Field
                    name="duration"
                    type="text"
                    id="duration"
                    value={values.duration}
                    className={`${
                      errors.duration ? " field field-error" : " field"
                    } `}
                  />
                  <div className="mt-1 text-xs text-red-500">
                    {errors.duration && errors.duration}
                  </div>
                </div>
                <div className="sm:w-1/2">
                  <label
                    htmlFor="time"
                    className="text-gray-400 text-sm block pb-1"
                  >
                    Time
                  </label>
                  <Field
                    name="time"
                    type="text"
                    id="time"
                    value={values.time}
                    className={`${
                      errors.time ? " field field-error" : " field"
                    } `}
                  />
                  <div className="mt-1 text-xs text-red-500">
                    {errors.time && errors.time}
                  </div>
                </div>
              </div>
              <div className="sm:flex sm:space-x-4">
                <div className="sm:w-1/3">
                  <label
                    htmlFor="tutor"
                    className="text-gray-400 text-sm block pb-1"
                  >
                    Tutor
                  </label>
                  <Field
                    name="tutor"
                    type="text"
                    id="tutor"
                    value={values.tutor}
                    className={`${
                      errors.tutor ? " field field-error" : " field "
                    } `}
                  />

                  <div className="mt-1 text-xs text-red-500">
                    {errors.tutor && errors.tutor}
                  </div>
                </div>
                <div className="sm:w-2/3 ">
                  <label
                    htmlFor="tutorWho"
                    className="text-gray-400 text-sm block pb-1"
                  >
                    Tutor Information
                  </label>
                  <Field
                    name="tutorWho"
                    type="text"
                    id="tutorWho"
                    value={values.tutorWho}
                    className={`${
                      errors.tutorWho ? " field field-error" : " field"
                    } `}
                  />
                  <div className="mt-1 text-xs text-red-500">
                    {errors.tutorWho && errors.tutorWho}
                  </div>
                </div>
              </div>
              <div className="sm:flex sm:space-x-4">
                <div className="sm:w-1/3">
                  <label
                    htmlFor="level"
                    className="text-gray-400 text-sm block pb-1"
                  >
                    Level
                  </label>
                  <Field
                    as="select"
                    name="level"
                    type="text"
                    id="level"
                    value={values.level}
                    className={`${
                      errors.level ? " field field-error" : " field"
                    } `}
                  >
                    {level.map((c) => (
                      <option
                        key={c}
                        value={c}
                        className="space-y-12 bg-gray-200 py"
                      >
                        {c}
                      </option>
                    ))}
                  </Field>
                  <div className="mt-1 text-xs text-red-500">
                    {errors.level && errors.level}
                  </div>
                </div>
                <div className="sm:w-2/3">
                  <label
                    htmlFor="reqKnowledge"
                    className="text-gray-400 text-sm block pb-1"
                  >
                    Required Knowledge
                  </label>
                  <Field
                    name="reqKnowledge"
                    type="text"
                    id="reqKnowledge"
                    value={values.reqKnowledge}
                    className={`${
                      errors.reqKnowledge ? " field field-error" : " field "
                    } `}
                  />

                  <div className="mt-1 text-xs text-red-500">
                    {errors.reqKnowledge && errors.reqKnowledge}
                  </div>
                </div>
              </div>

              <FieldArray id="relatedSkills" name="relatedSkills">
                {(fieldArrayProps) => {
                  const {
                    push,
                    remove,
                    form: {
                      values: { relatedSkills },
                    },
                  } = fieldArrayProps;
                  return (
                    <div>
                      {relatedSkills.length &&
                        relatedSkills.map((_, index) => (
                          <div key={index} className="">
                            <span className="text-gray-400 text-sm block pb-1">
                              Related stacks
                            </span>
                            <div className="flex items-center  ">
                              <label
                                htmlFor="relatedSkills "
                                className="w-full space-y-3"
                              >
                                <Field
                                  name={`relatedSkills[${index}]`}
                                  type="text"
                                  id="relatedSkills"
                                  className={`${
                                    errors.length === 0
                                      ? "field field-error"
                                      : "field placeholder:text-sm placeholder:italic"
                                  }`}
                                  placeholder="tech stacks.."
                                />
                                <div className="mt-1 text-xs text-red-500">
                                  {errors.relatedSkills && errors.relatedSkills}
                                </div>
                              </label>

                              <div className="ml-4 space-y-2 flex flex-col items-center">
                                {index > 0 && (
                                  <button
                                    type="button"
                                    onClick={() => remove(index)}
                                    className=" h-5 w-5"
                                  >
                                    <MinusCircleIcon />
                                  </button>
                                )}
                                <button
                                  type="button"
                                  onClick={() => push()}
                                  className=" h-5 w-5"
                                >
                                  <PlusCircleIcon />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  );
                }}
              </FieldArray>

              <FieldArray id="youLearn" name="youLearn">
                {(fieldArrayProps) => {
                  const {
                    push,
                    remove,
                    form: {
                      values: { youLearn },
                    },
                  } = fieldArrayProps;
                  return (
                    <div>
                      {youLearn.length &&
                        youLearn.map((_, index) => (
                          <div key={index} className="">
                            <span className="text-gray-400 text-sm block pb-1">
                              Skills you will learn
                            </span>
                            <div className="flex items-center  ">
                              <label
                                htmlFor="youLearn "
                                className="w-full space-y-3"
                              >
                                <Field
                                  name={`youLearn[${index}]`}
                                  type="text"
                                  id="youLearn"
                                  className={`${
                                    errors.length === 0
                                      ? "field field-error"
                                      : "field placeholder:text-sm placeholder:italic"
                                  }`}
                                  placeholder="Skils..."
                                />
                                <div className="mt-1 text-xs text-red-500">
                                  {errors.youLearn && errors.youLearn}
                                </div>
                              </label>

                              <div className="ml-4 space-y-2 flex flex-col items-center">
                                {index > 0 && (
                                  <button
                                    type="button"
                                    onClick={() => remove(index)}
                                    className=" h-5 w-5"
                                  >
                                    <MinusCircleIcon />
                                  </button>
                                )}
                                <button
                                  type="button"
                                  onClick={() => push()}
                                  className=" h-5 w-5"
                                >
                                  <PlusCircleIcon />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  );
                }}
              </FieldArray>

              <FieldArray id="courseContent" name="courseContent">
                {(fieldArrayProps) => {
                  const {
                    push,
                    remove,
                    form: {
                      values: { courseContent },
                    },
                  } = fieldArrayProps;
                  return (
                    <div>
                      {courseContent.length &&
                        courseContent.map((_, index) => (
                          <div key={index} className="">
                            <span className="text-gray-400 text-sm block pb-1">
                              Course Content
                            </span>
                            <div className="flex items-center justify-between ">
                              <label
                                htmlFor="courseContent "
                                className="w-full space-y-3"
                              >
                                <Field
                                  name={`courseContent[${index}].topic`}
                                  type="text"
                                  id="courseContentTitle"
                                  className={`${
                                    errors.length === 0
                                      ? "field field-error"
                                      : "field placeholder:text-sm placeholder:italic"
                                  }`}
                                  placeholder="Topic..."
                                />
                                <Field
                                  name={`courseContent[${index}].description`}
                                  type="text"
                                  id="courseContentDesc"
                                  as="textarea"
                                  rows="4"
                                  className={`${
                                    errors.length === 0
                                      ? "field field-error"
                                      : "field placeholder:text-sm placeholder:italic"
                                  }`}
                                  placeholder="Description..."
                                />
                                <Field
                                  name={`courseContent[${index}].duration`}
                                  type="text"
                                  id="courseContentDuration"
                                  rows="4"
                                  className={`${
                                    errors.length === 0
                                      ? "field field-error"
                                      : "field placeholder:text-sm placeholder:italic"
                                  }`}
                                  placeholder="Duration..."
                                />{" "}
                                <div className="mt-1 text-xs text-red-500">
                                  {errors.courseContent && errors.courseContent}
                                </div>
                              </label>

                              <div className="ml-4 space-y-4">
                                {index > 0 && (
                                  <button
                                    type="button"
                                    onClick={() => remove(index)}
                                    className=" h-7 w-7"
                                  >
                                    <MinusCircleIcon />
                                  </button>
                                )}
                                <button
                                  type="button"
                                  onClick={() => push()}
                                  className=" h-7 w-7"
                                >
                                  <PlusCircleIcon />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  );
                }}
              </FieldArray>

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
