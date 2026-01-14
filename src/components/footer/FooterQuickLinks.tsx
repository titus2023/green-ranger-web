import { Link } from "react-router-dom";

const FooterQuickLinks = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/resources", label: "Resources" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
    { to: "/privacy", label: "Privacy Policy" },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="text-forest-300 hover:text-white text-sm">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterQuickLinks;
