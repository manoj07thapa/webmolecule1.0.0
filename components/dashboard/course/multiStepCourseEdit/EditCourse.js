import CourseInfo from "./step/CourseInfo";
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import CourseImage from "./step/CourseImage";
import CourseContent from "./step/CourseContent"
import SkillsToLearn from "./step/SkillsToLearn"
import RelatedStacks from "./step/RelatedStacks";
import CourseEditConfirm from "./step/CourseEditConfirm"
import { useState } from "react";
import { StepperContext } from "./context/StepperContext";
import { Formik, Form, Field, FieldArray, FormikConfig } from "formik";
import { courseSchema } from "../../../../validation/course/course";



const EditCourse = () => {
    const [currStep, setCurrStep] = useState(1)
    const [userData, setUserData] = useState('')
    const [finalData, setFinalData] = useState([])

    const initialValues = {
        title: "",
        subtitle: "",
        category: "",
        price: 0,
        files: [],
        language: "",
        courseContent: [{ topic: "", description: "", duration: "" }],
        // tutor: user?.username,
        tutorWho: "",
        relatedSkills: [""],
        youLearn: [""],
        duration: "",
        framework: "",
        reqKnowledge: "",
        level: "",
        time: "",
    };

    const steps = ["Course Information", "Related Stacks", 'Skills you will learn', "Course Content", "Course Image", "Complete"]

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <CourseInfo />
            case 2:
                return <RelatedStacks />
            case 3:
                return <SkillsToLearn />
            case 4:
                return <CourseContent />
            case 5:
                return <CourseImage />
            case 6:
                return <CourseEditConfirm />

            default:
                break;
        }
    }

    const handleClick = (direction) => {
        let newStep = currStep
        direction === "next" ? newStep++ : newStep--
        //check if steps are within bound
        newStep > 0 && newStep <= steps.length && setCurrStep(newStep)

    }

    const handleSubmit = (values) => {
        console.log(values);
    }

    return (
        // <div>
        //     {/**Stepper */}
        //     <div className="container horizontal mt-5">
        //         <Stepper steps={steps} currStep={currStep} />
        //         {/**Display Components */}
        //         <div className="my-10 p-10">
        //             {/* <StepperContext.Provider value={{ userData, setUserData, finalData, setFinalData, initialValues }}>
        //                 {displayStep(currStep)}
        //             </StepperContext.Provider> */}
        //             <Formik
        //                 initialValues={initialValues}
        //                 onSubmit={handleSubmit}
        //                 validationSchema={courseSchema}
        //             >
        //                 {({ values, errors, setFieldValue, isSubmitting }) => (
        //                     <Form className="space-y-5">

        //                         {displayStep(currStep)}
        //                     </Form>
        //                 )}
        //             </Formik>
        //         </div>
        //     </div>

        //     {/**Navigation Controls */}
        //     {currStep !== steps.length && <StepperControl handleClick={handleClick} steps={steps} currStep={currStep} />}
        // </div>
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={courseSchema}
            >
                {(props) => (
                    <Form className="space-y-5">
                        <Stepper steps={steps} currStep={currStep} className="mt-12" />
                        {console.log('FORMIKPROPS', props.isValid)}

                        {displayStep(currStep)}
                        {currStep !== steps.length && <StepperControl handleClick={handleClick} steps={steps} currStep={currStep} errors={props.errors} isValid={props.isValid} />}

                    </Form>
                )}
            </Formik>

        </div>
    )
};
export default EditCourse;