import { LocalPaymentMethod } from "../types/payment.type";

export const PaymentMethods = ({
  paymentMethods,
}: {
  paymentMethods: LocalPaymentMethod[];
}) => {
  return (
    <div className="flex flex-col py-2 my-2">
      {paymentMethods.map((method) => (
        <label key={method.provider}>
          <input
            type="radio"
            name="payment"
            value={method.provider}
            defaultChecked={method.isDefaultMethod}
          />
          <span className="mx-2">{method.label}</span>
        </label>
      ))}
    </div>
  );
};
