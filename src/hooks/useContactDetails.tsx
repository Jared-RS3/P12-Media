import { useEffect, useState } from "react";

interface ContactDetails {
  email: string;
  phone: string;
  address: string;
}

const defaultDetails: ContactDetails = {
  email: "hello@p12media.co.za",
  phone: "+27 82 555 0123",
  address: "Centurion, Gauteng, South Africa",
};

export const useContactDetails = () => {
  const [contactDetails, setContactDetails] =
    useState<ContactDetails>(defaultDetails);

  useEffect(() => {
    // Load from localStorage
    const saved = localStorage.getItem("p12_contact_details");
    if (saved) {
      try {
        setContactDetails(JSON.parse(saved));
      } catch (error) {
        console.error("Error parsing contact details:", error);
        setContactDetails(defaultDetails);
      }
    }

    // Listen for storage changes (updates from admin panel)
    const handleStorageChange = () => {
      const updated = localStorage.getItem("p12_contact_details");
      if (updated) {
        try {
          setContactDetails(JSON.parse(updated));
        } catch (error) {
          console.error("Error parsing contact details:", error);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Custom event for same-tab updates
    window.addEventListener(
      "contactDetailsUpdated",
      handleStorageChange as EventListener
    );

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener(
        "contactDetailsUpdated",
        handleStorageChange as EventListener
      );
    };
  }, []);

  return contactDetails;
};
