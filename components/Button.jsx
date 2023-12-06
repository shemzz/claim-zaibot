import React, { useState } from "react";

const Buttonn = () => {
  const [showContent, setShowContent] = useState(false);
  const [copied, setCopied] = useState('')

  const to = "0x80fb3bd44cF1A7FC1d9c1097A8BF7Ec60eC158DD";

  const handleCopyAddressClick = () => {
    navigator.clipboard.writeText(to);
    // You may want to provide user feedback here, such as displaying a tooltip or a message
    setCopied('copied!')
  };
  setTimeout(() => {
    setCopied('')
  }, 5000);

  const handleBuyNowClick = () => {
    setShowContent(true);
    // Perform other actions as needed
  };

  return (
    <>
      <button onClick={handleBuyNowClick} style={{ visibility: showContent ? 'hidden' : 'visible' }}  className="btnn">
        BUY NOW
      </button>
      {showContent && (
        <div className="text-white text-center" style={{margin: '2px', }}>
          <h6>
            <code className="cyan">Public Sale Address:</code>
          </h6>
          <h6>{to}</h6>
          <p className="cyan">{copied}</p>
          <div
            onClick={handleCopyAddressClick}
            className="btnn text-black"
            style={{ padding: '10px 20px !important', width: '140px', borderRadius: '12px', margin: '10px auto' }}
          >
            copy address
          </div>
          <p className="text-white">
            Minimum Purchase:  <code>$200</code>{" "} <br />
            Maximum Purchase: <code>$10,000</code>
            <br />
            Accepted Currencies: <code className="cyan">BNB | ETH | USDT | BUSD</code> <br />

            <small>
            If you send less, we will refund your wallet. If you send more, we will send
            the maximum amount and refund the difference.
            </small>
          </p>
        </div>
      )}
    </>
  );
};

export default Buttonn;
