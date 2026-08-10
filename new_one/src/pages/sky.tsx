import {
  useEffect,
  useRef,
  useState,
} from "react";

const MIN_ZOOM = 1;
const MAX_ZOOM = 5;
const ZOOM_STEP = 0.2;

type Point = {
  x: number;
  y: number;
};

export default function Sky() {
  const containerRef =
    useRef<HTMLDivElement | null>(null);

  const [zoom, setZoom] = useState(1);

  const [position, setPosition] = useState<Point>({
    x: 0,
    y: 0,
  });

  const [isMobile, setIsMobile] =
    useState(false);

  const pointers = useRef(
    new Map<number, Point>()
  );

  const dragging = useRef(false);

  const lastPointer = useRef<Point>({
    x: 0,
    y: 0,
  });

  const pinchStartDistance = useRef(0);

  const pinchStartZoom = useRef(1);

  const pinchStartPosition =
    useRef<Point>({
      x: 0,
      y: 0,
    });

  const pinchStartMidpoint =
    useRef<Point>({
      x: 0,
      y: 0,
    });

  /*
   * Detect mobile screen
   */
  useEffect(() => {
    const mediaQuery =
      window.matchMedia(
        "(max-width: 768px)"
      );

    const updateDevice = () => {
      setIsMobile(
        mediaQuery.matches
      );
    };

    updateDevice();

    mediaQuery.addEventListener(
      "change",
      updateDevice
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateDevice
      );
    };
  }, []);

  /*
   * Clamp image position
   */
  const clampPosition = (
    x: number,
    y: number,
    scale: number
  ): Point => {
    const container =
      containerRef.current;

    if (!container) {
      return {
        x: 0,
        y: 0,
      };
    }

    const width =
      container.clientWidth;

    const height =
      container.clientHeight;

    const imageRatio = 16 / 9;

    const containerRatio =
      width /
      Math.max(height, 1);

    let imageWidth: number;
    let imageHeight: number;

    if (
      containerRatio > imageRatio
    ) {
      imageHeight = height;

      imageWidth =
        height * imageRatio;
    } else {
      imageWidth = width;

      imageHeight =
        width / imageRatio;
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

  /*
   * Distance between two fingers
   */
  const getDistance = (
    a: Point,
    b: Point
  ): number => {
    return Math.sqrt(
      Math.pow(
        b.x - a.x,
        2
      ) +
        Math.pow(
          b.y - a.y,
          2
        )
    );
  };

  /*
   * Middle point between two fingers
   */
  const getMidpoint = (
    a: Point,
    b: Point
  ): Point => {
    return {
      x: (a.x + b.x) / 2,
      y: (a.y + b.y) / 2,
    };
  };

  /*
   * Zoom
   */
  const changeZoom = (
    nextZoom: number,
    mouseX?: number,
    mouseY?: number
  ) => {
    const newZoom = Math.max(
      MIN_ZOOM,
      Math.min(
        MAX_ZOOM,
        nextZoom
      )
    );

    setPosition(
      (current) => {
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
            x -
              (x -
                current.x) *
                ratio,

            y -
              (y -
                current.y) *
                ratio,

            newZoom
          );
        }

        return clampPosition(
          current.x,
          current.y,
          newZoom
        );
      }
    );

    setZoom(newZoom);
  };

  /*
   * Desktop wheel zoom
   */
  const handleWheel = (
    event: WheelEvent
  ) => {
    event.preventDefault();

    const direction =
      event.deltaY > 0
        ? -1
        : 1;

    changeZoom(
      zoom +
        direction *
          ZOOM_STEP,

      event.clientX,
      event.clientY
    );
  };

  /*
   * Pointer down
   */
  const handlePointerDown = (
    event: PointerEvent
  ) => {
    const target =
      event.target as HTMLElement;

    /*
     * Don't start dragging when
     * clicking the controls.
     */
    if (
      target.closest("button")
    ) {
      return;
    }

    pointers.current.set(
      event.pointerId,
      {
        x: event.clientX,
        y: event.clientY,
      }
    );

    containerRef.current?.setPointerCapture(
      event.pointerId
    );

    /*
     * Two fingers = pinch
     */
    if (
      pointers.current.size === 2
    ) {
      const [
        first,
        second,
      ] = Array.from(
        pointers.current.values()
      );

      pinchStartDistance.current =
        getDistance(
          first,
          second
        );

      pinchStartZoom.current =
        zoom;

      pinchStartPosition.current =
        {
          ...position,
        };

      pinchStartMidpoint.current =
        getMidpoint(
          first,
          second
        );

      dragging.current = false;

      return;
    }

    /*
     * One finger = drag
     */
    if (zoom > 1) {
      dragging.current = true;

      lastPointer.current = {
        x: event.clientX,
        y: event.clientY,
      };
    }
  };

  /*
   * Pointer move
   */
  const handlePointerMove = (
    event: PointerEvent
  ) => {
    if (
      !pointers.current.has(
        event.pointerId
      )
    ) {
      return;
    }

    pointers.current.set(
      event.pointerId,
      {
        x: event.clientX,
        y: event.clientY,
      }
    );

    /*
     * PINCH ZOOM
     */
    if (
      pointers.current.size === 2
    ) {
      const [
        first,
        second,
      ] = Array.from(
        pointers.current.values()
      );

      const currentDistance =
        getDistance(
          first,
          second
        );

      if (
        pinchStartDistance.current ===
        0
      ) {
        return;
      }

      const scale =
        currentDistance /
        pinchStartDistance.current;

      const newZoom = Math.max(
        MIN_ZOOM,
        Math.min(
          MAX_ZOOM,
          pinchStartZoom.current *
            scale
        )
      );

      const container =
        containerRef.current;

      if (!container) {
        return;
      }

      const rect =
        container.getBoundingClientRect();

      const currentMidpoint =
        getMidpoint(
          first,
          second
        );

      const centerX =
        currentMidpoint.x -
        rect.left -
        rect.width / 2;

      const centerY =
        currentMidpoint.y -
        rect.top -
        rect.height / 2;

      const startCenterX =
        pinchStartMidpoint.current.x -
        rect.left -
        rect.width / 2;

      const startCenterY =
        pinchStartMidpoint.current.y -
        rect.top -
        rect.height / 2;

      const zoomRatio =
        newZoom /
        pinchStartZoom.current;

      const newX =
        centerX -
        (startCenterX -
          pinchStartPosition.current
            .x) *
          zoomRatio;

      const newY =
        centerY -
        (startCenterY -
          pinchStartPosition.current
            .y) *
          zoomRatio;

      setPosition(
        clampPosition(
          newX,
          newY,
          newZoom
        )
      );

      setZoom(newZoom);

      return;
    }

    /*
     * ONE FINGER DRAG
     */
    if (
      pointers.current.size !== 1 ||
      !dragging.current ||
      zoom <= 1
    ) {
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

    setPosition(
      (current) =>
        clampPosition(
          current.x + dx,
          current.y + dy,
          zoom
        )
    );
  };

  /*
   * Pointer up
   */
  const handlePointerUp = (
    event: PointerEvent
  ) => {
    pointers.current.delete(
      event.pointerId
    );

    dragging.current = false;

    try {
      containerRef.current?.releasePointerCapture(
        event.pointerId
      );
    } catch {
      // Already released.
    }

    /*
     * Continue dragging if one
     * finger remains.
     */
    if (
      pointers.current.size === 1 &&
      zoom > 1
    ) {
      const remaining =
        Array.from(
          pointers.current.values()
        )[0];

      lastPointer.current = {
        ...remaining,
      };

      dragging.current = true;
    }

    if (
      pointers.current.size < 2
    ) {
      pinchStartDistance.current = 0;
    }
  };

  /*
   * Reset
   */
  const reset = () => {
    setZoom(1);

    setPosition({
      x: 0,
      y: 0,
    });

    pointers.current.clear();

    dragging.current = false;

    pinchStartDistance.current = 0;
  };

  /*
   * Event listeners
   */
  useEffect(() => {
    const container =
      containerRef.current;

    if (!container) {
      return;
    }

    container.addEventListener(
      "wheel",
      handleWheel,
      {
        passive: false,
      }
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
  }, [zoom, position]);

  /*
   * Handle resize
   */
  useEffect(() => {
    const handleResize = () => {
      setPosition(
        (current) =>
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

        /*
         * Dynamic viewport height
         * works better on mobile.
         */
        height: "100dvh",
        minHeight: "100dvh",

        overflow: "hidden",

        background: "#050505",

        touchAction: "none",

        userSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      {/* NIGHT SKY */}
      <img
        src={
          isMobile
            ? "/night-sky2.png"
            : "/night-sky.png"
        }
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
          WebkitUserSelect: "none",
        }}
      />

      {/* DATE + LOCATION */}
      <div
        style={{
          position: "absolute",

          top:
            "clamp(18px, 4vw, 30px)",

          left:
            "clamp(18px, 4vw, 30px)",

          zIndex: 10,

          maxWidth:
            "min(520px, calc(100vw - 36px))",

          color: "#fff",

          textShadow:
            "0 2px 15px rgba(0,0,0,0.9)",

          pointerEvents: "none",

          userSelect: "none",
        }}
      >
        <p
          style={{
            margin: "0 0 8px",

            fontSize: 11,

            letterSpacing: "3px",

            textTransform:
              "uppercase",

            color:
              "rgba(255,255,255,0.65)",
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

            color:
              "rgba(255,255,255,0.75)",
          }}
        >
          1 January 2004 · Madhya Pradesh
        </div>
      </div>

      {/* ZOOM CONTROLS */}
      <div
        style={{
          position: "fixed",

          right:
            "max(12px, env(safe-area-inset-right))",

          bottom:
            "max(12px, env(safe-area-inset-bottom))",

          zIndex: 100,

          display: "flex",

          alignItems: "center",

          gap: 6,

          padding: 7,

          maxWidth:
            "calc(100vw - 24px)",

          boxSizing: "border-box",

          borderRadius: 14,

          background:
            "rgba(10, 10, 10, 0.65)",

          backdropFilter:
            "blur(14px)",

          WebkitBackdropFilter:
            "blur(14px)",

          border:
            "1px solid rgba(255,255,255,0.12)",

          boxShadow:
            "0 15px 40px rgba(0,0,0,0.35)",

          touchAction:
            "manipulation",
        }}
      >
        {/* MINUS */}
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

        {/* ZOOM PERCENTAGE */}
        <span
          style={{
            color: "#fff",

            minWidth: 48,

            textAlign: "center",

            fontSize: 13,

            fontWeight: 500,

            flexShrink: 0,
          }}
        >
          {Math.round(
            zoom * 100
          )}
          %
        </span>

        {/* PLUS */}
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

        {/* RESET */}
        <button
          type="button"
          onClick={reset}
          style={{
            ...buttonStyle,

            padding:
              "7px 11px",

            fontSize: 13,
          }}
        >
          Reset
        </button>
      </div>

      {/* DRAG HINT */}
      {zoom > 1 && (
        <div
          style={{
            position: "fixed",

            bottom:
              "calc(70px + env(safe-area-inset-bottom))",

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

            zIndex: 20,
          }}
        >
          Pinch to zoom · Drag to explore
        </div>
      )}
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  minWidth: 36,

  minHeight: 36,

  border:
    "1px solid rgba(255,255,255,0.15)",

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

  touchAction:
    "manipulation",

  flexShrink: 0,
};