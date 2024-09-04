import CommonForm from "@/components/common/Form";
import { loginFormControl } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);

  function onSubmit() {}

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center ">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to you Account
        </h1>
        <p className="mt-1">
          Dont have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to={"/auth/register"}
          >
            register
          </Link>
        </p>
      </div>
      <CommonForm
        formControl={loginFormControl}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}

export default AuthLogin;
