import { useState, useContext } from "react";
import { Form } from "../Form";
import { ModalContext } from "./ModalContext";

import "./modal.scss";

export function Modal() {
  const { isActive, setActive } = useContext(ModalContext);
  const [isFetching, setFetching] = useState(false);
  const [isSubmit, setSubmit] = useState(false);

  return (
    <div className={isActive ? "modal_wrapper active" : "modal_wrapper"}>
      {isFetching && (
        <div className="fetching_wrpper">
          <div className="fetching" />
        </div>
      )}
      <div className="modal_content">
        <button
          className="modal_close_btn"
          onClick={() => {
            setActive(false);
            setFetching(false);
            setSubmit(false);
          }}
        >
          <svg viewBox="0 0 24 24" id="close" fill="currentColor">
            <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
          </svg>
        </button>
        {!isSubmit ? (
          <Form setFetching={setFetching} setSubmit={setSubmit} />
        ) : (
          "Сообщение отправлено"
        )}
      </div>
    </div>
  );
}
