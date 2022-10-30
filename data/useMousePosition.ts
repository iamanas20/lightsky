import { useEffect, useState } from "react";

type MousePosition = {
  x: number | undefined;
  y: number | undefined;
};

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: undefined, y: undefined });

  useEffect(
    () => {
      function moveMouseEvent(event: MouseEvent) {
        setMousePosition({ x: event.clientX, y: event.clientY });
      }
      
      document.addEventListener('mousemove', moveMouseEvent);

      return () => {
        document.removeEventListener('mousemove', moveMouseEvent);
      }
    }
  )

  return mousePosition;
}