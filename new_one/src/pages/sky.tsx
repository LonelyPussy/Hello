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

        const ratio = newZoom / zoom;

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
        backgroundColor: "#000",
        touchAction: "none",
        userSelect: "none",
      }}
    >
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
          transformOrigin: "center center",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          right: 20,
          bottom: 20,
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 10px",
          borderRadius: 12,
          background: "rgba(0, 0, 0, 0.55)",
          backdropFilter: "blur(10px)",
        }}
      >
        <button
          onClick={() =>
            changeZoom(zoom - ZOOM_STEP)
          }
          disabled={zoom <= MIN_ZOOM}
          style={buttonStyle}
        >
          −
        </button>

        <span
          style={{
            color: "#fff",
            minWidth: 55,
            textAlign: "center",
            fontSize: 14,
          }}
        >
          {Math.round(zoom * 100)}%
        </span>

        <button
          onClick={() =>
            changeZoom(zoom + ZOOM_STEP)
          }
          disabled={zoom >= MAX_ZOOM}
          style={buttonStyle}
        >
          +
        </button>

        <button
          onClick={reset}
          style={buttonStyle}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  border: "none",
  borderRadius: 8,
  padding: "6px 10px",
  background: "rgba(255, 255, 255, 0.12)",
  color: "#fff",
  fontSize: 18,
  cursor: "pointer",
};