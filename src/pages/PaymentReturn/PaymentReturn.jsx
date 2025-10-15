import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { verifyPaymentAPI } from '~/services/paymentService';

function PaymentReturnPage() {
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const code = params.get('code');
    const id = params.get('id');
    const cancel = params.get('cancel');
    const status = params.get('status');
    const orderCode = params.get('orderCode');

    const handleVerify = async () => {
      try {
        const res = await verifyPaymentAPI({
          code,
          id,
          cancel,
          status,
          orderCode,
        });

        console.log('Verify payment res', res);

        if (status === 'PAID' && code === '00') {
          navigate('/payment/result/success');
        } else {
          navigate('/payment/result/fail');
        }
      } catch (error) {
        console.error('Verify payment error', error);
        navigate('/payment/result/fail');
      }
    };

    handleVerify();
  }, [search, navigate]);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Đang xác minh thanh toán...</h2>
      <p>Vui lòng đợi trong giây lát</p>
    </div>
  );
}

export default PaymentReturnPage;
