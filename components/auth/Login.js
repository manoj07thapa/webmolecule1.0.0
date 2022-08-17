import React, { Fragment } from "react";
import { Formik, Field, Form } from "formik";
import { Auth } from "aws-amplify";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { loginSchema } from "../../validation/auth/loginSchema";

function Login() {
  const router = useRouter();

  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = async (values, actions) => {
    const { username, password } = values;
    try {
      const user = await Auth.signIn({
        username,
        password,
      });
      console.log(user);
      localStorage.setItem("user", user);
      router.push("/");
    } catch (error) {
      if (error) {
        actions.setErrors(error.message); //toDO: backend validation
      }
    }
  };
  return (
    <Fragment>
      <Head>
        <title>SignIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" flex  justify-between ">
        <div className="mt-[500px] flex -skew-y-12  flex-col ">
          <div className="h-10 w-2 bg-pink-500 mix-blend-multiply sm:w-12 md:w-24 lg:w-40"></div>
          <div className="-mt-4 h-10 w-4 bg-indigo-500 mix-blend-multiply sm:w-16 md:w-32 lg:w-48"></div>
        </div>
        <div className="w-full max-w-md lg:max-w-lg mt-16 ">
          <div className=" mt-10 rounded-md bg-violet-100 px-12 py-8 shadow-lg">
            <h3 className="text-xl font-extrabold tracking-wide text-gray-600 text-center underline">
              Sign in to your account
            </h3>
            <div className="mt-10">
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={loginSchema}
                className=" accent-green-900"
              >
                {({ errors }) => (
                  <Form className="space-y-5">
                    <div>
                      <label
                        htmlFor="username "
                        className="mb-1 block text-sm font-semibold tracking-wide text-gray-500"
                      >
                        User Name
                      </label>
                      <Field
                        name="username"
                        type="text"
                        id="username"
                        className={`${
                          errors.username ? " field field-error" : " field"
                        }`}
                      />
                      <div className="mt-1 text-xs text-red-500">
                        {errors.username && errors.username}
                      </div>
                    </div>
                    <div className="">
                      <label
                        htmlFor="password"
                        className="mb-1 mt-5 block text-sm font-semibold tracking-wide text-gray-500 "
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
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm">
                        <Link href="/auth/forgotPassword">
                          <a className="font-medium text-indigo-500 hover:text-indigo-600">
                            Forgot your password?
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="mt-4  text-right ">
                      <button
                        type="submit"
                        className="text-medium w-full rounded-md bg-pink-600 px-4 py-2 uppercase tracking-wider text-white hover:bg-pink-700 transition ease-in-out"
                      >
                        SignIn
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="mt-6 flex items-center space-x-1 px-4">
            <p className="text-white">Don&apos;t have an account?</p>
            <Link href="/auth/signUp">
              <a className="text-sm font-semibold text-indigo-500 hover:text-indigo-600">
                SignUp
              </a>
            </Link>
          </div>
        </div>
        <div className="mt-12 flex -skew-y-12  flex-col ">
          <div className="h-10 w-4 bg-indigo-500 sm:w-16 md:w-32 lg:w-48 "></div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
