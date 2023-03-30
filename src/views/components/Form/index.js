import { FormInput } from "./FormInput";
import { BaseButton } from "../Buttons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import axios from "axios";

import "./form.scss";

const schema = yup
  .object(
    {
      name: yup
        .string()
        .required("* обязательное поле")
        .min(3, "имя должно содержать не менне 3х символов"),
      message: yup.string().required("* обязательное поле"),
      telegram: yup
        .string()
        .notRequired()
        .when("mail", {
          is: (value) => !value?.length,
          then: (rule) => rule.required("* @telegram или mail обязательны"),
        }),
      mail: yup.string().email(),
    },
    [["mail", "mail"]]
  )
  .required();

export function Form({ setFetching, setSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    setFetching(true);

    setTimeout(() => {
      setFetching(false);
      setSubmit(true);
    }, 2000);
    // axios
    //   .post(
    //     "https://sheet.best/api/sheets/6b6f264a-b636-48af-a475-1b77d863f740/tabs/Sheet_2",
    //     data
    //   )
    //   .then((response) => console.log(response));
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
        <FormInput
          type="textarea"
          placeholder="message"
          {...register("message")}
          errorMessage={errors.message?.message}
        />
      </div>
      <div className="contacts block">
        <p className="form_subtitle">как с вами связаться</p>
        <FormInput
          placeholder="@telegram"
          {...register("telegram")}
          errorMessage={errors.telegram?.message}
        />
        <FormInput
          placeholder="mail"
          {...register("mail")}
          errorMessage={errors.mail?.message}
        />
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
