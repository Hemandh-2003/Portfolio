import ContactCard from "./ContactCard";
import SocialLinks from "./SocialLinks";

const ContactInfo = () => {
  return (
    <div className="space-y-6">

      <ContactCard
        title="Email"
        value="hemandhtsujil@gmail.com"
      />

      <ContactCard
        title="Location"
        value="Kochi, Kerala, India"
      />

      <ContactCard
        title="Availability"
        value="Open for MERN Roles & Freelance"
      />

      <SocialLinks />

    </div>
  );
};

export default ContactInfo;