import React from "react";
import { Formik, Field, Form } from "formik";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import Link from "next/link";
import { signUpSchema } from "../../validation/auth/signUpSchema";

function SignUpForm() {
  const router = useRouter();
  const initialValues = {
    fullname: "",
    email: "",
    password: "",
    phoneNumber: 977,
  };

  const onSubmit = async (values, actions) => {
    console.log("Actions", values);
    const { email, password, phoneNumber, fullname } = values;
    try {
      const { user } = await Auth.signUp({
        username: fullname,
        password,
        attributes: {
          email,
          phone_number: phoneNumber,
        },
      });

      router.push("/auth/confirmUser");
      console.log(user);
    } catch (error) {
      if (error) {
        actions.setErrors(error.message); //toDO: backend validation
      }
    }
  };
  return (
    <div className=" flex  justify-between ">
      <div className="mt-[500px] flex -skew-y-12  flex-col ">
        <div className="h-10 w-2 bg-pink-500 mix-blend-multiply sm:w-12 md:w-24 lg:w-40"></div>
        <div className="-mt-4 h-10 w-4 bg-indigo-500 mix-blend-multiply sm:w-16 md:w-32 lg:w-48"></div>
      </div>
      <div className="w-full max-w-md lg:max-w-lg mt-12">
        <div className=" mt-4 rounded-sm bg-white px-12 py-10 shadow-md">
          <h3 className="text-lg font-bold tracking-wide text-gray-600">
            Sign up for a new account
          </h3>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={signUpSchema}
          >
            {({ errors, isSubmitting, values }) => (
              <Form>
                <div className="mt-8 space-y-4">
                  <div>
                    <label
                      htmlFor="fullname"
                      className="mb-1 block text-sm font-semibold text-gray-500"
                    >
                      Full Name
                    </label>
                    <Field
                      name="fullname"
                      type="text"
                      id="fullname"
                      className={`${
                        errors.fullname ? "field field-error" : "field"
                      }`}
                    />
                    <div className="mt-1 text-xs text-red-500">
                      {errors.fullname && errors.fullname}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-sm font-semibold text-gray-500"
                    >
                      Email
                    </label>
                    <Field
                      name="email"
                      type="text"
                      id="email"
                      className={`${
                        errors.email ? "field field-error" : "field"
                      }`}
                    />
                    <div className="mt-1 text-xs text-red-500">
                      {errors.email && errors.email}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password "
                      className="mb-1 block text-sm font-semibold text-gray-500"
                    >
                      Password
                    </label>
                    <Field
                      name="password"
                      type="password"
                      id="password"
                      className={`${
                        errors.password ? "field field-error" : "field"
                      }`}
                    />
                    <div className="mt-1 text-xs text-red-500">
                      {errors.password && errors.password}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="mb-1 block text-sm font-semibold text-gray-500"
                    >
                      Phone Number
                    </label>
                    <Field
                      name="phoneNumber"
                      id="phoneNumber"
                      type="tel"
                      className={`${
                        errors.phoneNumber ? "field field-error" : "field"
                      }`}
                    />
                    <div className="mt-1 text-xs text-red-500">
                      {errors.phoneNumber && errors.phoneNumber}
                    </div>
                  </div>
                  <div className=" text-right ">
                    <button
                      type="submit"
                      className=" text-medium mt-6 w-full rounded-md bg-pink-600 px-4 py-2 uppercase tracking-wider text-white transition ease-in-out hover:bg-pink-700 focus:outline-none"
                    >
                      SignUp
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
          <hr className="mt-5 text-gray-900" />
        </div>
        <div className="mt-6 flex items-center space-x-1 px-4">
          <p className="text-white">Already have an account?</p>
          <Link href="/auth/signIn">
            <a className="text-sm font-semibold text-indigo-500">SignIn</a>
          </Link>
        </div>
      </div>
      <div className="mt-9 flex -skew-y-12  flex-col ">
        <div className="h-10 w-4 bg-indigo-500 sm:w-16 md:w-32 lg:w-48 "></div>
      </div>
    </div>
  );
}

export default SignUpForm;
