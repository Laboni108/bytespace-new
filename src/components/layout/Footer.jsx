import logo from "../../assets/images/logo-dark.svg";

const footerLinks = [
  {
    heading: "",
    links: ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  },
  {
    heading: "",
    links: ["Development", "Marketing", "Photography", "Finance", "Sport"],
  },
  {
    heading: "",
    links: ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
  },
];

const bottomLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-[1200px] px-5 py-16 xl:px-0">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Logo + newsletter */}
          <div>
            <img src={logo} alt="ByteSpace" className="h-8 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-shuttle-500">
              Stay up to date with our latest features and releases by joining our
              newsletter.
            </p>
            <form className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full border border-shuttle-200 px-5 py-3 text-sm outline-none focus:border-primary-800 sm:max-w-[220px]"
              />
              <button
                type="submit"
                className="cursor-pointer rounded-full bg-lime-400 px-6 py-3 text-sm font-medium text-shuttle-950 transition-opacity hover:opacity-90"
              >
                Search
              </button>
            </form>
            <p className="mt-3 max-w-xs text-xs text-shuttle-400">
              By subscribing, you agree to our Privacy Policy and consent to receive
              updates from our company.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col, i) => (
            <ul key={i} className="flex flex-col gap-4">
              {col.links.map((link) => (
                <li key={link}>
                  
                  < a  href="#"
                    className="text-sm text-shuttle-600 transition-colors hover:text-primary-800"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-shuttle-200 pt-6 sm:flex-row">
          <p className="text-xs text-shuttle-400">
            © 2026 ByteSpace. All rights reserved.
          </p>
          <div className="flex gap-6">
            {bottomLinks.map((link) => (
              
               < a key={link}
                href="#"
                className="text-xs text-shuttle-400 transition-colors hover:text-primary-800"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}