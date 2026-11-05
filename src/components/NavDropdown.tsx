import { useEffect, useId, useRef, type ReactNode } from "react";
import { NavLink } from "react-router-dom";

export type NavDropdownItem = {
  to: string;
  label: ReactNode;
};

type NavDropdownProps = {
  label: string;
  items: NavDropdownItem[];
  menuLabel: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function NavDropdown({
  label,
  items,
  menuLabel,
  open,
  onOpenChange,
}: NavDropdownProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const onOpenChangeRef = useRef(onOpenChange);
  const menuId = useId();

  onOpenChangeRef.current = onOpenChange;

  useEffect(() => {
    if (!open) {
      return;
    }

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        onOpenChangeRef.current(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChangeRef.current(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={`site-nav-item site-nav-capabilities${open ? " is-open" : ""}`}
    >
      <button
        type="button"
        className="site-nav-label"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={() => onOpenChange(!open)}
      >
        {label}
      </button>
      <div
        id={menuId}
        className={`site-nav-submenu${open ? " is-open" : ""}`}
        role="group"
        aria-label={menuLabel}
      >
        {items.map((item) => (
          <NavLink key={item.to} to={item.to} onClick={() => onOpenChange(false)}>
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
