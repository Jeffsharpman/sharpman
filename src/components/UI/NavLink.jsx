import { useTheme } from "../lib/ThemeContext";

const NavLink = ({ href, onClick, active, children }) => {
  const { dark } = useTheme();

  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative text-sm font-medium transition-colors duration-200 ${
        active
          ? "text-primary"
          : dark
            ? "text-fg/60 hover:text-fg"
            : "text-foreground/60 hover:text-foreground"
      }`}
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
          active ? "w-full" : "w-0"
        }`}
        aria-hidden="true"
      />
    </a>
  );
};

export default NavLink;
