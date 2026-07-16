import { useTheme } from "../lib/ThemeContext";

const NavLink = ({ href, onClick, active, children }) => {
  const { dark } = useTheme();

  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-sm font-medium transition-colors hover:text-gold ${
        active ? "text-gold" : dark ? "text-fg/80" : "text-foreground/80"
      }`}
    >
      {children}
    </a>
  );
};

export default NavLink;
