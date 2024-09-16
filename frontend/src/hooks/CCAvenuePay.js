import React, { useEffect, useRef } from 'react';

const CCAvenue_URL = 'https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction';

const CCAvenuePay = ({ encryptedOrderInfo, accessCode }) => {
  const formSubmitted = useRef(false);

  useEffect(() => {
    console.log('CCAvenuePay component mounted');
    console.log('Props received:', { encryptedOrderInfo, accessCode });

    if (formSubmitted.current) {
      console.log('Form already submitted, skipping');
      return;
    }

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = CCAvenue_URL;

    const encryptedOrderInfoInput = document.createElement('input');
    encryptedOrderInfoInput.type = 'hidden';
    encryptedOrderInfoInput.name = 'encRequest';
    encryptedOrderInfoInput.value = encryptedOrderInfo;

    const accessCodeInput = document.createElement('input');
    accessCodeInput.type = 'hidden';
    accessCodeInput.name = 'access_code';
    accessCodeInput.value = accessCode;

    form.appendChild(encryptedOrderInfoInput);
    form.appendChild(accessCodeInput);

    document.body.appendChild(form);
    console.log('Form appended to body, submitting...');
    form.submit();
    formSubmitted.current = true;

    return () => {
      console.log('CCAvenuePay component unmounting');
      if (document.body.contains(form)) {
        document.body.removeChild(form);
      }
    };
  }, [encryptedOrderInfo, accessCode]);

  return <div>Redirecting to payment gateway...</div>;
};

export default CCAvenuePay;