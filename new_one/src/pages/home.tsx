import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#f7f5f2",
        color: "#111",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Decorative circle — top right */}
      <div
        style={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          border: "1px solid rgba(0,0,0,0.08)",
          top: "-120px",
          right: "-80px",
        }}
      />

      {/* Decorative circle — bottom left */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          border: "1px solid rgba(0,0,0,0.05)",
          bottom: "-280px",
          left: "-180px",
        }}
      />

      <main
        style={{
          position: "relative",
          textAlign: "center",
          padding: 30,
        }}
      >
        {/* Small heading */}
        <p
          style={{
            margin: "0 0 20px",
            fontSize: 13,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#888",
          }}
        >
          A little something for you
        </p>

        {/* Main heading */}
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(48px, 8vw, 96px)",
            fontWeight: 500,
            lineHeight: 0.95,
            letterSpacing: "-5px",
          }}
        >
          Welcome,
          <br />

          <span
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            Narcissistic Aurat.
          </span>
        </h1>

        {/* Divider */}
        <div
          style={{
            width: 50,
            height: 1,
            background: "#111",
            margin: "35px auto 25px",
          }}
        />

        {/* Subtitle */}
        <p
          style={{
            margin: "0 0 20px",
            fontSize: 14,
            color: "#777",
            letterSpacing: "0.5px",
          }}
        >
          Yes, this is all about you.
        </p>

        {/* Hau button */}
        <button
          onClick={() => navigate("/questions")}
          style={{
            padding: "14px 38px",
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
          Hau
        </button>
      </main>
    </div>
  );
}