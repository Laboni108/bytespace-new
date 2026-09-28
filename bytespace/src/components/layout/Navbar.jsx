import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import logo from "../../assets/images/logo-light.svg";

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

const authLinks = [
  { label: "Sign In", href: "#" },
  { label: "Join Us", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 w-full">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-6 xl:px-0">
        {/* Logo */}
        <a href="#" aria-label="ByteSpace home">
          <img src={logo} alt="ByteSpace" className="h-8 w-auto" />
        </a>

        {/* Center links (desktop) */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              
               < a href={link.href}
                className={`text-sm font-medium transition-colors hover:text-lime-400 ${
                  link.active ? "text-white" : "text-white/80"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side (desktop) */}
        <div className="hidden items-center gap-6 md:flex">
          {authLinks.map((link) => (
            
             < a key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-lime-400"
            >
              {link.label}
            </a>
          ))}
          <button
            aria-label="Cart"
            className="cursor-pointer text-white transition-colors hover:text-lime-400"
          >
            <ShoppingBag size={20} />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="cursor-pointer text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="bg-primary-900 px-5 pb-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {[...navLinks, ...authLinks].map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-base font-medium text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}