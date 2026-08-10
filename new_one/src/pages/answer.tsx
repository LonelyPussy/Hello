import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Answer() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");

  const correctAnswer = "I am the best";

  const isCorrect = answer === correctAnswer;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAnswer(event.target.value);
  };

  const handleContinue = () => {
    if (isCorrect) {
      navigate("/remind");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        background: "#f6f5f2",
        color: "#151515",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        padding: 24,
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Decorative circle */}
      <div
        style={{
          position: "absolute",
          width: 360,
          height: 360,
          borderRadius: "50%",
          border: "1px solid rgba(0,0,0,0.05)",
          top: -180,
          right: -120,
          pointerEvents: "none",
        }}
      />

      {/* Decorative circle */}
      <div
        style={{
          position: "absolute",
          width: 450,
          height: 450,
          borderRadius: "50%",
          border: "1px solid rgba(0,0,0,0.04)",
          bottom: -280,
          left: -220,
          pointerEvents: "none",
        }}
      />

      <main
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 600,
          textAlign: "center",
        }}
      >
        {/* Small label */}
        <p
          style={{
            margin: "0 0 18px",
            fontSize: 12,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#999",
          }}
        >
          One last thing
        </p>

        {/* Instruction */}
        <h1
          style={{
            margin: "0 0 16px",
            fontSize: "clamp(30px, 6vw, 48px)",
            lineHeight: 1.15,
            fontWeight: 500,
            letterSpacing: "-1.5px",
          }}
        >
          Type what you see
        </h1>

        {/* Text to copy */}
        <p
          style={{
            margin: "0 0 36px",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(26px, 5vw, 36px)",
            lineHeight: 1.3,
          }}
        >
          "I am the best"
        </p>

        {/* Input */}
        <input
          type="text"
          value={answer}
          onChange={handleChange}
          placeholder="Type it here..."
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          style={{
            width: "100%",
            maxWidth: 460,
            height: 54,
            padding: "0 18px",
            boxSizing: "border-box",
            border: `1px solid ${
              answer.length > 0 && !isCorrect
                ? "#aaa"
                : "#222"
            }`,
            borderRadius: 12,
            background: "#fff",
            color: "#151515",
            fontSize: 16,
            outline: "none",
            textAlign: "center",
            fontFamily:
              "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        />

        {/* Status */}
        <div
          style={{
            minHeight: 24,
            marginTop: 14,
            fontSize: 13,
            color: isCorrect ? "#151515" : "#888",
          }}
        >
          {isCorrect
            ? "✓ That's right."
            : "It's not that difficult."}
        </div>

        {/* Continue */}
        <button
          type="button"
          onClick={handleContinue}
          disabled={!isCorrect}
          style={{
            marginTop: 22,
            padding: "12px 30px",
            border: "1px solid #151515",
            borderRadius: 12,
            background: isCorrect
              ? "#151515"
              : "transparent",
            color: isCorrect ? "#fff" : "#aaa",
            fontSize: 15,
            fontWeight: 500,
            letterSpacing: "0.3px",
            cursor: isCorrect
              ? "pointer"
              : "not-allowed",
            transition:
              "all 0.25s ease",
            opacity: isCorrect ? 1 : 0.6,
          }}
        >
          Continue →
        </button>
      </main>
    </div>
  );
}