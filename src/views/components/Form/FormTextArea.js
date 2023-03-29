import { useState } from "react";
import "./form.scss";

export function FormTextArea({ name, placeholder, onChange }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="form_input">
      <textarea
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => setFocused(true)}
        focused={focused.toString()}
      />
      {/* <span>{errorMessage}</span> */}
    </div>
  );
}
