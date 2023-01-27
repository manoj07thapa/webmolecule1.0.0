import { Field, useFormikContext } from "formik";

const CourseInfo = () => {
    const { values, submitForm, errors } = useFormikContext();
    console.log('Values', values);
    console.log('Errors', errors
    );

    return (
        <div>
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
                    className={`${errors.title ? " field field-error" : " field"
                        } `}
                />
                <div className="mt-1 text-xs text-red-500">
                    {errors.title && errors.title}
                </div>
            </div>
        </div>
    );
};
export default CourseInfo;