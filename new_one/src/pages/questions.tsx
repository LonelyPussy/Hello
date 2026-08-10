import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Question() {
  const noButtonRef = useRef<HTMLButtonElement | null>(null);
  const navigate = useNavigate();

  const moveNoButton = () => {
    const button = noButtonRef.current;

    if (!button) {
      return;
    }

    const padding = 20;

    const maxX =
      window.innerWidth - button.offsetWidth - padding;

    const maxY =
      window.innerHeight - button.offsetHeight - padding;

    const x =
      padding +
      Math.random() * Math.max(maxX - padding, 1);

    const y =
      padding +
      Math.random() * Math.max(maxY - padding, 1);

    button.style.position = "fixed";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
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
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: 36,
            marginBottom: 30,
            fontWeight: 600,
            color: "#000",
          }}
        >
          Are you Intelligent and Cracked?
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <button
            onClick={() => navigate("/questions2")}
            style={buttonStyle}
          >
            Yes
          </button>

          <button
            ref={noButtonRef}
            onMouseEnter={moveNoButton}
            onPointerEnter={moveNoButton}
            style={buttonStyle}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  border: "2px solid #000",
  borderRadius: 10,
  padding: "12px 28px",
  fontSize: 18,
  fontWeight: 500,
  cursor: "pointer",
  background: "#fff",
  color: "#000",
};