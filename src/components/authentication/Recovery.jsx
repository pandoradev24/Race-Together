import React from "react";
import validator from "validator";
import SingleInputField from "../common/SingleInputField";

const Recovery = () => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    if (email === "") {
      setError("Please enter your email");
    }

    if (email !== "" && !validator.isEmail(email)) {
      setError("Please enter a valid email");
    }
  };

  return (
    <div className="w-max sm:h-max flex flex-col items-center justify-start sm:justify-center">
      <div className="pb-[10rem] w-[25rem] flex flex-col">
        <div className="text-[2.1875rem] text-[#2A4343] text-center font-bold mb-[1.5rem]">
          Recovery
        </div>
        <form onSubmit={handleSubmit}>
          <SingleInputField
            id="email"
            type="text"
            value={email}
            label="E-mail"
            placeholder="example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            error={error}
          />
          <button
            type="submit"
            className="mt-8 py-2 w-full bg-[#2192B5] text-white text-[1.125rem] leading-[1.75rem] rounded-[1.25rem]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Recovery;
