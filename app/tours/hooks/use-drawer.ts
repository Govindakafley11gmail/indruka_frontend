/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useRef, useEffect } from "react";

export function useDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(false);
  const [drawerPos, setDrawerPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMdScreen(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (drawerOpen) setDrawerPos({ x: 0, y: 0 });
  }, [drawerOpen]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setDrawerPos({ x: e.clientX - dragOffset.current.x, y: e.clientY - dragOffset.current.y });
    };
    const onUp = () => setIsDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
  }, [isDragging]);

  const handleDragStart = (e: React.MouseEvent) => {
    if (!isMdScreen) return;
    e.preventDefault();
    setIsDragging(true);
    dragOffset.current = { x: e.clientX - drawerPos.x, y: e.clientY - drawerPos.y };
  };

  return { drawerOpen, setDrawerOpen, isMdScreen, drawerPos, isDragging, drawerRef, handleDragStart };
}