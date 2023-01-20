export const Heading: React.FC<{
  type?: string;
  text: string;
  className: string;
}> = ({ type, text, className }) => {
  let appliedHeadingClasses = "";

  switch (type) {
    case "h1":
      appliedHeadingClasses = "text-4xl";
      break;
    case "h2":
      appliedHeadingClasses = "text-3xl";
      break;
    case "h3":
      appliedHeadingClasses = "text-2xl";
      break;
    case "h4":
      appliedHeadingClasses = "text-xl";
      break;
    case "h5":
      appliedHeadingClasses = "text-lg";
      break;
    case "h6":
      appliedHeadingClasses = "text-base";
      break;
  }

  return <p className={appliedHeadingClasses + ' ' + className}>{text}</p>;
};
