"use client";
import { memo, useMemo, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { z } from "zod";
import InputField from "@/components/re-usable/input-field";
import Icon from "@/components/icon/icon";
import { asyncLoginUsers } from "@/redux/features/userSlice";
import { useRouter } from "next/navigation";

const SignIn = memo(function SignIn(props) {
  function closeLoginPopup() {
    props.setToggle(false);
  }
  function createSignInSchema() {
    return z.object({
      email: z.string().email("Invalid email").min(3, "Email is required"),
      password: z.string().min(5, "Password is required"),
    });
  }
  const { loading, error } = useSelector(function (state) {
    return state.user;
  });

  const [passwordType, setPasswordType] = useState(false);
  function changePasswordType() {
    setPasswordType(!passwordType);
  }
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  type formVales = {
    email: string;
    password: string;
    role: string;
  };

  const router = useRouter();

  function LogInUser(values: formVales) {
    const UserLoginData = {
      user: {
        email: values.email,
        password: values.password,
        role: "USER",
      },
    };

    dispatch(asyncLoginUsers(UserLoginData) as any);
    router.push("/");
  }

  const signInInitialValues = {
    email: "mudassir1335@gmail.com",
    password: "12345",
    role: "",
  };
  // if (loading) return <p>loading....</p>;

  return (
    <div className=" overflow-x-hidden">
      <div className="h-screen bg-black absolute top-0 left-0 z-[99] w-full opacity-40"></div>

      <div className="w-full flex justify-center py-12  absolute top-12">
        <div className=" w-[40%] rounded-md px-12 shadow-md bg-white z-[999] py-12 relative">
          <div>
            <h1 className="text-3xl font-semibold text-school_name text-center mb-12">
              Well Come Back
            </h1>
            <p className="text-red-600">{error && error}</p>

            <Formik
              initialValues={signInInitialValues}
              validate={function (values) {
                try {
                  createSignInSchema().parse(values);
                } catch (error: any) {
                  return error.formErrors.fieldErrors;
                }
                return {};
              }}
              onSubmit={function (values) {
                LogInUser(values);
              }}
            >
              {({ values, setFieldValue }) => (
                <Form>
                  <ErrorMessage name="role" className="text-red-600" />

                  {/* other inputs  */}
                  <div className="flex flex-col gap-y-1">
                    <label className="text-xl text-school_name">Email:</label>
                    <InputField name="email" placeholder="email" type="text" />
                    <ErrorMessage name="email" className="text-red-600" />
                  </div>
                  <div className="flex flex-col gap-y-1 mt-4">
                    <label className="text-xl text-school_name">
                      Password:
                    </label>
                    <div className="flex items-center justify-between shadow-md ">
                      <InputField
                        name="password"
                        placeholder="password here"
                        type={passwordType ? "text" : "password"}
                      />
                      <p
                        className="cursor-pointer pr-4"
                        onClick={changePasswordType}
                      >
                        {passwordType ? (
                          <Icon name="EyeOff" />
                        ) : (
                          <Icon name="Eye" />
                        )}
                      </p>
                    </div>
                    <ErrorMessage name="password" className="text-red-600" />
                  </div>

                  <Button className="mt-6 text-white-color px-12" type="submit">
                    {loading ? "loading...." : " Submit"}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
          <div
            className="absolute top-0 z-[999] -right-12 text-white-color cursor-pointer"
            onClick={closeLoginPopup}
          >
            <Icon name="X" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default SignIn;
