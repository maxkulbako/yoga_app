import "./paymentPage.scss";
import { BaseButton } from "../../components/Buttons";

import React, { useEffect } from 'react';

export function PaymentPage () {
    return (
        <div className="payment_page_wrapper">BUY
        <PaymentWidget/>
        </div>
    );
};


export const PaymentWidget = () => {
  useEffect(() => {
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://secure.wayforpay.com/server/pay-widget.js?ref=button';
    scriptElement.id = 'widget-wfp-script';
    scriptElement.async = true;
    document.body.appendChild(scriptElement);

    window.runWfpWdgt = runWfpWdgt;

    return () => {
      delete window.runWfpWdgt;
      const script = document.getElementById('widget-wfp-script');
      if (script) {
        script.remove();
      }
    };
  }, []);

  const runWfpWdgt = (url) => {
    const wayforpay = new window.Wayforpay();
    wayforpay.invoice(url);
  };

  return (
    <>
      <script src="https://secure.wayforpay.com/server/pay-widget.js?ref=button" id="widget-wfp-script" async></script>
      <BaseButton onClick={() => runWfpWdgt('https://secure.wayforpay.com/button/bf8d2a078bed5')} title="оплатить"/>
    </>
  );
};

export default PaymentWidget;
