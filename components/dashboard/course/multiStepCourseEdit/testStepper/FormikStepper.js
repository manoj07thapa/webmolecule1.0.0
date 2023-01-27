import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import Stepper from './Stepper';
import StepperControl from './StepControl';
import React, { useState } from 'react'
// import { FormikStepProps } from "./Home";


export function FormikStepper({ children, ...props }) {
    const childrenArray = React.Children.toArray(children);
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step];
    const [completed, setCompleted] = useState(false);

    function isLastStep() {
        return step === childrenArray.length - 1;
    }

    return (
        <Formik
            {...props}
            validationSchema={currentChild.props.validationSchema}
            onSubmit={async (values, helpers) => {
                if (isLastStep()) {
                    await props.onSubmit(values, helpers);
                    setCompleted(true);
                } else {
                    setStep((s) => s + 1);

                    // the next line was not covered in the youtube video
                    //
                    // If you have multiple fields on the same step
                    // we will see they show the validation error all at the same time after the first step!
                    //
                    // If you want to keep that behaviour, then, comment the next line :)
                    // If you want the second/third/fourth/etc steps with the same behaviour
                    //    as the first step regarding validation errors, then the next line is for you! =)
                    //
                    // In the example of the video, it doesn't make any difference, because we only
                    //    have one field with validation in the second step :)
                    helpers.setTouched({});
                }
            }}
        >
            {({ isSubmitting }) => (
                <Form autoComplete="off" className=" ">
                    <div className=" space-y-12">
                        <Stepper steps={childrenArray} step={step} />

                        {currentChild}

                        <StepperControl step={step} setStep={setStep} isSubmitting={isSubmitting} isLastStep={isLastStep} />
                    </div>
                </Form>
            )}
        </Formik>
    );
}