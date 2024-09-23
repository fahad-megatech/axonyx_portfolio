import TypingAnimation from "@/components/magicui/typing-animation";

const TextTyping = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  return <TypingAnimation className={className} text={text} duration={50} />;
};

export default TextTyping;
