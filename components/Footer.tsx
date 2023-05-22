import Link from "next/link";

export default function Footer() {
  const product = [
    {
      label: "Play Store",
	  href: "https://play.google.com/store/apps/details?id=org.imageing.app"
    }
  ];

  const company = [
    {
      label: "Privacy Policy",
      href: "/privacy"
    },
    {
      label: "Terms of Service",
      href: "/terms"
    },
    {
      label: "imageing Discord",
      href: "https://imageing.org/discord"
    }
  ];

  return (
    <>
	  <footer className="footer justify-center p-10 bg-base-300 text-base-content">
        <div>
          <span className="footer-title">Product</span>
          {product.map((product) => (
            <Link key={product.label} href={product.href}>
              <a className="link link-hover">{product.label}</a>
            </Link>
          ))}
        </div>
        <div>
          <span className="footer-title">Company</span>
          {company.map((company) => (
            <Link key={company.label} href={company.href}>
              <a className="link link-hover">{company.label}</a>
            </Link>
          ))}
        </div>
      </footer>
    </>
  );
}
