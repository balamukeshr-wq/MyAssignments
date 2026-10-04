type makepaymentMethod = "UPI" | "CreditCard" | "PayPal";

function makepaymentMethod(method: makepaymentMethod) {
    if (method === "UPI") {
        console.log("UPI payment selected");
    }
    else if (method === "CreditCard") {
        console.log("Credit Card payment selected");
    }
    else {
        console.log("PayPal payment selected");
    }
}

makepaymentMethod("UPI");
makepaymentMethod("CreditCard");
//makePayment("Netbanking");