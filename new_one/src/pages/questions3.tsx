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
        background: "#f7f5f2",
        color: "#111",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        overflow: "hidden",
        userSelect: "none",
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
          maxWidth: 700,
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: "0 0 18px",
            fontSize: 12,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#999",
          }}
        >
          Question 03
        </p>

        <h1
          style={{
            margin: "0 auto 40px",
            fontSize: "clamp(36px, 7vw, 58px)",
            lineHeight: 1.08,
            fontWeight: 500,
            letterSpacing: "-2px",
          }}
        >
          Are you{" "}
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            CZ head?
          </span>
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 14,
            minHeight: 52,
          }}
        >
          {!swapped ? (
            <>
              <button
                onClick={handleYes}
                style={buttonStyle}
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
                Yes
              </button>

              <button
                style={buttonStyle}
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse") {
                    swapButtons();
                  }
                }}
                onPointerDown={(event) => {
                  if (event.pointerType === "touch") {
                    event.preventDefault();
                    swapButtons();
                  }
                }}
              >
                No
              </button>
            </>
          ) : (
            <>
              <button
                style={buttonStyle}
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse") {
                    swapButtons();
                  }
                }}
                onPointerDown={(event) => {
                  if (event.pointerType === "touch") {
                    event.preventDefault();
                    swapButtons();
                  }
                }}
              >
                No
              </button>

              <button
                onClick={handleYes}
                style={buttonStyle}
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
                Yes
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  width: 105,
  height: 48,
  border: "1px solid #222",
  borderRadius: 12,
  background: "transparent",
  color: "#111",
  fontSize: 15,
  fontWeight: 500,
  letterSpacing: "0.5px",
  cursor: "pointer",
  touchAction: "manipulation",
  transition:
    "background 0.25s ease, color 0.25s ease, transform 0.25s ease",
};