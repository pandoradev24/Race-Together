import { Checkbox } from "@mui/material";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { user } from "../../signals/UserSignal";
import SingleInputField from "../common/SingleInputField";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({ value: "", visible: false });
  const [error, setError] = useState({ email: "", password: "" });
  const rememberAccountRef = useRef(null);

  useEffect(() => {
    const rememberAccount = localStorage.getItem("rememberAccount");
    setEmail(rememberAccount || "");
  }, []);

  const handleInputChange = (e, id) => {
    const value = e.target.value;

    switch (id) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword({ ...password, value: value });
        break;
      default:
        break;
    }
  };

  const loginFields = [
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
  ];

  const handleLogin = () => {
    const isRemember = rememberAccountRef.current.checked;
    if (isRemember) {
      localStorage.setItem("rememberAccount", username);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError({ email: "", password: "" });

    let errors = { email: "", password: "" };

    if (email === "") {
      errors = { ...errors, email: "Email is required" };
    }

    if (password.value === "") {
      errors = { ...errors, password: "Password is required" };
    } else {
      if (email === "pandoradev24@gmail.com" && password.value === "12345678") {
        if (localStorage.getItem("money") === null) {
          localStorage.setItem("money", user.value.money);
        }
        navigate("/lobby");
      } else {
        if (email === "") {
        } else {
          errors = { ...errors, password: "Invalid email or password" };
        }
      }
    }

    setError(errors);
  };
  return (
    <div className="w-max sm:h-max flex flex-col items-center justify-start sm:justify-center">
      <div className="w-[25rem] flex flex-col">
        <div className="text-[2.1875rem] text-[#2A4343] text-center font-bold mb-[1.5rem]">
          Sign in
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between flex-col gap-6">
            {loginFields.map((field, index) => (
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
          <div className="flex flex-col sm:flex-row sm:items-center">
            <div className="flex flex-row items-center">
              <Checkbox
                inputRef={rememberAccountRef}
                sx={{
                  color: "#4D4F4F",
                  "&.Mui-checked": { color: "#4D4F4F" },
                }}
              />
              <p
                className={clsx(
                  "text-[0.875rem] leading-[0.64rem] text-[#4D4F4F]"
                )}
              >
                Remember me
              </p>
            </div>
            <Link
              to="/recovery"
              className={clsx(
                "text-xs sm:text-[0.72rem] md:text-[0.9rem] font-medium leading-[0.64rem] md:leading-[0.8rem] text-[#1C4532] hover:underline",
                "mt-2 sm:mt-0 ml-[5%] sm:ml-[17%] md:ml-[20%] lg:ml-[34%]"
              )}
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            onClick={handleLogin}
            className="mt-4 py-2 w-full bg-[#2192B5] text-white text-[1.125rem] leading-[1.75rem] rounded-[1.25rem]"
          >
            Sign in
          </button>
          <button className="relative mt-4 py-2 w-full bg-transparent text-[#000000] text-[0.875rem] leading-[1.75rem] rounded-[1.25rem] border boder-solid border-[#000000] flex items-center justify-center">
            <img
              src="/assets/google-icon.png"
              alt="google icon"
              className="absolute left-[5%] size-5"
            />
            Continue with Google
          </button>
        </form>
        <div className="mt-4 text-center">
          <span>Don't have an account? </span>
          <Link to="/register" className="font-medium hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
