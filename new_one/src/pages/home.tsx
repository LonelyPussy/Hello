export default function Home() {
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
      {/* Decorative circles */}
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

        <div
          style={{
            width: 50,
            height: 1,
            background: "#111",
            margin: "35px auto 0",
          }}
        />

        <p
          style={{
            margin: "25px 0 0",
            fontSize: 14,
            color: "#777",
            letterSpacing: "0.5px",
          }}
        >
          Yes, this is all about you.
        </p>
      </main>
    </div>
  );
}