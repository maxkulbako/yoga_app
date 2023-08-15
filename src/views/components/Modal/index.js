import { useContext } from 'react';
import { Form } from '../Form';
import { ModalContext } from './ModalContext';
import { termsConditions, privacyPolicy, cookieFiles } from '../Footer/terms';
import { PaymentPage } from '../../Yoga/components/PaymentPage';

import './modal.scss';

const modalContent = {
  personal: <Form variant="personal" />,
  online: <Form variant="online_group" />,
  retreat: <Form variant="retreat" />,
  cooperation: <Form variant="cooperation" />,
  termsConditions: termsConditions,
  privacyPolicy: privacyPolicy,
  cookieFiles: cookieFiles,
  pay: <PaymentPage />,
};

export function Modal() {
  const { activeContant, setActiveContant } = useContext(ModalContext);

  return (
    <div
      className={activeContant ? 'modal_wrapper active' : 'modal_wrapper'}
      onClick={() => setActiveContant(false)}
    >
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal_close_btn"
          onClick={() => setActiveContant(false)}
        >
          <svg viewBox="0 0 24 24" id="close" fill="currentColor">
            <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
          </svg>
        </button>
        {activeContant && modalContent[activeContant]}
      </div>
    </div>
  );
}
