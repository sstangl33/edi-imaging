import { contactDataTypes } from "@/sanity/lib/types";
import { ContactForm } from "./ContactForm";

export const Contact = (contactData: contactDataTypes) => {
  return (
    <div className="contactInfoWrapper">
      <address>
        <strong>{contactData.title}</strong>
        <br />
        {contactData.streetAddress}
        <br />
        {contactData.cityStateZip}
      </address>
      <a href={`tel:+${contactData?.telephone.replace(/\D/g, "")}`}>
        {contactData.telephone}
      </a>
      <br /> <br />
      <p>
        For Drone Photography call:
        <br />
        <a href={`tel:+${contactData?.telephone2.replace(/\D/g, "")}`}>
          {contactData?.telephone2}
        </a>
      </p>
      <ContactForm />
    </div>
  );
};
