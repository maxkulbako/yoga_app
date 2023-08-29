import { FormInput } from './FormInput';
import { BaseButton } from '../Buttons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { useContext } from 'react';
import { ModalContext } from '../Modal/ModalContext';
import axios from 'axios';

import './form.scss';

const schema = yup
  .object(
    {
      name: yup
        .string()
        .required('* обязательное поле')
        .min(3, 'имя должно содержать не менне 3х символов'),
      message: yup.string().required('* обязательное поле'),
      wishes: yup.string(),
      telegram: yup
        .string()
        .notRequired()
        .when('mail', {
          is: (value) => !value?.length,
          then: (rule) => rule.required('* @telegram или mail обязательны'),
        }),
      mail: yup.string().email(),
    },
    [['mail', 'mail']]
  )
  .required();

const formVariant = {
  online_group: {
    title: 'Оставьте свои данные для записи',
    placeholder: 'вариант подписки',
  },
  personal: {
    title: 'Записаться на индивидуальные занятия',
    placeholder: 'Ваш запрос',
  },
  retreat: {
    title: 'Принять участие в ретрите',
    placeholder: 'message',
  },
  cooperation: {
    title: 'Как мы можем быть полезны?',
    placeholder: 'Сообщение',
  },
};

export function Form({ variant }) {
  const { setActiveContant } = useContext(ModalContext);
  const [isFetching, setFetching] = useState(false);
  const [isSubmit, setSubmit] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    setFetching(true);

    const { name, message, telegram, mail, wishes } = data;

    const url =
      'https://script.google.com/macros/s/AKfycbyqC8R-gfVO52dvF_fWPcYs-G4y3vZIniTOFKzdi5atKjrCMhA2M6cAsCJ1k8MvI-So/exec';

    axios
      .post(
        url,
        {
          name,
          message,
          telegram,
          mail,
          variant,
          wishes,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      .then(function (response) {
        console.log(response);
        setFetching(false);
        setSubmit('success');
      })
      .catch(function (error) {
        console.log('Произошла ошибка', error);
        setFetching(false);
        setSubmit('error');
      });
  };

  return (
    <>
      {isSubmit === '' && (
        <form onSubmit={handleSubmit(onSubmit)}>
          {isFetching && (
            <div className="fetching_wrapper">
              <div className="fetching" />
            </div>
          )}
          <p className="form_title">{formVariant[variant].title}</p>
          <div className="message block">
            <FormInput
              placeholder="Имя"
              {...register('name')}
              errorMessage={errors.name?.message}
            />
            <FormInput
              type="textarea"
              placeholder={formVariant[variant].placeholder}
              {...register('message')}
              errorMessage={errors.message?.message}
            />
          </div>
          <div className="contacts block">
            <p className="form_subtitle">как с вами связаться</p>
            <FormInput
              placeholder="@telegram"
              {...register('telegram')}
              errorMessage={errors.telegram?.message}
            />
            <FormInput
              placeholder="email"
              {...register('mail')}
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
      )}
      {isSubmit === 'success' && (
        <div className="successful_fetching">
          <p>сообщение отправлено</p>
          <svg
            fill="currentColor"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 512.002 512.002"
          >
            <g>
              <g>
                <path
                  d="M483.197,425.03l-27.412-24.095c2.417-4.505,3.699-9.565,3.699-14.821c0-8.395-3.27-16.287-9.205-22.221
        c-5.935-5.937-13.827-9.205-22.221-9.205c-0.355,0-0.707,0.014-1.06,0.026c0.011-0.354,0.026-0.706,0.026-1.061
        c0-8.394-3.27-16.285-9.205-22.222c-5.936-5.936-13.828-9.204-22.222-9.204c-7.651,0-14.879,2.723-20.594,7.698l-20.813-18.296
        c-13.591-11.947-20.479-29.813-18.425-47.79l6.649-58.213c3.075-26.922-1.106-54.245-12.092-79.015L278.454,9.661
        c-3.141-7.079-10.625-10.903-18.2-9.297c-1.566,0.331-3.027,0.883-4.371,1.603c-1.342-0.722-2.801-1.276-4.365-1.608
        c-7.528-1.595-14.976,2.231-18.115,9.31l-51.721,116.939c-10.986,24.77-15.167,52.092-12.093,79.015l6.649,58.213
        c2.054,17.977-4.834,35.843-18.425,47.79l-23.689,20.823l-1.02-1.02c-5.936-5.936-13.828-9.204-22.222-9.204
        c-8.394,0-16.287,3.27-22.221,9.204c-5.936,5.937-9.205,13.828-9.205,22.222c0,0.355,0.015,0.707,0.026,1.061
        c-0.352-0.011-0.705-0.026-1.06-0.026c-8.394,0-16.287,3.269-22.221,9.204c-5.936,5.936-9.205,13.827-9.205,22.222
        c0,6.52,1.982,12.733,5.644,17.966l-23.833,20.95c-3.515,3.089-3.859,8.444-0.771,11.957c1.675,1.907,4.015,2.88,6.367,2.88
        c1.986,0,3.981-0.695,5.591-2.109l24.283-21.346l56.587,56.587l-20.88,25.111c-2.992,3.598-2.5,8.94,1.097,11.932
        c1.583,1.316,3.503,1.958,5.414,1.958c2.43,0,4.844-1.04,6.52-3.056l20.595-24.769c4.692,2.685,10.02,4.124,15.57,4.124
        c8.394,0,16.286-3.27,22.222-9.205c6.399-6.4,9.449-14.895,9.163-23.297c0.358,0.012,0.716,0.026,1.074,0.026
        c8.048,0,16.096-3.063,22.222-9.189c5.936-5.937,9.205-13.828,9.205-22.222c0-8.395-3.269-16.287-9.205-22.222l-1.144-1.144
        c0.242-0.229,0.473-0.473,0.691-0.735l36.097-43.43c6.815-8.184,12.312-17.33,16.395-27.079
        c4.103,9.725,9.619,18.871,16.454,27.079l34.338,41.234l-4.077,4.077c-5.936,5.936-9.204,13.827-9.204,22.222
        c0,8.394,3.27,16.285,9.204,22.222c6.127,6.127,14.174,9.189,22.222,9.189c0.358,0,0.716-0.014,1.074-0.026
        c-0.285,8.403,2.764,16.898,9.165,23.298c6.127,6.127,14.174,9.189,22.222,9.189c6.728,0,13.452-2.149,19.058-6.432l22.319,27.067
        c1.675,2.032,4.099,3.083,6.542,3.083c1.898,0,3.807-0.635,5.385-1.936c3.611-2.977,4.124-8.317,1.147-11.928l-23.172-28.1
        l56.208-56.208l27.223,23.929c1.61,1.416,3.604,2.109,5.591,2.109c2.352,0,4.692-0.974,6.367-2.88
        C487.056,433.473,486.712,428.119,483.197,425.03z M159.419,467.11c-2.735,2.735-6.372,4.242-10.239,4.242
        c-3.867,0-7.504-1.506-10.239-4.241v-0.001l-70.759-70.759c-2.735-2.735-4.241-6.372-4.241-10.239
        c0-3.868,1.506-7.505,4.241-10.239c2.735-2.735,6.372-4.242,10.239-4.242s7.504,1.506,10.239,4.242l42.455,42.454l28.304,28.304
        c0.002,0.002,0.005,0.005,0.007,0.007C165.064,452.286,165.062,461.467,159.419,467.11z M191.88,434.648
        c-5.645,5.647-14.83,5.648-20.478,0l-70.759-70.759c-2.734-2.734-4.241-6.371-4.241-10.239c0-3.867,1.506-7.504,4.242-10.239
        c2.734-2.735,6.371-4.241,10.239-4.241s7.505,1.507,10.239,4.242l70.759,70.759c2.734,2.734,4.241,6.371,4.241,10.239
        C196.122,428.277,194.615,431.913,191.88,434.648z M247.387,88.003c-21.561,23.786-34.568,51.107-37.632,79.255
        c-0.609,5.592-0.837,11.303-0.679,16.97c0.128,4.597,3.895,8.237,8.465,8.237c0.079,0,0.16-0.001,0.241-0.003
        c4.678-0.13,8.365-4.028,8.234-8.706c-0.137-4.901,0.061-9.835,0.586-14.664c2.339-21.484,11.015-39.663,20.784-53.891v172.677
        c0,21.315-7.424,41.969-20.907,58.162l-35.75,43.014l-44.596-44.596l22.87-20.103c17.756-15.609,26.756-38.953,24.074-62.442
        l-6.649-58.212c-2.733-23.927,0.984-48.209,10.75-70.23l50.21-113.517V88.003z M285.377,346.033
        c-13.571-16.298-21.044-36.951-21.044-58.157l0.001-173.086c9.884,14.288,18.706,32.609,21.068,54.299
        c0.526,4.833,0.724,9.768,0.586,14.663c-0.131,4.678,3.554,8.576,8.232,8.707c0.081,0.002,0.162,0.003,0.242,0.003
        c4.569,0,8.336-3.64,8.465-8.236c0.159-5.665-0.07-11.373-0.679-16.971c-3.077-28.27-16.185-55.705-37.914-79.564V19.62
        l50.495,113.858c9.763,22.013,13.479,46.296,10.746,70.221l-6.649,58.212c-2.683,23.49,6.316,46.832,24.074,62.441l19.93,17.519
        l-44.205,44.205L285.377,346.033z M314.598,434.649c-2.734-2.735-4.241-6.373-4.241-10.239c0-3.868,1.506-7.505,4.241-10.239
        l70.759-70.76c2.734-2.735,6.371-4.241,10.239-4.241c3.868,0,7.505,1.507,10.239,4.242s4.241,6.372,4.241,10.239
        c0,3.868-1.506,7.505-4.241,10.239l-70.758,70.759C329.432,440.293,320.245,440.295,314.598,434.649z M438.296,396.352
        c0.001,0-69.412,69.277-70.937,70.92c-5.262,5.671-14.711,5.426-20.298-0.163c-5.646-5.645-5.646-14.833,0-20.478l70.758-70.758
        c2.823-2.823,6.531-4.235,10.239-4.235s7.416,1.412,10.239,4.235c2.735,2.734,4.241,6.371,4.241,10.239
        C442.537,389.98,441.031,393.618,438.296,396.352z"
                />
              </g>
            </g>
          </svg>
          <BaseButton
            type="button"
            title="OK"
            onClick={() => {
              setFetching(false);
              setSubmit(false);
              setActiveContant(false);
            }}
          />
        </div>
      )}
      {isSubmit === 'error' && (
        <div className="successful_fetching">
          <p>что-то пошло не так...</p>
          <span>😕</span>
          <p>
            повторите пожалуйста попытку позже или свяжитесь с нами другим
            способом
          </p>
        </div>
      )}
    </>
  );
}
