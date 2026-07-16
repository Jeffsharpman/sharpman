import Button from "../UI/Button";

export default function LiveProjectButton({ href = "#" }) {
  return (
    <Button
      href={href}
      variant="outline"
      size="sm"
      arrow
      target="_blank"
      rel="noopener noreferrer"
      className="font-mono text-[10px] md:text-xs uppercase tracking-[3px] !px-5 !py-2.5 !rounded-full !border-primary hover:!bg-primary/10"
    >
      VIEW PROJECT
    </Button>
  );
}
