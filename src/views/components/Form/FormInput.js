import React, { forwardRef } from "react";
import "./form.scss";

export const FormInput = forwardRef(
  ({ placeholder, errorMessage, ...props }, ref) => {
    console.log(props);
    return (
      <div className="form_input">
        <input type="text" placeholder={placeholder} {...props} ref={ref} />
        <span>{errorMessage}</span>
      </div>
    );
  }
);
