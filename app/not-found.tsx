import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>This page could not be found</h1>
        <p>The link may be old. Try the homepage or get in touch with MBB.</p>
        <div className="btn-row" style={{ marginTop: "1.5rem" }}>
          <Link href="/" className="btn">
            Home
          </Link>
          <Link href="/contact/" className="btn btn-outline">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
