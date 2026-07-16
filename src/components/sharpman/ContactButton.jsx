import Button from "../UI/Button";

export default function ContactButton() {
  return (
    <Button
      href="mailto:buildwithsharpman@gmail.com"
      variant="primary"
      size="md"
      arrow
      className="font-mono text-[10px] md:text-xs uppercase tracking-[3px] !px-6 !py-3 !rounded-full"
    >
      LET&apos;S TALK
    </Button>
  );
}
