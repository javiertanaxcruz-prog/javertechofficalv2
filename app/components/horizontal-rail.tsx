"use client";

import type { ReactNode, PointerEvent as ReactPointerEvent } from "react";
import { useRef } from "react";

type HorizontalRailProps = {
  ariaLabel: string;
  children: ReactNode;
  className: string;
};

type DragState = {
  axis: "x" | "y" | null;
  pointerId: number | null;
  startScrollLeft: number;
  startX: number;
  startY: number;
};

const initialDragState: DragState = {
  axis: null,
  pointerId: null,
  startScrollLeft: 0,
  startX: 0,
  startY: 0,
};

export function HorizontalRail({ ariaLabel, children, className }: HorizontalRailProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef<DragState>(initialDragState);

  const resetDragState = () => {
    dragStateRef.current = initialDragState;
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch" || !railRef.current) {
      return;
    }

    dragStateRef.current = {
      axis: null,
      pointerId: event.pointerId,
      startScrollLeft: railRef.current.scrollLeft,
      startX: event.clientX,
      startY: event.clientY,
    };
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const rail = railRef.current;
    const dragState = dragStateRef.current;

    if (!rail || dragState.pointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - dragState.startX;
    const deltaY = event.clientY - dragState.startY;

    if (!dragState.axis) {
      if (Math.abs(deltaX) < 8 && Math.abs(deltaY) < 8) {
        return;
      }

      dragState.axis = Math.abs(deltaX) > Math.abs(deltaY) ? "x" : "y";
    }

    if (dragState.axis === "x") {
      event.preventDefault();
      rail.scrollLeft = dragState.startScrollLeft - deltaX;
    }
  };

  const handlePointerEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStateRef.current.pointerId !== event.pointerId) {
      return;
    }

    resetDragState();
  };

  return (
    <div
      ref={railRef}
      aria-label={ariaLabel}
      className={className}
      onPointerCancel={handlePointerEnd}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
    >
      {children}
    </div>
  );
}
