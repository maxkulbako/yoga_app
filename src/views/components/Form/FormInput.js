import React, { forwardRef } from "react";
import "./form.scss";

export const FormInput = forwardRef(
  ({ type, placeholder, errorMessage, ...props }, ref) => {
    const InputComponent = type === "textarea" ? "textarea" : "input";

    return (
      <div className="form_input">
        <InputComponent
          type={type}
          placeholder={placeholder}
          {...props}
          ref={ref}
        />
        <span>{errorMessage}</span>
      </div>
    );
  }
);
