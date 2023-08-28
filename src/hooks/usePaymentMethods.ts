import { useEffect, useState } from "react";
import { LocalPaymentMethod, RemotePaymentMethod } from "../types/payment.type";
import { PaymentMethod } from "../models/PaymentMethod";

export const usePaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<LocalPaymentMethod[]>(
    []
  );

  const fetchPaymentMethodsApi: () => Promise<
    RemotePaymentMethod[]
  > = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        const methods: RemotePaymentMethod[] = [];
        methods.push({
          name: "apple",
        }),
          methods.push({
            name: "google",
          });
        resolve(methods);
      }, 200)
    );
  };

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      const methods: RemotePaymentMethod[] = await fetchPaymentMethodsApi();
      if (methods.length > 0) {
        const extended: LocalPaymentMethod[] = methods.map((method) => new PaymentMethod(method));
        extended.push(new PaymentMethod({ name:"cash" }));
        setPaymentMethods(extended);
      } else {
        setPaymentMethods([]);
      }
    };

    fetchPaymentMethods();
  }, []);

  return {
    paymentMethods,
  };
};
