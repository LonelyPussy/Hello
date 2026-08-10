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
        background: "#f7f5f2",
        color: "#111",
        fontFamily:
          "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        overflow: "hidden",
        userSelect: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      {/* Decorative circle — top right */}
      <div
        style={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          border: "1px solid rgba(0,0,0,0.06)",
          top: -150,
          right: -100,
          pointerEvents: "none",
        }}
      />

      {/* Decorative circle — bottom left */}
      <div
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          border: "1px solid rgba(0,0,0,0.05)",
          bottom: -250,
          left: -180,
          pointerEvents: "none",
        }}
      />

      <main
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 650,
          textAlign: "center",
        }}
      >
        {/* Question number */}
        <p
          style={{
            margin: "0 0 18px",
            fontSize: 12,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#999",
          }}
        >
          Question 02
        </p>

        {/* Question */}
        <h1
          style={{
            margin: "0 auto 48px",
            fontSize: "clamp(36px, 7vw, 58px)",
            lineHeight: 1.08,
            fontWeight: 500,
            letterSpacing: "-2px",
          }}
        >
          How{" "}
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            Beautiful
          </span>{" "}
          are you?
        </h1>

        {/* Slider */}
        <div
          style={{
            width: "100%",
            maxWidth: 560,
            margin: "0 auto",
          }}
        >
          <input
            type="range"
            min="1"
            max="10"
            step="1"
            value={confidence}
            onChange={handleChange}
            onMouseUp={handleRelease}
            onTouchEnd={handleRelease}
            onKeyUp={handleRelease}
            style={{
              width: "100%",
              height: 6,
              accentColor: "#111",
              cursor: "pointer",
              touchAction: "none",
            }}
          />

          {/* Numbers */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 12,
              padding: "0 2px",
              fontSize: 13,
              color: "#777",
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

          {/* Current value */}
          <div
            style={{
              marginTop: 32,
              fontSize: "clamp(22px, 5vw, 28px)",
              fontWeight: 500,
              letterSpacing: "-0.5px",
            }}
          >
            {confidence}
            <span
              style={{
                color: "#999",
                fontWeight: 400,
              }}
            >
              /10
            </span>
          </div>

          {/* Submit */}
          <button
            onClick={() => navigate("/questions3")}
            style={{
              marginTop: 32,
              padding: "13px 34px",
              border: "1px solid #222",
              borderRadius: 12,
              background: "transparent",
              color: "#111",
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: "0.5px",
              cursor: "pointer",
              transition:
                "background 0.25s ease, color 0.25s ease, transform 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#111";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "transparent";
              e.currentTarget.style.color = "#111";
              e.currentTarget.style.transform =
                "translateY(0)";
            }}
          >
            Submit
          </button>
        </div>
      </main>
    </div>
  );
}