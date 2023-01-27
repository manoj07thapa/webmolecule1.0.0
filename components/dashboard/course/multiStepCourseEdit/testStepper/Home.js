import { FormikStepper } from "./FormikStepper";
// mport { Box, Button, Card, CardContent, CircularProgress, Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import { Field, Form, Formik, FormikConfig, FormikValues, ErrorMessage } from 'formik';
// import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import React, { useState } from 'react';
import { mixed, number, object, string, bool } from 'yup';


const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

function Home() {
    return (
        <FormikStepper
            initialValues={{
                firstName: '',
                lastName: '',
                millionaire: false,
                money: 0,
                description: '',
            }}
            onSubmit={async (values) => {
                await sleep(3000);
                console.log('values', values);
            }}
        >
            <FormikStep label="Personal Data " validationSchema={object({
                firstName: string().required().min(6),
                lastName: string().required().min(6),
                millionaire: bool().oneOf([true], 'You need to check the checkbox')
            })} >
                <div className="flex flex-col text-gray-200 tracking-wide">
                    <label htmlFor="firstName" >Firstname</label>
                    <Field name="firstName" type="text" className="text-gray-700" />
                    <ErrorMessage component="span" name="firstName" className="text-red-700" />
                </div>
                <div className="flex flex-col text-gray-200 tracking-wide">
                    <label htmlFor="lastName">Lastname</label>
                    <Field name="lastName" type="text" className="text-gray-700" />
                    <ErrorMessage component="span" name="lastName" className="text-red-700" />
                </div>
                <div className="flex flex-col text-gray-200">
                    <label htmlFor="millionaire" >Millionaire</label>
                    <Field
                        name="millionaire"
                        type="checkbox"

                    />
                    <ErrorMessage component="span" name="millionaire" className="text-red-700" />

                </div>
            </FormikStep>
            <FormikStep
                label="Bank Accounts"
                validationSchema={object({
                    money: mixed().when('millionaire', {
                        is: true,
                        then: number()
                            .required()
                            .min(
                                1_000_000,
                                'Because you said you are a millionaire you need to have 1 million'
                            ),
                        otherwise: number().required(),
                    }),
                })}
            >   <div className="flex flex-col text-gray-700">
                    <label htmlFor="millionaire" >Money</label>
                    <Field

                        name="money"
                        type="number"
                        label="All the money I have"
                    />
                    <ErrorMessage component="span" name="money" className="text-red-700" />

                </div>
            </FormikStep>
            <FormikStep label="More Info">
                <div className="flex flex-col text-gray-700">
                    <label htmlFor="millionaire" >Description</label>
                    <Field name="description" label="Description" type="text" />
                    <ErrorMessage component="span" name="description" />

                </div>
            </FormikStep>
        </FormikStepper>

    );
}

export default Home

// export interface FormikStepProps
//     extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
//     label: string;
// }

export function FormikStep({ children }) {
    return <>{children}</>;
}
