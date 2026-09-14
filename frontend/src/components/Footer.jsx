import {
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-teal-700 mt-12">

      <div className="max-w-7xl mx-auto px-3 py-10">

        {/* TOP ROW */}
        <div className="grid md:grid-cols-3 gap-10 items-start">

          {/* LOGO + DESCRIPTION */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/favicon.ico"
                className="w-20 h-20"
                alt="logo"
              />
              <h3 className="text-2xl font-semibold text-white">
                Digital Health Twin
              </h3>
            </div>

            <p className="text-gray-100 mt-4 max-w-sm">
              A digital replica of your health to simulate, predict and
              improve health outcomes using AI powered insights.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="grid grid-cols-2 gap-6 text-gray-300">

            <div className="space-y-3">
              <p className="hover:text-primary cursor-pointer">Home</p>
              <p className="hover:text-primary cursor-pointer">Services</p>
              <p className="hover:text-primary cursor-pointer">Features</p>
              <p className="hover:text-primary cursor-pointer">How to use</p>
            </div>

            <div className="space-y-3">
              <p className="font-semibold text-gray-300">Resources</p>
              <p className="hover:text-primary cursor-pointer">FAQ</p>
              <p className="hover:text-primary cursor-pointer">Contact</p>
            </div>

          </div>

          {/* CONTACT */}
          <div className="space-y-4">

            <p className="font-semibold text-gray-300">
              Contact
            </p>

            <div className="flex items-center gap-3 text-gray-300">
              <Phone size={18} />
              <p>+91 9005008946</p>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <Mail size={18} />
              <p>@digitaltwinhealth.com</p>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-4 text-gray-100">

              <Linkedin className="cursor-pointer hover:text-primary" />
              <Facebook className="cursor-pointer hover:text-primary" />
              <Instagram className="cursor-pointer hover:text-primary" />
              <Twitter className="cursor-pointer hover:text-primary" />
              <Youtube className="cursor-pointer hover:text-primary" />

            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between text-gray-200 text-sm">

          <p>© 2025 Digital Health Twin. All Rights Reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <p className="hover:text-primary cursor-pointer">
              Privacy Policy
            </p>
            <p className="hover:text-primary cursor-pointer">
              Terms of Use
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}