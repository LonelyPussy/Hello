import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Question() {
  const noButtonRef =
    useRef<HTMLButtonElement | null>(null);

  const navigate = useNavigate();

  const moveNoButton = () => {
    const button = noButtonRef.current;

    if (!button) return;

    const padding = 24;

    const buttonWidth =
      button.offsetWidth;

    const buttonHeight =
      button.offsetHeight;

    const maxX =
      window.innerWidth -
      buttonWidth -
      padding;

    const maxY =
      window.innerHeight -
      buttonHeight -
      padding;

    /*
     * Get the question area.
     * The button will never be placed
     * anywhere near this area.
     */
    const questionArea =
      document.getElementById(
        "question-area"
      );

    if (!questionArea) return;

    const questionRect =
      questionArea.getBoundingClientRect();

    const safeMargin = 60;

    const forbiddenLeft =
      questionRect.left -
      safeMargin;

    const forbiddenRight =
      questionRect.right +
      safeMargin;

    const forbiddenTop =
      questionRect.top -
      safeMargin;

    const forbiddenBottom =
      questionRect.bottom +
      safeMargin;

    let x = padding;
    let y = padding;

    let foundPosition = false;

    /*
     * Find a random position that does
     * not overlap the question.
     */
    for (let i = 0; i < 150; i++) {
      const candidateX =
        padding +
        Math.random() *
          Math.max(
            maxX - padding,
            1
          );

      const candidateY =
        padding +
        Math.random() *
          Math.max(
            maxY - padding,
            1
          );

      const buttonLeft =
        candidateX;

      const buttonRight =
        candidateX +
        buttonWidth;

      const buttonTop =
        candidateY;

      const buttonBottom =
        candidateY +
        buttonHeight;

      const overlapsQuestion =
        buttonRight >
          forbiddenLeft &&
        buttonLeft <
          forbiddenRight &&
        buttonBottom >
          forbiddenTop &&
        buttonTop <
          forbiddenBottom;

      if (!overlapsQuestion) {
        x = candidateX;
        y = candidateY;
        foundPosition = true;
        break;
      }
    }

    /*
     * Fallback positions.
     */
    if (!foundPosition) {
      const corners = [
        {
          x: padding,
          y: padding,
        },
        {
          x: maxX,
          y: padding,
        },
        {
          x: padding,
          y: maxY,
        },
        {
          x: maxX,
          y: maxY,
        },
      ];

      for (const corner of corners) {
        const buttonLeft =
          corner.x;

        const buttonRight =
          corner.x +
          buttonWidth;

        const buttonTop =
          corner.y;

        const buttonBottom =
          corner.y +
          buttonHeight;

        const overlapsQuestion =
          buttonRight >
            forbiddenLeft &&
          buttonLeft <
            forbiddenRight &&
          buttonBottom >
            forbiddenTop &&
          buttonTop <
            forbiddenBottom;

        if (!overlapsQuestion) {
          x = corner.x;
          y = corner.y;
          break;
        }
      }
    }

    /*
     * Only NOW make the button fixed.
     * This prevents Yes and No from
     * overlapping on initial load.
     */
    button.style.position = "fixed";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    button.style.zIndex = "100";
    button.style.margin = "0";
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100dvh",
        minHeight: "100dvh",
        background: "#f7f5f2",
        color: "#111",
        fontFamily:
          "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        overflow: "hidden",
        userSelect: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        boxSizing: "border-box",
      }}
    >
      {/* Decorative circle */}
      <div
        style={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          border:
            "1px solid rgba(0,0,0,0.06)",
          top: -150,
          right: -100,
          pointerEvents: "none",
        }}
      />

      {/* Decorative circle */}
      <div
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          border:
            "1px solid rgba(0,0,0,0.05)",
          bottom: -250,
          left: -180,
          pointerEvents: "none",
        }}
      />

      <main
        id="question-area"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 700,
          textAlign: "center",
          zIndex: 2,
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
          Question 01
        </p>

        <h1
          style={{
            margin: "0 auto 38px",
            maxWidth: 650,
            fontSize:
              "clamp(34px, 7vw, 58px)",
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
            Intelligent
          </span>{" "}
          and Cracked?
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 14,
            minHeight: 55,
          }}
        >
          {/* YES */}
          <button
            type="button"
            onClick={() =>
              navigate("/questions2")
            }
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "#111";

              e.currentTarget.style.color =
                "#fff";

              e.currentTarget.style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "transparent";

              e.currentTarget.style.color =
                "#111";

              e.currentTarget.style.transform =
                "translateY(0)";
            }}
          >
            Yes
          </button>

          {/* NO */}
          <button
            ref={noButtonRef}
            type="button"
            onMouseEnter={moveNoButton}
            onPointerEnter={moveNoButton}
            onTouchStart={moveNoButton}
            style={buttonStyle}
          >
            No
          </button>
        </div>
      </main>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  minWidth: 105,
  padding: "13px 28px",
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
  WebkitTapHighlightColor:
    "transparent",
  touchAction: "manipulation",
  boxSizing: "border-box",
};