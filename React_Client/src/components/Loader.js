import React, { useState, useEffect } from "react";

function Loader() {
  const [showLoadingText, setShowLoadingText] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoadingText(true);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: "50%",
      }}
    >
      {showLoadingText ? (
        <p>Results Loading...</p>
      ) : (
        <div className="loader">
          <div className="face">
            <div className="circle"></div>
          </div>
          <div className="face">
            <div className="circle"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Loader;