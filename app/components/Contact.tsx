import { contactDataTypes } from "@/sanity/lib/types";

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

      <p>
        <a href={`tel:+${contactData.telephone.replace(/\D/g, "")}`}>
          {contactData.telephone}
        </a>
      </p>
      <p>
        {" "}
        <a
          href={`mailto:${contactData.email}?subject=${contactData.emailSubject}`}
        >
          {contactData.email}
        </a>
      </p>
    </div>
  );
};
