import * as React from "react";

type Variant = "primary" | "accent" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;

  /** prop interna (NO debe llegar al DOM) */
  appName?: string;
}

export function Button({
  variant = "primary",
  style,
  appName, // <- la “consumimos” para que NO se propague
  ...props
}: ButtonProps) {
  const base: React.CSSProperties = {
    padding: "12px 20px",
    borderRadius: 10,
    fontWeight: 700,
    cursor: "pointer",
    border: "none",
  };

  const variants: Record<Variant, React.CSSProperties> = {
    primary: { background: "var(--color-primary)", color: "white" },
    accent: { background: "var(--color-accent)", color: "white" },
    outline: {
      background: "transparent",
      border: "1px solid var(--color-border)",
      color: "var(--color-primary)",
    },
  };

  return (
    <button
      {...props}
      style={{ ...base, ...variants[variant], ...style }}
    />
  );
}
