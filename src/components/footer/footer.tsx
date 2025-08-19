import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:flex-row gap-8 py-8">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={116} height={32} />
          </Link>

          <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foregrounded">
            <Link className="hover:text-primary" href="/termos-de-uso">
              Termos de uso
            </Link>
            <Link
              className="hover:text-primary"
              href="/politica-de-privacidade"
            >
              Política de privacidade
            </Link>
            <Link className="hover:text-primary" href="/feedback">
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
