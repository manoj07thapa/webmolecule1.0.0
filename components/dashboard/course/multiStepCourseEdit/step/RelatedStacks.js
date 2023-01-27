import { Field, useFormikContext } from "formik";

const RelatedStacks = () => {
    const { values, submitForm, errors } = useFormikContext();
    console.log('Values', values);
    return <div>
        <label
            htmlFor="relatedSkills"
            className="text-gray-400 text-sm block pb-1"
        >
            Title
        </label>
        <Field
            name="relatedSkills"
            type="text"
            id="relatedSkills"
            value={values.relatedSkills}
            className={`${errors.relatedSkills ? " field field-error" : " field"
                } `}
        />
        <div className="mt-1 text-xs text-red-500">
            {errors.relatedSkills && errors.relatedSkills}
        </div>
    </div>;
};
export default RelatedStacks;