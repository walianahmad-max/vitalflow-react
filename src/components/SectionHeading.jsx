export function Eyebrow({ children }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2.5 text-base">
      <span className="size-2 rounded-full bg-brand" />
      {children}
    </div>
  );
}
export default function SectionHeading({
  label,
  children,
  page = false,
  action,
}) {
  return (
    <div
      className={`mx-auto text-center ${page ? "max-w-[780px] pb-[60px] pt-[50px]" : "mb-12 max-w-[720px]"}`}
    >
      <Eyebrow>{label}</Eyebrow>
      {page ? (
        <h1 className="page-heading">{children}</h1>
      ) : (
        <h2 className="heading">{children}</h2>
      )}
      {action && <div className="mt-8">{action}</div>}
    </div>
  );
}
