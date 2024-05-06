import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SingleInputField from "../common/SingleInputField";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({ value: "", visible: false });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    visible: false,
  });
  const [error, setError] = useState({});

  const handleInputChange = (e, id) => {
    const value = e.target.value;
    switch (id) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword({ ...password, value: value });
        break;
      case "confirmPassword":
        setConfirmPassword({ ...confirmPassword, value: value });
        break;
      default:
        break;
    }
  };

  const registerFields = [
    {
      id: "username",
      type: "text",
      value: username,
      label: "Username",
      placeholder: "John Doe",
      onChange: handleInputChange,
    },
    {
      id: "email",
      type: "text",
      value: email,
      label: "E-mail",
      placeholder: "example@gmail.com",
      onChange: handleInputChange,
    },
    {
      id: "password",
      type: password.visible ? "text" : "password",
      value: password.value,
      label: "Password",
      placeholder: "@#%$*!&^",
      tailingComponent: (
        <img
          onClick={() =>
            setPassword({ ...password, visible: !password.visible })
          }
          src={`${
            password.visible
              ? "/assets/visibility-icon.svg"
              : "/assets/visibility-off-icon.svg"
          }`}
          alt=""
        />
      ),
      onChange: handleInputChange,
    },
    {
      id: "confirmPassword",
      type: confirmPassword.visible ? "text" : "password",
      value: confirmPassword.value,
      label: "Confirm Password",
      placeholder: "@#%$*!&^",
      tailingComponent: (
        <img
          onClick={() =>
            setConfirmPassword({
              ...confirmPassword,
              visible: !confirmPassword.visible,
            })
          }
          src={`${
            confirmPassword.visible
              ? "/assets/visibility-icon.svg"
              : "/assets/visibility-off-icon.svg"
          }`}
          alt=""
        />
      ),
      onChange: handleInputChange,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    setError({});
    // registerMutation.mutate();
  };

  return (
    <div className="pt-24 w-max sm:h-max flex flex-col items-center justify-start sm:justify-center">
      <div className="w-[25rem] flex flex-col">
        <div className="text-[2.1875rem] text-[#2A4343] text-center font-bold mb-[1.5rem]">
          Sign up
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between flex-col gap-6">
            {registerFields.map((field, index) => (
              <SingleInputField
                key={index}
                id={field.id}
                type={field.type}
                value={field.value}
                label={field.label}
                placeholder={field.placeholder}
                tailingComponent={field.tailingComponent}
                onChange={field.onChange}
                error={error[field.id]}
              />
            ))}
          </div>
          <button
            type="submit"
            className="mt-10 py-2 w-full bg-[#2192B5] text-white text-[1.125rem] leading-[1.75rem] rounded-[1.25rem]"
          >
            Sign up
          </button>
        </form>
        <div className="mt-4 text-center">
          <span>Already have an account? </span>
          <Link to="/login" className="font-medium hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
