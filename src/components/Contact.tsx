import { useState } from "react";
import { useContactDetails } from "../hooks/useContactDetails";

const Contact = () => {
  const contactDetails = useContactDetails();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg("Please fill in your name, email and message.");
      return;
    }

    setStatus("sending");

    try {
      // Replace endpoint with your real API or email handling endpoint.
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg("Unable to send message. Please try again later.");
      console.error("Contact submit error:", err);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-b from-background to-surface"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-white">
            Contact Us
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Have a project or a question? Drop us a message and we'll get back
            to you.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="p-6 bg-surface rounded-2xl border border-primary/10 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Get in touch
              </h3>

              <ul className="text-sm text-muted space-y-3">
                <li>
                  <span className="font-medium text-foreground block">
                    Location:
                  </span>
                  <span>{contactDetails.address}</span>
                </li>
                <li>
                  <span className="font-medium text-foreground block">
                    Phone:
                  </span>
                  <a
                    className="hover:text-primary"
                    href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}
                  >
                    {contactDetails.phone}
                  </a>
                </li>
                <li>
                  <span className="font-medium text-foreground block">
                    Email:
                  </span>
                  <a
                    className="hover:text-primary"
                    href={`mailto:${contactDetails.email}`}
                  >
                    {contactDetails.email}
                  </a>
                </li>
              </ul>

              <div className="mt-6">
                <p className="text-sm text-muted">
                  Or use the form to send a message directly. We'll usually
                  reply within 1–2 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
