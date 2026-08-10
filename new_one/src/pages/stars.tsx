import { useNavigate } from "react-router-dom";

export default function Stars() {
  const navigate = useNavigate();

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
        padding: "24px",
        boxSizing: "border-box",
        fontFamily:
          "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "clamp(240px, 45vw, 450px)",
          height: "clamp(240px, 45vw, 450px)",
          borderRadius: "50%",
          border: "1px solid rgba(0,0,0,0.05)",
          top: "-220px",
          right: "-150px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "clamp(300px, 55vw, 550px)",
          height: "clamp(300px, 55vw, 550px)",
          borderRadius: "50%",
          border: "1px solid rgba(0,0,0,0.04)",
          bottom: "-330px",
          left: "-250px",
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
        <p
          style={{
            margin: "0 0 20px",
            fontSize: 12,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#999",
          }}
        >
          Nooooooooooooob
        </p>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(32px, 7vw, 52px)",
            lineHeight: 1.15,
            fontWeight: 500,
            letterSpacing: "-1.5px",
          }}
        >
          I know u like
          <br />
          night sky and stars
        </h1>

        <p
          style={{
            margin: "28px 0 0",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(20px, 4vw, 27px)",
            lineHeight: 1.5,
            color: "#555",
          }}
        >
          I hope u will like it
        </p>

        <button
          type="button"
          onClick={() => navigate("/sky")}
          style={{
            display: "block",
            margin: "50px auto 0",
            padding: "13px 28px",
            border: "1px solid #151515",
            borderRadius: 12,
            background: "#151515",
            color: "#fff",
            fontSize: 15,
            fontWeight: 500,
            letterSpacing: "0.3px",
            cursor: "pointer",
            WebkitTapHighlightColor: "transparent",
          }}
        >
          ok, dhika
        </button>
      </main>
    </div>
  );
}