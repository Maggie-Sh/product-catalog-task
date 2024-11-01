import { cn } from "../../utils/cn";

const InfoBox = ({
  type,
  message = "Something went wrong...",
  className = "",
}) => {
  return (
    <section
      role={type === "error" ? "alert" : undefined}
      aria-live={type === "error" ? "assertive" : "polite"}
      className={cn("my-5 col-span-full", className)}
    >
      <h2 className="text-center text-xl text-gray-700">{message}</h2>
    </section>
  );
};

export default InfoBox;
