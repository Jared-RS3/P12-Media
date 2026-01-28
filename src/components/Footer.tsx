import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { useContactDetails } from "../hooks/useContactDetails";

const Footer = () => {
  const year = new Date().getFullYear();
  const contactDetails = useContactDetails();

  return (
    <footer className="bg-background/90 border-t border-primary/20 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex-1">
          <img
            src="/public/P12 Media Nav Bar Logo 2.png"
            alt="P12 Media Logo"
            className="h-16 w-auto object-contain mb-3"
          />
          <p className="text-muted max-w-md">
            Full-service film production company focused on authentic
            storytelling, social impact and media excellence. Based in
            Centurion, South Africa.
          </p>
        </div>

        <div className="flex-1 flex flex-col sm:flex-row gap-8">
          <div>
            <h5 className="text-sm font-semibold text-foreground mb-3">
              Contact
            </h5>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-primary" />
                <span>{contactDetails.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <a
                  href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}
                  className="hover:text-primary"
                >
                  {contactDetails.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="hover:text-primary"
                >
                  {contactDetails.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-foreground mb-3">
              Connect
            </h5>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-md bg-surface hover:bg-surface-light transition"
              >
                <Instagram size={18} className="text-primary" />
              </a>

              <a
                href="https://www.youtube.com/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2 rounded-md bg-surface hover:bg-surface-light transition"
              >
                <Youtube size={18} className="text-primary" />
              </a>

              <a
                href="https://www.linkedin.com/company/yourcompany"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-md bg-surface hover:bg-surface-light transition"
              >
                <Linkedin size={18} className="text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 border-t border-primary/10 pt-6 text-sm text-muted flex flex-col md:flex-row items-center justify-between gap-4">
        <span>© {year} P12 MEDIA. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a href="/privacy" className="hover:text-primary">
            Privacy
          </a>
          <a href="/terms" className="hover:text-primary">
            Terms
          </a>
          <a href="/contact" className="hover:text-primary">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
