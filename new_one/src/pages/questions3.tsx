import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Question3() {
  const navigate = useNavigate();

  const [swapped, setSwapped] = useState(false);

  const swapButtons = () => {
    setSwapped((previous) => !previous);
  };

  const handleYes = () => {
    navigate("/question4");
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        background: "#fff",
        color: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: 36,
            fontWeight: 600,
            marginBottom: 40,
          }}
        >
          Are you CZ head?
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
          }}
        >
          {!swapped ? (
            <>
              <button
                onClick={handleYes}
                style={buttonStyle}
              >
                Yes
              </button>

              <button
                onMouseEnter={swapButtons}
                onPointerEnter={swapButtons}
                onClick={swapButtons}
                style={buttonStyle}
              >
                No
              </button>
            </>
          ) : (
            <>
              <button
                onMouseEnter={swapButtons}
                onPointerEnter={swapButtons}
                onClick={swapButtons}
                style={buttonStyle}
              >
                No
              </button>

              <button
                onClick={handleYes}
                style={buttonStyle}
              >
                Yes
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  width: 105,
  height: 48,
  border: "2px solid #000",
  borderRadius: 10,
  background: "#fff",
  color: "#000",
  fontSize: 18,
  fontWeight: 500,
  cursor: "pointer",
};