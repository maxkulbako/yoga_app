import { useState } from "react";
import "./form.scss";

export function FormInput(props) {
  const { errorMessage, ...other } = props;
  const [focused, setFocused] = useState(false);
  return (
    <div className="form_input">
      <input
        {...other}
        onBlur={() => setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
}
