import { usePaymentMethods } from "../hooks/usePaymentMethods";
import { useRoundUp } from "../hooks/useRoundUp";
import { PaymentStrategy } from "../models/PaymentStrategy";
import { DonationCheckbox } from "./DonationCheckbox";
import { PaymentMethods } from "./PaymentMethods";

export const Payment = ({ amount, strategy }: { amount: number, strategy:PaymentStrategy }) => {
  const { paymentMethods } = usePaymentMethods();
  const { total, tip, agreeToDonate, updateAgreeToDonate } = useRoundUp({
    amount,
    strategy,
  });

  const formatCheckboxLabel = (agreeToDonate: boolean, tip: number, strategy: PaymentStrategy) => {
    return agreeToDonate
      ? "Thanks for your donation."
      : `I would like to donate ${strategy.currencySign}${tip} to charity.`;
  };

  return (
    <div className="mx-auto max-w-screen-xl my-12 p-4 border border-solid border-gray-100">
      <h3 className="text-lg font-medium">Payment</h3>
      <PaymentMethods paymentMethods={paymentMethods} />
      <DonationCheckbox 
        onChange={updateAgreeToDonate}
        checked={agreeToDonate}
        content={formatCheckboxLabel(agreeToDonate, tip, strategy)}
      />
      <button className="bg-red-100 py-1 px-4 text-red-600 rounded-md my-2 hover:bg-red-200">
        {strategy.currencySign}{total}
      </button>
    </div>
  );
};
