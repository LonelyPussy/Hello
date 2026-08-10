import React from "react";
import { useNavigate } from "react-router-dom";

export default function Remind() {
  const navigate = useNavigate();

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
          "clamp(45px, 7vw, 70px) clamp(18px, 8vw, 8vw) 100px",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          width: "100%",
          maxWidth: 1100,
          margin: "0 auto clamp(70px, 10vw, 100px)",
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
          A little collection
        </p>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(36px, 7vw, 64px)",
            fontWeight: 500,
            letterSpacing: "-2.5px",
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
          width: "100%",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {/* SONG */}
        <section style={leftSectionStyle}>
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
                <h2 style={titleStyle}>Do Pall</h2>

                <p style={subtitleStyle}>
                  CoachSahb
                </p>
              </div>

              <span style={arrowStyle}>↗</span>
            </div>
          </div>
        </section>

        {/* SENTENCE */}
        <section style={rightSectionStyle}>
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
                padding:
                  "clamp(38px, 7vw, 55px) clamp(25px, 6vw, 45px)",
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
                  fontSize: "clamp(27px, 5vw, 34px)",
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
        <section style={leftSectionStyle}>
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

              <div style={badgeStyle}>
                ☁ Rainy skies
              </div>
            </div>

            <div style={contentRowStyle}>
              <div>
                <h2 style={titleStyle}>Rainy</h2>

                <p style={subtitleStyle}>
                  Black clouds · Grey skies
                </p>
              </div>

              <span style={arrowStyle}>↗</span>
            </div>
          </div>
        </section>

        {/* ANIMAL */}
        <section style={rightSectionStyle}>
          <div style={cardStyle}>
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

              <div style={badgeStyle}>
                🐼 Panda
              </div>
            </div>

            <div style={contentRowStyle}>
              <div>
                <h2 style={titleStyle}>Panda</h2>

                <p style={subtitleStyle}>
                  Cute · Sleepy · Unbothered
                </p>
              </div>

              <span style={arrowStyle}>↗</span>
            </div>
          </div>
        </section>

        {/* GAME */}
        <section style={leftSectionStyle}>
          <div style={cardStyle}>
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

              <div style={badgeStyle}>
                🎮 Pac-Man
              </div>
            </div>

            <div style={contentRowStyle}>
              <div>
                <h2 style={titleStyle}>Pac-Man</h2>

                <p style={subtitleStyle}>
                  Classic · Addictive · Never-ending
                </p>
              </div>

              <span style={arrowStyle}>↗</span>
            </div>
          </div>
        </section>

        {/* WEARABLE */}
        <section style={rightSectionStyle}>
          <div style={cardStyle}>
            <div style={numberStyle}>06</div>

            <p style={labelStyle}>
              A wearable thing that reminds me of you
            </p>

            <div style={tallImageWrapperStyle}>
              <img
                src="/heels.png"
                alt="Heels"
                style={tallImageStyle}
              />

              <div style={badgeStyle}>
                👠 Heels
              </div>
            </div>

            <div style={contentRowStyle}>
              <div>
                <h2 style={titleStyle}>Heels</h2>

                <p style={subtitleStyle}>
                  Elegant · Bold · Unforgettable
                </p>
              </div>

              <span style={arrowStyle}>↗</span>
            </div>
          </div>
        </section>

        {/* BOOK */}
        <section style={leftSectionStyle}>
          <div style={cardStyle}>
            <div style={numberStyle}>07</div>

            <p style={labelStyle}>
              A book that reminds me of you
            </p>

            <div style={tallImageWrapperStyle}>
              <img
                src="/palace.jpg"
                alt="Palace of Illusions"
                style={tallImageStyle}
              />

              <div style={badgeStyle}>
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

        {/* NEXT */}
        <section
          style={{
            marginTop: 20,
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

          <button
            type="button"
            onClick={() => navigate("/answer2")}
            style={nextButtonStyle}
          >
            hn, next
          </button>
        </section>
      </main>
    </div>
  );
}

/* -----------------------------
   LAYOUT
----------------------------- */

const leftSectionStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  marginBottom: "clamp(80px, 12vw, 120px)",
};

const rightSectionStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: "clamp(80px, 12vw, 120px)",
};

/* -----------------------------
   CARD
----------------------------- */

const cardStyle: React.CSSProperties = {
  width: "min(520px, 100%)",
};

/* -----------------------------
   TEXT
----------------------------- */

const numberStyle: React.CSSProperties = {
  fontSize: 12,
  letterSpacing: "2px",
  color: "#999",
  marginBottom: 12,
};

const labelStyle: React.CSSProperties = {
  margin: "0 0 18px",
  fontSize: 12,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "#888",
  lineHeight: 1.5,
};

const titleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: "clamp(24px, 5vw, 28px)",
  fontWeight: 500,
  letterSpacing: "-0.5px",
  lineHeight: 1.15,
};

const subtitleStyle: React.CSSProperties = {
  margin: "6px 0 0",
  fontSize: 14,
  color: "#888",
  lineHeight: 1.4,
};

/* -----------------------------
   IMAGES
----------------------------- */

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

const tallImageWrapperStyle: React.CSSProperties = {
  position: "relative",
  overflow: "hidden",
  borderRadius: 24,
  background: "#eee",
  boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
};

const tallImageStyle: React.CSSProperties = {
  width: "100%",
  height: "clamp(420px, 65vw, 600px)",
  objectFit: "contain",
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

const badgeStyle: React.CSSProperties = {
  position: "absolute",
  left: 18,
  bottom: 18,
  padding: "8px 14px",
  borderRadius: 999,
  background: "rgba(0,0,0,0.45)",
  backdropFilter: "blur(10px)",
  color: "#fff",
  fontSize: 13,
  letterSpacing: "0.5px",
  whiteSpace: "nowrap",
};

/* -----------------------------
   BOTTOM CONTENT
----------------------------- */

const contentRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: 20,
  marginTop: 22,
};

const arrowStyle: React.CSSProperties = {
  flexShrink: 0,
  fontSize: 25,
  color: "#888",
  marginTop: 3,
};

/* -----------------------------
   NEXT BUTTON
----------------------------- */

const nextButtonStyle: React.CSSProperties = {
  padding: "13px 30px",
  border: "1px solid #151515",
  borderRadius: 12,
  background: "#151515",
  color: "#fff",
  fontSize: 15,
  fontWeight: 500,
  letterSpacing: "0.3px",
  cursor: "pointer",
  transition: "all 0.2s ease",
};