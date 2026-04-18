import React, { useEffect, useState } from "react";
import "./Account.css";

const Account = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/user")
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.log(err));
  }, []);

  // ✅ Copy Function
  const copyNumber = (num) => {
    navigator.clipboard.writeText(num);
    alert("Copied: " + num);
  };

  const numbers = ["9452655579", "7991344901"];

  return (
    <div className="account-container">

      <h1 className="account-title">My Account</h1>
      <p className="account-subtitle">
        Manage your account and complete your payment
      </p>

      {/* USER INFO */}
      <div className="account-card">
        <h2>User Details</h2>

        <div className="user-row">
          <span>Name</span>
          <p>{user?.name || "Loading..."}</p>
        </div>

        <div className="user-row">
          <span>Email</span>
          <p>{user?.email || "Loading..."}</p>
        </div>
      </div>

      {/* PAYMENT SECTION */}
      <div className="account-card">
        <h2>Payment Options</h2>

        {/* QR PAYMENT */}
        <div className="payment-box qr-box">
  <h3 className="upi-title">Pay via UPI</h3>

  <img 
    src="/qr.jpg" 
    alt="UPI QR"
    className="qr-img"
  />

  <p className="upi-subtext">
    Scan to pay instantly
  </p>
</div>

        {/* MOBILE PAYMENT */}
        <div className="payment-box">
          <h3>Pay via Mobile Number</h3>

          {numbers.map((num, index) => (
            <div key={index} className="mobile-row">
              <span>📞 +91 {num}</span>

              <button onClick={() => copyNumber(num)}>
                Copy
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* WHATSAPP BUTTON */}
      <div className="account-card center">
        <button 
          className="whatsapp-btn"
          onClick={() => {
            const phone = "917991344901";
            const message = `Hello, I have completed the payment for Full Stack Development course. Name: ${user?.name}`;

            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
          }}
        >
          Send Screenshot on WhatsApp
        </button>
      </div>

    </div>
  );
};

export default Account;