import { useState, useEffect } from "react";
import { Field, useFormikContext } from "formik";
import {
  frontendFrameworks,
  backendFrameworks,
  database,
  webDesign,
  fullStack,
} from "../../../data/course/courseData";

export default function FrameworkField() {
  const [frameworks, setFrameworks] = useState([]);

  function fetchFrameworks(category) {
    if (category === "frontend") {
      return frontendFrameworks;
    }
    if (category === "backend") {
      return backendFrameworks;
    }
    if (category === "database") {
      return database;
    }
    if (category === "webDesign") {
      return webDesign;
    }
    if (category === "fullstack") {
      return fullStack;
    }
  }

  const { values, errors } = useFormikContext();

  useEffect(() => {
    const frameworks = fetchFrameworks(values.category);
    setFrameworks(frameworks);
  }, [values.category]);

  return (
    <div className="sm:w-1/2">
      <label htmlFor="framework" className="text-gray-400 text-sm block pb-1">
        Choose Framework
      </label>
      <Field
        as="select"
        name="framework"
        type="text"
        id="framework"
        value={values.framework}
        className={`${errors.framework ? " field field-error" : " field"} `}
      >
        {frameworks &&
          frameworks.map((c) => (
            <option key={c} value={c} className="space-y-12 bg-gray-200 py">
              {c}
            </option>
          ))}
      </Field>
      <div className="mt-1 text-xs text-red-500">
        {errors.framework && errors.framework}
      </div>
    </div>
  );
}
