import "./form.scss";

export function FormTextArea(props) {
  const { errorMessage, ...other } = props;

  return (
    <div className="form_input">
      {/* <label>{label}</label> */}
      <textarea {...other} />
      <span>{errorMessage}</span>
    </div>
  );
}
