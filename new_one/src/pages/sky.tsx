import {
  useEffect,
  useRef,
  useState,
} from "react";

const MIN_ZOOM = 1;
const MAX_ZOOM = 5;
const ZOOM_STEP = 0.2;

export default function Sky() {
  const containerRef =
    useRef<HTMLDivElement | null>(null);

  const [zoom, setZoom] = useState(1);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const dragging = useRef(false);

  const lastPointer = useRef({
    x: 0,
    y: 0,
  });

  const clampPosition = (
    x: number,
    y: number,
    scale: number
  ) => {
    const container = containerRef.current;

    if (!container) {
      return { x: 0, y: 0 };
    }

    const width = container.clientWidth;
    const height = container.clientHeight;

    const imageRatio = 16 / 9;

    const containerRatio =
      width / Math.max(height, 1);

    let imageWidth: number;
    let imageHeight: number;

    if (containerRatio > imageRatio) {
      imageHeight = height;
      imageWidth = height * imageRatio;
    } else {
      imageWidth = width;
      imageHeight = width / imageRatio;
    }

    imageWidth *= scale;
    imageHeight *= scale;

    const maxX = Math.max(
      0,
      (imageWidth - width) / 2
    );

    const maxY = Math.max(
      0,
      (imageHeight - height) / 2
    );

    return {
      x: Math.max(
        -maxX,
        Math.min(maxX, x)
      ),
      y: Math.max(
        -maxY,
        Math.min(maxY, y)
      ),
    };
  };

  const changeZoom = (
    nextZoom: number,
    mouseX?: number,
    mouseY?: number
  ) => {
    const newZoom = Math.max(
      MIN_ZOOM,
      Math.min(MAX_ZOOM, nextZoom)
    );

    setPosition((current) => {
      if (newZoom === 1) {
        return {
          x: 0,
          y: 0,
        };
      }

      if (
        mouseX !== undefined &&
        mouseY !== undefined &&
        containerRef.current
      ) {
        const rect =
          containerRef.current.getBoundingClientRect();

        const x =
          mouseX -
          rect.left -
          rect.width / 2;

        const y =
          mouseY -
          rect.top -
          rect.height / 2;

        const ratio =
          newZoom / zoom;

        return clampPosition(
          x - (x - current.x) * ratio,
          y - (y - current.y) * ratio,
          newZoom
        );
      }

      return clampPosition(
        current.x,
        current.y,
        newZoom
      );
    });

    setZoom(newZoom);
  };

  const handleWheel = (
    event: WheelEvent
  ) => {
    event.preventDefault();

    const direction =
      event.deltaY > 0 ? -1 : 1;

    changeZoom(
      zoom + direction * ZOOM_STEP,
      event.clientX,
      event.clientY
    );
  };

  const handlePointerDown = (
    event: PointerEvent
  ) => {
    if (zoom <= 1) {
      return;
    }

    dragging.current = true;

    lastPointer.current = {
      x: event.clientX,
      y: event.clientY,
    };

    containerRef.current?.setPointerCapture(
      event.pointerId
    );
  };

  const handlePointerMove = (
    event: PointerEvent
  ) => {
    if (!dragging.current) {
      return;
    }

    const dx =
      event.clientX -
      lastPointer.current.x;

    const dy =
      event.clientY -
      lastPointer.current.y;

    lastPointer.current = {
      x: event.clientX,
      y: event.clientY,
    };

    setPosition((current) =>
      clampPosition(
        current.x + dx,
        current.y + dy,
        zoom
      )
    );
  };

  const handlePointerUp = (
    event: PointerEvent
  ) => {
    dragging.current = false;

    try {
      containerRef.current?.releasePointerCapture(
        event.pointerId
      );
    } catch {
      // Pointer capture already released.
    }
  };

  const reset = () => {
    setZoom(1);

    setPosition({
      x: 0,
      y: 0,
    });
  };

  useEffect(() => {
    const container =
      containerRef.current;

    if (!container) {
      return;
    }

    container.addEventListener(
      "wheel",
      handleWheel,
      { passive: false }
    );

    container.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    container.addEventListener(
      "pointermove",
      handlePointerMove
    );

    container.addEventListener(
      "pointerup",
      handlePointerUp
    );

    container.addEventListener(
      "pointercancel",
      handlePointerUp
    );

    return () => {
      container.removeEventListener(
        "wheel",
        handleWheel
      );

      container.removeEventListener(
        "pointerdown",
        handlePointerDown
      );

      container.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      container.removeEventListener(
        "pointerup",
        handlePointerUp
      );

      container.removeEventListener(
        "pointercancel",
        handlePointerUp
      );
    };
  }, [zoom]);

  useEffect(() => {
    const handleResize = () => {
      setPosition((current) =>
        clampPosition(
          current.x,
          current.y,
          zoom
        )
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, [zoom]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#050505",
        touchAction: "none",
        userSelect: "none",
      }}
    >
      {/* SKY IMAGE */}
      <img
        src="/night-sky.png"
        alt="Night sky"
        draggable={false}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "100%",
          height: "100%",
          objectFit: "contain",
          transform: `
            translate(
              calc(-50% + ${position.x}px),
              calc(-50% + ${position.y}px)
            )
            scale(${zoom})
          `,
          transformOrigin:
            "center center",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* DECORATIVE CIRCLE */}
      <div
        style={{
          position: "absolute",
          width: "clamp(220px, 35vw, 400px)",
          height: "clamp(220px, 35vw, 400px)",
          borderRadius: "50%",
          border:
            "1px solid rgba(255,255,255,0.08)",
          top: "-180px",
          right: "-120px",
          pointerEvents: "none",
        }}
      />

      {/* DATE + LOCATION */}
      <div
        style={{
          position: "absolute",
          top: "clamp(18px, 4vw, 30px)",
          left: "clamp(18px, 4vw, 30px)",
          zIndex: 10,
          maxWidth:
            "min(520px, calc(100vw - 36px))",
          color: "#fff",
          textShadow:
            "0 2px 15px rgba(0,0,0,0.9)",
          pointerEvents: "none",
        }}
      >
        <p
          style={{
            margin: "0 0 8px",
            fontSize: 11,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          A moment in the stars
        </p>

        <div
          style={{
            fontFamily:
              "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize:
              "clamp(20px, 4vw, 27px)",
            lineHeight: 1.2,
            fontWeight: 500,
            letterSpacing: "-0.5px",
          }}
        >
          The Night Sky from
          <br />
          the day you were born
        </div>

        <div
          style={{
            marginTop: 9,
            fontSize:
              "clamp(13px, 2.5vw, 16px)",
            color: "rgba(255,255,255,0.75)",
          }}
        >
          1 January 2004 · Madhya Pradesh
        </div>
      </div>

      {/* ZOOM CONTROLS */}
      <div
        style={{
          position: "absolute",
          right: "clamp(12px, 3vw, 24px)",
          bottom: "clamp(12px, 3vw, 24px)",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: 7,
          padding: 8,
          borderRadius: 14,
          background:
            "rgba(10,10,10,0.58)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter:
            "blur(14px)",
          border:
            "1px solid rgba(255,255,255,0.1)",
          boxShadow:
            "0 15px 40px rgba(0,0,0,0.3)",
        }}
      >
        <button
          type="button"
          onClick={() =>
            changeZoom(
              zoom - ZOOM_STEP
            )
          }
          disabled={
            zoom <= MIN_ZOOM
          }
          style={{
            ...buttonStyle,
            opacity:
              zoom <= MIN_ZOOM
                ? 0.35
                : 1,
          }}
        >
          −
        </button>

        <span
          style={{
            color: "#fff",
            minWidth: 52,
            textAlign: "center",
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          {Math.round(
            zoom * 100
          )}
          %
        </span>

        <button
          type="button"
          onClick={() =>
            changeZoom(
              zoom + ZOOM_STEP
            )
          }
          disabled={
            zoom >= MAX_ZOOM
          }
          style={{
            ...buttonStyle,
            opacity:
              zoom >= MAX_ZOOM
                ? 0.35
                : 1,
          }}
        >
          +
        </button>

        <button
          type="button"
          onClick={reset}
          style={{
            ...buttonStyle,
            padding:
              "7px 12px",
            fontSize: 13,
          }}
        >
          Reset
        </button>
      </div>

      {/* MOBILE HINT */}
      {zoom > 1 && (
        <div
          style={{
            position: "absolute",
            bottom: 82,
            left: "50%",
            transform:
              "translateX(-50%)",
            color:
              "rgba(255,255,255,0.55)",
            fontSize: 11,
            letterSpacing: "1px",
            textTransform:
              "uppercase",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          Drag to explore
        </div>
      )}
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  minWidth: 36,
  minHeight: 36,
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 9,
  padding: "7px 10px",
  background:
    "rgba(255,255,255,0.1)",
  color: "#fff",
  fontSize: 18,
  fontWeight: 400,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  WebkitTapHighlightColor:
    "transparent",
};