"use client";

import { useEffect, useState } from "react";

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
}

export function useVisitorRegion() {
  const [isRegional, setIsRegional] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cookieVal = getCookie("visitor_region");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsRegional(cookieVal === "true");
    setLoading(false);
  }, []);

  return { isRegional, loading };
}