import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        <Image
          src="/assets/logo-icon.png"
          alt=""
          width={18}
          height={18}
          className="mark-footer"
        />
        <span>CodePath</span>
      </div>
      <span>© 2026</span>
    </footer>
  );
}
