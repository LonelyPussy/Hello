import React from "react";

export default function Remind() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#f6f5f2",
        color: "#151515",
        fontFamily:
          "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        padding: "70px 8vw 120px",
        boxSizing: "border-box",
      }}
    >
      <header
        style={{
          maxWidth: 1100,
          margin: "0 auto 100px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: "0 0 14px",
            fontSize: 13,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#888",
          }}
        >
          A little collection
        </p>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(38px, 5vw, 64px)",
            fontWeight: 500,
            letterSpacing: "-2px",
            lineHeight: 1.05,
          }}
        >
          Things that remind me of you
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

      <main
        style={{
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {/* SONG */}
        <section
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: 120,
          }}
        >
          <div style={cardStyle}>
            <div style={numberStyle}>01</div>

            <p style={labelStyle}>
              A song that reminds me of you
            </p>

            <div style={imageWrapperStyle}>
              <img
                src="/do_pal_cover.jpg"
                alt="Do Pall album cover"
                style={imageStyle}
              />

              <div style={imageOverlayStyle}>
                <span
                  style={{
                    fontSize: 13,
                    letterSpacing: "1px",
                  }}
                >
                  ♫
                </span>
              </div>
            </div>

            <div style={contentRowStyle}>
              <div>
                <h2 style={titleStyle}>
                  Do Pall
                </h2>

                <p style={subtitleStyle}>
                  CoachSahb
                </p>
              </div>

              <span style={arrowStyle}>↗</span>
            </div>
          </div>
        </section>

        {/* SENTENCE */}
        <section
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: 120,
          }}
        >
          <div
            style={{
              ...cardStyle,
              maxWidth: 520,
            }}
          >
            <div style={numberStyle}>02</div>

            <p style={labelStyle}>
              A sentence that reminds me of you
            </p>

            <div
              style={{
                position: "relative",
                padding: "55px 45px",
                borderRadius: 24,
                background: "#151515",
                color: "#fff",
                boxShadow:
                  "0 20px 50px rgba(0,0,0,0.12)",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: -25,
                  left: 20,
                  fontSize: 120,
                  lineHeight: 1,
                  color: "rgba(255,255,255,0.08)",
                  fontFamily: "Georgia, serif",
                }}
              >
                “
              </span>

              <p
                style={{
                  position: "relative",
                  margin: 0,
                  fontFamily: "Georgia, serif",
                  fontSize: 34,
                  lineHeight: 1.35,
                  fontStyle: "italic",
                }}
              >
                Mera man ni hai
              </p>
            </div>
          </div>
        </section>

        {/* WEATHER */}
        <section
          style={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <div style={cardStyle}>
            <div style={numberStyle}>03</div>

            <p style={labelStyle}>
              A weather that reminds me of you
            </p>

            <div style={imageWrapperStyle}>
              <img
                src="/black_clouds.jpg"
                alt="Rainy black clouds"
                style={imageStyle}
              />

              <div
                style={{
                  position: "absolute",
                  left: 20,
                  bottom: 20,
                  padding: "8px 14px",
                  borderRadius: 999,
                  background: "rgba(0,0,0,0.45)",
                  backdropFilter: "blur(10px)",
                  color: "#fff",
                  fontSize: 13,
                  letterSpacing: "0.5px",
                }}
              >
                ☁ Rainy skies
              </div>
            </div>

            <div style={contentRowStyle}>
              <div>
                <h2 style={titleStyle}>
                  Rainy
                </h2>

                <p style={subtitleStyle}>
                  Black clouds · Grey skies
                </p>
              </div>

              <span style={arrowStyle}>↗</span>
            </div>
          </div>
        </section>
        {/* ANIMAL */}
        <section
        style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 120,
        }}
        >
        <div
            style={{
            ...cardStyle,
            maxWidth: 520,
            }}
        >
            <div style={numberStyle}>04</div>

            <p style={labelStyle}>
            An animal that reminds me of you
            </p>

            <div style={imageWrapperStyle}>
            <img
                src="/panda.jpg"
                alt="Panda"
                style={imageStyle}
            />

            <div
                style={{
                position: "absolute",
                left: 20,
                bottom: 20,
                padding: "8px 14px",
                borderRadius: 999,
                background: "rgba(0,0,0,0.45)",
                backdropFilter: "blur(10px)",
                color: "#fff",
                fontSize: 13,
                letterSpacing: "0.5px",
                }}
            >
                🐼 Panda
            </div>
            </div>

            <div style={contentRowStyle}>
            <div>
                <h2 style={titleStyle}>
                Panda
                </h2>

                <p style={subtitleStyle}>
                Cute · Sleepy · Unbothered
                </p>
            </div>

            <span style={arrowStyle}>↗</span>
            </div>
        </div>
        </section>
        {/* GAME */}
        <section
        style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: 120,
        }}
        >
        <div
            style={{
            ...cardStyle,
            maxWidth: 520,
            }}
        >
            <div style={numberStyle}>05</div>

            <p style={labelStyle}>
            A game that reminds me of you
            </p>

            <div style={imageWrapperStyle}>
            <img
                src="/pacman.png"
                alt="Pac-Man"
                style={imageStyle}
            />

            <div
                style={{
                position: "absolute",
                left: 20,
                bottom: 20,
                padding: "8px 14px",
                borderRadius: 999,
                background: "rgba(0,0,0,0.45)",
                backdropFilter: "blur(10px)",
                color: "#fff",
                fontSize: 13,
                letterSpacing: "0.5px",
                }}
            >
                🎮 Pac-Man
            </div>
            </div>

            <div style={contentRowStyle}>
            <div>
                <h2 style={titleStyle}>
                Pac-Man
                </h2>

                <p style={subtitleStyle}>
                Classic · Addictive · Never-ending
                </p>
            </div>

            <span style={arrowStyle}>↗</span>
            </div>
        </div>
        </section>
        {/* WEARABLE */}
        <section
        style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 120,
        }}
        >
        <div
            style={{
            ...cardStyle,
            maxWidth: 520,
            }}
        >
            <div style={numberStyle}>06</div>

            <p style={labelStyle}>
            A wearable thing that reminds me of you
            </p>

            <div
            style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 24,
                background: "#eee",
                boxShadow:
                "0 20px 50px rgba(0,0,0,0.12)",
            }}
            >
            <img
                src="/heels.png"
                alt="Heels"
                style={{
                width: "100%",
                height: 600,
                objectFit: "contain",
                display: "block",
                }}
            />

            <div
                style={{
                position: "absolute",
                left: 20,
                bottom: 20,
                padding: "8px 14px",
                borderRadius: 999,
                background: "rgba(0,0,0,0.45)",
                backdropFilter: "blur(10px)",
                color: "#fff",
                fontSize: 13,
                letterSpacing: "0.5px",
                }}
            >
                👠 Heels
            </div>
            </div>

            <div style={contentRowStyle}>
            <div>
                <h2 style={titleStyle}>
                Heels
                </h2>

                <p style={subtitleStyle}>
                Elegant · Bold · Unforgettable
                </p>
            </div>

            <span style={arrowStyle}>↗</span>
            </div>
        </div>
        </section>
        {/* BOOK */}
        <section
        style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: 120,
        }}
        >
        <div
            style={{
            ...cardStyle,
            maxWidth: 520,
            }}
        >
            <div style={numberStyle}>07</div>

            <p style={labelStyle}>
            A book that reminds me of you
            </p>

            <div
            style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 24,
                background: "#eee",
                boxShadow:
                "0 20px 50px rgba(0,0,0,0.12)",
            }}
            >
            <img
                src="/palace.jpg"
                alt="Palace of Illusions"
                style={{
                width: "100%",
                height: 600,
                objectFit: "contain",
                display: "block",
                }}
            />

            <div
                style={{
                position: "absolute",
                left: 20,
                bottom: 20,
                padding: "8px 14px",
                borderRadius: 999,
                background: "rgba(0,0,0,0.45)",
                backdropFilter: "blur(10px)",
                color: "#fff",
                fontSize: 13,
                letterSpacing: "0.5px",
                }}
            >
                📖 Palace of Illusions
            </div>
            </div>

            <div style={contentRowStyle}>
            <div>
                <h2 style={titleStyle}>
                Palace of Illusions
                </h2>

                <p style={subtitleStyle}>
                Mythology · Perspective · Stories
                </p>
            </div>

            <span style={arrowStyle}>↗</span>
            </div>
        </div>
        </section>
      </main>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  width: "min(520px, 90vw)",
};

const numberStyle: React.CSSProperties = {
  fontSize: 12,
  letterSpacing: "2px",
  color: "#999",
  marginBottom: 12,
};

const labelStyle: React.CSSProperties = {
  margin: "0 0 18px",
  fontSize: 13,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "#888",
};

const imageWrapperStyle: React.CSSProperties = {
  position: "relative",
  overflow: "hidden",
  borderRadius: 24,
  boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  aspectRatio: "4 / 3",
  objectFit: "cover",
  display: "block",
};

const imageOverlayStyle: React.CSSProperties = {
  position: "absolute",
  right: 18,
  bottom: 18,
  width: 38,
  height: 38,
  borderRadius: "50%",
  background: "rgba(0,0,0,0.5)",
  backdropFilter: "blur(10px)",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const contentRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  marginTop: 22,
};

const titleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 28,
  fontWeight: 500,
  letterSpacing: "-0.5px",
};

const subtitleStyle: React.CSSProperties = {
  margin: "6px 0 0",
  fontSize: 14,
  color: "#888",
};

const arrowStyle: React.CSSProperties = {
  fontSize: 25,
  color: "#888",
  marginTop: 3,
};