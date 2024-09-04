import CommonForm from "@/components/common/Form";
import { registerFormControl } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  username: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);

  function onSubmit() {}

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center ">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create New Account
        </h1>
        <p className="mt-1">
          Already have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to={"/auth/login"}
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControl={registerFormControl}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}

export default AuthRegister;
