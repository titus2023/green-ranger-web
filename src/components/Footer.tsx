import {
  FooterLogo,
  FooterQuickLinks,
  FooterPrograms,
  FooterNewsletter,
  FooterCopyright,
} from "./footer";

const Footer = () => {
  return (
    <footer className="bg-forest-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterLogo />
          <FooterQuickLinks />
          <FooterPrograms />
          <FooterNewsletter />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
