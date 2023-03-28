import { FormInput } from "./FormInput";
import { FormTextArea } from "./FormTextArea";
import { BaseButton } from "../Buttons";

import "./form.scss";
import { useState } from "react";

export function Form() {
  const [values, setValues] = useState({
    Имя: "",
    Сообшения: "",
    "@telegram": "",
    email: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.placeholder]: e.target.value });
  };

  const inputs = {
    name: {
      label: "name",
      placeholder: "Имя",
      type: "text",
      onChange: onChange,
      value: values.name,
      teg: "input",
      errorMessage:
        "Имя должно содержать не менее 3х букв и начинаться с заглавной",
      required: true,
      pattern: "^[А-ЯA-Z][а-яa-z]{2,16}$",
    },
    messages: {
      label: "messages",
      placeholder: "Сообшения",
      type: "text",
      onChange: onChange,
      value: values["Сообшения"],
      errorMessage:
        "Имя должно содержать не менне 3х имсволов и начинаться с заглавной буквы",
      required: true,
      pattern: "Макс",
    },
    telegram: {
      label: "@telegram",
      placeholder: "@telegram",
      type: "text",
      onChange: onChange,
      value: values["@telegram"],
      errorMessage: "Некорректный ник_нейм",
      required: true,
      pattern: "^@[a-zA-Z0-9_]+$",
    },
    email: {
      label: "email",
      placeholder: "email",
      type: "text",
      onChange: onChange,
      value: values["email"],
      errorMessage: "Неверный формат email",
      required: true,
      pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
    },
  };

  console.log(values);

  return (
    <form>
      <p className="form_title">Как мы можем Вам помочь?</p>
      <div className="message block">
        <FormInput {...inputs.name} />
        <FormTextArea {...inputs.messages} />
      </div>
      <div className="contacts block">
        <p className="form_subtitle">как с вами связаться</p>
        <FormInput {...inputs.telegram} />
        <FormInput {...inputs.email} />
      </div>
      <div>
        <BaseButton title="Отправить сообщение" variant="in_form" />
      </div>
    </form>
  );
}
