import React, { useEffect, useRef, useState } from "react";

export default function HangingTechnicalDrawing({ preserveAspectRatio = "xMidYMid slice" }) {
  const containerRef = useRef(null);
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const updatePointer = (clientX, clientY) => {
      const rect = container.getBoundingClientRect();
      setPointer({
        x: Math.max(0, Math.min(1, (clientX - rect.left) / rect.width)),
        y: Math.max(0, Math.min(1, (clientY - rect.top) / rect.height)),
      });
    };

    const handleMouseMove = (event) => updatePointer(event.clientX, event.clientY);
    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      if (touch) updatePointer(touch.clientX, touch.clientY);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const width = 800;
  const height = 500;
  const leftPainting = { w: 110, h: 155, labelW: 60, labelH: 80 };
  const rightPainting = { w: 160, h: 125, labelW: 90, labelH: 67 };
  const wallCenterX = width / 2 - 10;
  const wallY = 75 + (pointer.y - 0.5) * 30;
  const gap = Math.max(6, 40 + (pointer.x - 0.5) * 120);
  const leftX = wallCenterX - gap / 2 - leftPainting.w;
  const leftY = wallY + (rightPainting.h - leftPainting.h) / 2;
  const rightX = wallCenterX + gap / 2;
  const rightY = wallY;
  const sofaTopY = 370;
  const spaceStartX = leftX + leftPainting.w;
  const spaceEndX = rightX;
  const spaceCenterX = (spaceStartX + spaceEndX) / 2;
  const annotationY = wallY - 28;
  const pxToCm = (pixels) => Math.round(pixels * 0.65);

  return (
    <div ref={containerRef} className="hanging-drawing">
      <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio={preserveAspectRatio}>
        <defs>
          <clipPath id="hanging-background-clip">
            <rect width={width} height={height} rx="14" />
          </clipPath>
          <clipPath id="hanging-left-clip">
            <rect x={leftX} y={leftY} width={leftPainting.w} height={leftPainting.h} />
          </clipPath>
          <clipPath id="hanging-right-clip">
            <rect x={rightX} y={rightY} width={rightPainting.w} height={rightPainting.h} />
          </clipPath>
        </defs>

        <image
          href="/hanging/room2.png"
          width={width}
          height={height}
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#hanging-background-clip)"
        />
        <image
          href="/hanging/jonas_wood_painting.png"
          x={leftX}
          y={leftY}
          width={leftPainting.w}
          height={leftPainting.h}
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#hanging-left-clip)"
        />
        <rect
          x={leftX}
          y={leftY}
          width={leftPainting.w}
          height={leftPainting.h}
          fill="none"
          stroke="rgba(255,255,255,.35)"
        />
        <image
          href="/hanging/painting-right.png"
          x={rightX}
          y={rightY}
          width={rightPainting.w}
          height={rightPainting.h}
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#hanging-right-clip)"
        />
        <rect
          x={rightX}
          y={rightY}
          width={rightPainting.w}
          height={rightPainting.h}
          fill="none"
          stroke="rgba(255,255,255,.35)"
        />

        <line
          x1={spaceStartX + 4}
          y1={annotationY}
          x2={spaceEndX - 4}
          y2={annotationY}
          stroke="rgba(0,0,0,.55)"
          strokeWidth=".8"
        />
        <path
          d={`M ${spaceStartX + 4} ${annotationY} L ${spaceStartX + 10} ${annotationY - 4} L ${spaceStartX + 10} ${annotationY + 4} Z`}
          fill="rgba(0,0,0,.55)"
        />
        <path
          d={`M ${spaceEndX - 4} ${annotationY} L ${spaceEndX - 10} ${annotationY - 4} L ${spaceEndX - 10} ${annotationY + 4} Z`}
          fill="rgba(0,0,0,.55)"
        />
        <text
          x={spaceCenterX}
          y={annotationY - 6}
          fill="rgba(0,0,0,.7)"
          fontSize="8.5"
          textAnchor="middle"
          letterSpacing=".5"
        >
          SPACE — {pxToCm(gap)} CM
        </text>

        {[
          { x: leftX, y: leftY, ...leftPainting },
          { x: rightX, y: rightY, ...rightPainting },
        ].map((painting) => {
          const frameBottom = painting.y + painting.h;
          return (
            <g key={`${painting.labelW}-${painting.labelH}`}>
              <text
                x={painting.x + painting.w / 2}
                y={frameBottom + 13}
                fill="rgba(0,0,0,.65)"
                fontSize="8"
                textAnchor="middle"
              >
                {painting.labelW}×{painting.labelH} CM
              </text>
              <line
                x1={painting.x + painting.w / 2}
                y1={frameBottom + 18}
                x2={painting.x + painting.w / 2}
                y2={sofaTopY - 4}
                stroke="rgba(0,0,0,.3)"
                strokeWidth=".8"
                strokeDasharray="4 2"
              />
              <text
                x={painting.x + painting.w / 2 + 7}
                y={(frameBottom + sofaTopY) / 2}
                fill="rgba(0,0,0,.55)"
                fontSize="8"
                textAnchor="middle"
                transform={`rotate(-90, ${painting.x + painting.w / 2 + 7}, ${(frameBottom + sofaTopY) / 2})`}
              >
                {pxToCm(sofaTopY - frameBottom)} CM
              </text>
            </g>
          );
        })}

        <line
          x1={leftX - 14}
          y1={wallY + rightPainting.h / 2}
          x2={rightX + rightPainting.w + 14}
          y2={wallY + rightPainting.h / 2}
          stroke="rgba(0,0,0,.18)"
          strokeWidth=".6"
          strokeDasharray="6 3"
        />
      </svg>
    </div>
  );
}
