import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Question2() {
  const [confidence, setConfidence] = useState(10);
  const navigate = useNavigate();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfidence(Number(event.target.value));
  };

  const handleRelease = () => {
    if (confidence < 10) {
      setConfidence(10);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        color: "#000",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      <div
        style={{
          width: "min(500px, 80vw)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: 36,
            marginBottom: 45,
            fontWeight: 600,
          }}
        >
          How Beautiful are you?
        </h1>

        <input
          type="range"
          min="1"
          max="10"
          step="1"
          value={confidence}
          onChange={handleChange}
          onMouseUp={handleRelease}
          onTouchEnd={handleRelease}
          style={{
            width: "100%",
            accentColor: "#000",
            cursor: "pointer",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 12,
            fontSize: 14,
          }}
        >
          {Array.from(
            { length: 10 },
            (_, index) => (
              <span key={index + 1}>
                {index + 1}
              </span>
            )
          )}
        </div>

        <div
          style={{
            marginTop: 35,
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          {confidence}/10
        </div>

        <button
          onClick={() => navigate("/questions3")}
          style={{
            marginTop: 35,
            padding: "12px 32px",
            border: "2px solid #000",
            borderRadius: 10,
            background: "#000",
            color: "#fff",
            fontSize: 17,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}