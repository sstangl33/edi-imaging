import Image from "next/image";
import { getFooterData } from "@/sanity/lib/sanity-utils";
import "../(site)/styles/footer.css";
import getYear from "../(site)/lib/getYear";
import { footerDataTypes } from "@/sanity/lib/types";

export default async function Footer() {
  const footerData: footerDataTypes[] = await getFooterData();
  const {
    title,
    grayscaleLogoUrl,
    streetAddress,
    cityStateZip,
    email,
    emailSubject,
  } = footerData[0];

  return (
    <div className="footerWrapper">
      <footer>
        <section>
          <div className="logoWrapper">
            <Image
              src={grayscaleLogoUrl}
              alt={`${title} logo`}
              width={120}
              height={46}
            />
          </div>
        </section>

        <section>
          <div className="addressWrapper">
            <address>
              <strong>{title}</strong>
              <br />
              {streetAddress}
              <br />
              {cityStateZip}
            </address>
            <a href={`mailto:${email}?subject=${emailSubject}`}>{email}</a>
          </div>
        </section>
      </footer>
      <section className="copyrightWrapper">
        <p className="copyright">
          Copyright &copy; {getYear()} {title}. All Rights Reserved.
        </p>
      </section>
    </div>
  );
}
