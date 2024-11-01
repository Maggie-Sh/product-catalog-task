import { useState } from "react";
import { cn } from "../../utils/cn";

import { ReactComponent as ExpandIcon } from "../../assets/expand-icon.svg";

const Accordion = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded((prev) => !prev);

  const accordionClassname = cn(
    "shadow-custom rounded-xl flex flex-col w-full max-w-full sm:max-w-[280px] py-4 max-h-full sm:overflow-y-auto sm:ml-4"
  );

  const expandIconClassname = cn(
    "transition-transform",
    isExpanded && "rotate-90"
  );

  const accordionContentClassname = cn(
    "overflow-hidden hidden",
    isExpanded && "flex"
  );

  return (
    <div className={accordionClassname}>
      <button
        onClick={handleToggle}
        aria-expanded={isExpanded}
        aria-controls={`accordion-${title}`}
        className="flex items-center justify-between px-4 text-lg font-medium"
        type="button"
      >
        {title}
        <ExpandIcon className={expandIconClassname} />
      </button>
      <div
        id={`accordion-${title}`}
        role="region"
        aria-labelledby={`accordion-button-${title}`}
        className={accordionContentClassname}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
