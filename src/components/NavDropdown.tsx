import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { useLocation } from "react-router-dom";

type NavDropdownProps = {
  label: string;
  ariaLabel: string;
  children: ReactNode;
};

function canHoverFinePointer() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function NavDropdown({ label, ariaLabel, children }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (rootRef.current && target && !rootRef.current.contains(target)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen(true);
    }
  };

  return (
    <div
      className={`site-nav-item site-nav-dropdown${open ? " is-open" : ""}`}
      ref={rootRef}
      onMouseEnter={() => {
        if (canHoverFinePointer()) {
          setOpen(true);
        }
      }}
      onMouseLeave={() => {
        if (canHoverFinePointer()) {
          setOpen(false);
        }
      }}
    >
      <button
        aria-controls={menuId}
        aria-expanded={open}
        aria-haspopup="menu"
        className="site-nav-label"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();

          // Desktop hover already opens the menu; a follow-up click must not
          // immediately toggle it closed.
          if (canHoverFinePointer()) {
            setOpen(true);
            return;
          }

          setOpen((current) => !current);
        }}
        onKeyDown={handleTriggerKeyDown}
        type="button"
      >
        <span>{label}</span>
        <span aria-hidden="true" className="site-nav-caret">
          ▾
        </span>
      </button>
      <div
        aria-label={ariaLabel}
        className="site-nav-submenu"
        id={menuId}
        role="menu"
      >
        {children}
      </div>
    </div>
  );
}
