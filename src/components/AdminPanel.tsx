import { Image, LogOut, Mail, MapPin, Phone, Save } from "lucide-react";
import { useEffect, useState } from "react";
import GalleryManager from "./GalleryManager";

interface ContactDetails {
  email: string;
  phone: string;
  address: string;
}

interface AdminPanelProps {
  onLogout: () => void;
}

const AdminPanel = ({ onLogout }: AdminPanelProps) => {
  const [activeTab, setActiveTab] = useState<"contact" | "gallery">("contact");
  const [contactDetails, setContactDetails] = useState<ContactDetails>({
    email: "hello@p12media.co.za",
    phone: "+27 82 555 0123",
    address: "Centurion, Gauteng, South Africa",
  });

  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  // Load saved details from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("p12_contact_details");
    if (saved) {
      setContactDetails(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    setSaveMessage("");

    // Simulate save delay
    setTimeout(() => {
      localStorage.setItem(
        "p12_contact_details",
        JSON.stringify(contactDetails)
      );
      setIsSaving(false);
      setSaveMessage("Contact details saved successfully!");

      // Clear success message after 3 seconds
      setTimeout(() => setSaveMessage(""), 3000);
    }, 500);
  };

  const handleChange = (field: keyof ContactDetails, value: string) => {
    setContactDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Admin Panel
            </h1>
            <p className="text-muted">Manage your website content</p>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-6 py-3 bg-surface hover:bg-surface-light border border-primary/20 rounded-lg transition-colors text-foreground"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 bg-surface rounded-lg p-1 border border-primary/20">
          <button
            onClick={() => setActiveTab("contact")}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md font-medium transition-all ${
              activeTab === "contact"
                ? "bg-primary text-white shadow-lg"
                : "text-muted hover:text-foreground"
            }`}
          >
            <Mail size={18} />
            Contact Details
          </button>
          <button
            onClick={() => setActiveTab("gallery")}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md font-medium transition-all ${
              activeTab === "gallery"
                ? "bg-primary text-white shadow-lg"
                : "text-muted hover:text-foreground"
            }`}
          >
            <Image size={18} />
            Gallery & Video
          </button>
        </div>

        {/* Contact Details Tab */}
        {activeTab === "contact" && (
          <div className="bg-surface rounded-2xl border border-primary/20 p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Contact Details
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-sm font-medium text-foreground mb-2"
                >
                  <Mail size={16} className="text-primary" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={contactDetails.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="flex items-center gap-2 text-sm font-medium text-foreground mb-2"
                >
                  <Phone size={16} className="text-primary" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={contactDetails.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="+27 82 555 0123"
                />
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="flex items-center gap-2 text-sm font-medium text-foreground mb-2"
                >
                  <MapPin size={16} className="text-primary" />
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={contactDetails.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Centurion, Gauteng, South Africa"
                />
              </div>

              {/* Save Message */}
              {saveMessage && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-green-500 text-sm font-medium">
                    {saveMessage}
                  </p>
                </div>
              )}

              {/* Save Button */}
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save size={20} />
                {isSaving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        )}

        {/* Gallery & Video Tab */}
        {activeTab === "gallery" && <GalleryManager />}

        {/* Info Box - Contact Tab Only */}
        {activeTab === "contact" && (
          <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-sm text-muted">
              <strong className="text-foreground">Note:</strong> Changes are
              saved locally in your browser. The updated contact details will be
              displayed in the footer and contact sections.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
