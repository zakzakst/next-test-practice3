import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";

export const useDrawerMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const handleCloseMenu = useCallback(() => {
    setIsOpen(false);
  }, []);
  const handleOpenMenu = useCallback(() => {
    setIsOpen(true);
  }, []);
  useClickAway(menuRef, () => {
    if (!isOpen) return;
    handleCloseMenu();
  });
  const pathname = usePathname();
  useEffect(() => {
    handleCloseMenu();
  }, [handleCloseMenu, pathname]);
  return { menuRef, isOpen, handleCloseMenu, handleOpenMenu };
};
