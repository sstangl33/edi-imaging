import { formResponseDataTypes } from "@/sanity/lib/types";
import "../(site)/styles/page.css";
import { getFormResponseData } from "@/sanity/lib/sanity-utils";

export default async function Thanks() {
  const formResponseData: formResponseDataTypes = await getFormResponseData();

  return (
    <>
      <p className="text-center">{formResponseData.formResponseText}</p>
      <div className="backBtnContainer">
        <a className="button back-btn" href="/">
          <span className="heading">&lt; Back</span>
        </a>
      </div>
    </>
  );
}
