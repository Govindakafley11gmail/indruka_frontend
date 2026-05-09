import { useState } from "react";

export function useWishlist() {
  const [wishlist, setWishlist] = useState(new Set<number>());

  const toggle = (id: number) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return { wishlist, toggle };
}