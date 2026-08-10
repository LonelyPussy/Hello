import React from "react";
import { useNavigate } from "react-router-dom";

export default function Proud() {
  const navigate = useNavigate();
  const things = [
    {
      number: "01",
      title: "How confident you are",
      text: "You carry yourself with a confidence that I genuinely admire.",
    },
    {
      number: "02",
      title: "How positive you are",
      text: "No matter what happens, you somehow manage to keep that positive energy.",
    },
    {
      number: "03",
      title: "Aag lagi basti mein, main apni masti mein",
      text: "Honestly, this one describes you perfectly. Let the world do whatever it wants — you're busy being you.",
    },
    {
      number: "04",
      title: "How ambitious you are",
      text: "You know what you want, and I love how seriously you take the things you want to achieve.",
    },
    {
      number: "05",
      title: "How calm and patient you are",
      text: "You don't let every little thing get to you. There's something really admirable about that.",
    },
    {
      number: "06",
      title: "How unapologetically yourself you are",
      text: "You don't constantly change yourself just to fit in. You are simply you.",
    },
    {
      number: "07",
      title: "How no one can manipulate you",
      text: "You know your worth, you think for yourself, and you don't let people easily change your mind.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#f6f5f2",
        color: "#151515",
        fontFamily:
          "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        padding:
          "clamp(45px, 7vw, 70px) clamp(18px, 8vw, 8vw) 120px",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          width: "100%",
          maxWidth: 1100,
          margin: "0 auto clamp(70px, 10vw, 110px)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: "0 0 14px",
            fontSize: 12,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#888",
          }}
        >
          Something I wanted to say
        </p>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(42px, 7vw, 68px)",
            fontWeight: 500,
            letterSpacing: "-2.5px",
            lineHeight: 1.05,
          }}
        >
          Things I'm proud
          <br />
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            of you for
          </span>
        </h1>

        <div
          style={{
            width: 45,
            height: 1,
            background: "#aaa",
            margin: "28px auto 0",
          }}
        />
      </header>

      {/* LIST */}
      <main
        style={{
          width: "100%",
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        {things.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <section
              key={item.number}
              style={{
                display: "flex",
                justifyContent: isLeft
                  ? "flex-start"
                  : "flex-end",
                marginBottom:
                  index === things.length - 1
                    ? 0
                    : "clamp(65px, 10vw, 110px)",
              }}
            >
              <article
                style={{
                  width: "min(560px, 100%)",
                }}
              >
                {/* NUMBER + LINE */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 18,
                    marginBottom: 18,
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      letterSpacing: "2px",
                      color: "#999",
                    }}
                  >
                    {item.number}
                  </span>

                  <div
                    style={{
                      height: 1,
                      width: 45,
                      background: "#ccc",
                    }}
                  />
                </div>

                {/* CARD */}
                <div
                  style={{
                    padding:
                      "clamp(28px, 5vw, 42px)",
                    background: "#fff",
                    borderRadius: 24,
                    border: "1px solid #e8e6e2",
                    boxShadow:
                      "0 18px 45px rgba(0,0,0,0.06)",
                  }}
                >
                  <h2
                    style={{
                      margin: 0,
                      fontSize:
                        "clamp(25px, 5vw, 34px)",
                      lineHeight: 1.15,
                      fontWeight: 500,
                      letterSpacing: "-1px",
                    }}
                  >
                    {item.title}
                  </h2>

                  <p
                    style={{
                      margin: "18px 0 0",
                      fontSize:
                        "clamp(15px, 3vw, 17px)",
                      lineHeight: 1.7,
                      color: "#777",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </article>
            </section>
          );
        })}

        {/* FINAL MESSAGE */}
        <section
          style={{
            marginTop: "clamp(90px, 15vw, 150px)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 45,
              height: 1,
              background: "#aaa",
              margin: "0 auto 30px",
            }}
          />

          <p
            style={{
              margin: 0,
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize:
                "clamp(25px, 5vw, 36px)",
              lineHeight: 1.4,
            }}
          >
            And honestly,
            <br />
            there's probably a lot more.
          </p>

          {/* END BUTTON */}
        <button
        type="button"
        onClick={() => navigate("/stars")}
        style={{
            display: "block",
            margin: "55px auto 0",
            padding: "13px 28px",
            border: "1px solid #151515",
            borderRadius: 12,
            background: "#151515",
            color: "#fff",
            fontSize: 15,
            fontWeight: 500,
            letterSpacing: "0.3px",
            cursor: "pointer",
        }}
        >
        i knooow next
        </button>
        </section>
      </main>
    </div>
  );
}