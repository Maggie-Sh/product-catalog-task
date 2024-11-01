import { socials } from "./constants";

const Footer = () => {
  return (
    <footer className="bg-primary p-2 flex items-center justify-end">
      {socials.map(({ href, Icon, id, ...props }) => (
        <a key={id} href={href} {...props}>
          <Icon />
        </a>
      ))}
    </footer>
  );
};

export default Footer;
