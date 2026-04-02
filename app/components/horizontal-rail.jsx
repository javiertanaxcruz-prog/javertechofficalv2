export function HorizontalRail({ ariaLabel, children, className }) {
  return (
    <div aria-label={ariaLabel} className={className}>
      {children}
    </div>
  );
}
