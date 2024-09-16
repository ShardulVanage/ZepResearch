import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000'; // Make sure this matches your backend URL
const CCAvenue_URL = 'https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction';

const CCAvenuePay = ({ encryptedOrderInfo, accessCode }) => {
  useEffect(() => {
    if (encryptedOrderInfo && accessCode) {
      console.log('Submitting form to CCAvenue');
      console.log('Encrypted Order Info:', encryptedOrderInfo);
      console.log('Access Code:', accessCode);

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = CCAvenue_URL;
      form.target = '_blank'; // Open in a new tab

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
      form.submit();
      document.body.removeChild(form);
    }
  }, [encryptedOrderInfo, accessCode]);

  return <div>Redirecting to payment gateway...</div>;
};

const Payment = () => {
  const [paymentData, setPaymentData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const initiatePayment = async () => {
    setIsLoading(true);
    setError(null);
    try {
      console.log('Initiating payment...');
      const response = await axios.post(`${API_BASE_URL}/api/ccavenue/initiate-payment`, {
        orderId: 'ORDER123',
        amount: '100.00',
        redirectUrl: 'http://your-website.com/payment-success',
        cancelUrl: 'http://your-website.com/payment-cancelled'
      });
      console.log('Received response:', response.data);
      if (response.data && response.data.encryptedOrderInfo && response.data.accessCode) {
        setPaymentData(response.data);
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
      setError('Failed to initiate payment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={initiatePayment} disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Pay Now'}
      </button>
      {isLoading && <p>Initiating payment...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {paymentData && (
        <CCAvenuePay 
          encryptedOrderInfo={paymentData.encryptedOrderInfo} 
          accessCode={paymentData.accessCode} 
        />
      )}
    </div>
  );
};

export default Payment;