import "../(site)/styles/page.css";

export default function Thanks() {
  return (
    <>
      <div className="container">
        <h1 className="title">Thank you</h1>
        <p>
          Thank you for your application! We will be in contact with you soon.
        </p>
      </div>

      <div className="backBtnContainer">
        <a className="button back-btn" href="/jobs">
          <span className="heading">&lt; Back</span>
        </a>
      </div>
    </>
  );
}
