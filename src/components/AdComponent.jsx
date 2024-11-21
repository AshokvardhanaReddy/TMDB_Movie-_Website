import React, { useEffect } from "react";

const AdComponent = () => {
  useEffect(() => {
    // Initialize or reload AdSense
    if (window.adsbygoogle && window.adsbygoogle.length === 0) {
      window.adsbygoogle.push({});
    }
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7840257625298553" // Replace with your AdSense client ID
        data-ad-slot="1671820726" // Replace with your Ad slot ID
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdComponent;
