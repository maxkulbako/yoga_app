import { FormInput } from "./FormInput";
// import { FormTextArea } from "./FormTextArea";
import { BaseButton } from "../Buttons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

import "./form.scss";

const schema = yup
  .object(
    {
      name: yup.string().required(),
      message: yup.string().required("Обязательное поле"),
      telegram: yup
        .string()
        .notRequired()
        .when("mail", {
          is: (value) => !value?.length,
          then: (rule) => rule.required("telegram or mail are requred"),
        }),
      mail: yup.string().email(),
    },
    [["mail", "mail"]]
  )
  .required();

export function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  let props = { ...register("name") };

  console.log(props);

  const onSubmit = (data) => {
    console.log(data);

    // axios
    //   .post(
    //     "https://sheet.best/api/sheets/6b6f264a-b636-48af-a475-1b77d863f740/tabs/Sheet_2",
    //     data
    //   )
    //   .then((response) => console.log(response));

    reset({});
    data = {};
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="form_title">Как мы можем Вам помочь?</p>
      <div className="message block">
        <FormInput
          placeholder="Имя"
          {...register("name")}
          errorMessage={errors.name?.message}
        />
        <div className="form_input">
          <textarea placeholder="Сообщение" {...register("message")} />
          <span>{errors.message?.message}</span>
        </div>
      </div>
      <div className="contacts block">
        <p className="form_subtitle">как с вами связаться</p>
        <div className="form_input">
          <input placeholder="@telegram" {...register("telegram")} />
          <span>{errors.telegram?.message}</span>
        </div>
        <div className="form_input">
          <input placeholder="Email" {...register("mail")} />
          <span>{errors.mail?.message}</span>
        </div>
      </div>
      <div>
        <BaseButton
          type="submit"
          title="Отправить сообщение"
          variant="in_form"
        />
      </div>
    </form>
  );
}
