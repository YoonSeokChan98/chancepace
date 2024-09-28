import { nanoid } from 'nanoid';
import PaymentComponentStyled from './styled';
import { useEffect, useRef, useState } from 'react';
import { loadPaymentWidget, PaymentWidgetInstance } from '@tosspayments/payment-widget-sdk';

const clientKey = 'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm';
const customerKey = 'YbX2HuSlsC9uVJW6NMRMj';

const PaymentComponent = () => {
    const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);

    const paymentMethodsWidgetRef = useRef<ReturnType<PaymentWidgetInstance['renderPaymentMethods']> | null>(null);

    // 결제 가격
    const [price, setPrice] = useState(35000);

    useEffect(() => {
        (async () => {
            // payment 위젯을 불러와서 clientKey와 customerKey를 넣어줌
            const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

            // paymentWidget을 div id="ayment-widget"에 지정해줌
            const paymentMethodsWidget = paymentWidget.renderPaymentMethods('#payment-widget', price);

            paymentWidget.renderAgreement('#agreement');

            paymentWidgetRef.current = paymentWidget;
            paymentMethodsWidgetRef.current = paymentMethodsWidget;
        })();
    }, []);

    useEffect(() => {
        const paymentMethodsWidget = paymentMethodsWidgetRef.current;
        if (paymentMethodsWidget == null) {
            return;
        }
        paymentMethodsWidget.updateAmount(price, paymentMethodsWidget.UPDATE_REASON.COUPON);
    }, [price]);

    return (
        <PaymentComponentStyled>
            <div className="paymentWrap">
                <div>결제창입니다.</div>
                {/* 결제 UI */}
                <div id="payment-widget"></div>
                <div id="agreement"></div>
                <div>
                    <input
                        type="checkbox"
                        onChange={(e) => {
                            setPrice(e.target.checked ? price - 5000 : price);
                        }}
                    />
                    <label>5,000원 할인 쿠폰 적용</label>
                </div>
                <button
                    onClick={async () => {
                        const paymentWidget = paymentWidgetRef.current;

                        try {
                            await paymentWidget?.requestPayment({
                                orderId: nanoid(),
                                orderName: '결제상품 이름',
                                customerName: '구매자 이름',
                                customerEmail: '이메일',
                                successUrl: `${window.location.origin}/payment/success`,
                                failUrl: `${window.location.origin}/payment/fail`,
                            });
                        } catch (error) {
                            console.log(error, '결제 에러 발생');
                        }
                    }}
                >
                    결제하기
                </button>
            </div>
        </PaymentComponentStyled>
    );
};
export default PaymentComponent;
