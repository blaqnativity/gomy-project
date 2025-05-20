import {
  FaFacebook,
  FaHandHoldingMedical,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date();
  const currentYear = year.getFullYear();

  return (
    <>
      <div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div class="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              class="flex items-center"
            >
              <span class="mr-1 text-xl font-bold tracking-wide text-gray-800 uppercase">
                ALMed
              </span>
              <FaHandHoldingMedical className="text-2xl" />
            </a>
            <div class="mt-6 lg:max-w-sm">
              <p class="text-sm text-gray-800">
                This site is for informational purposes only and not a
                substitute for medical advice, diagnosis or treatment. If you’re
                looking for medical advice, we suggest talking with a qualified
                physician.
              </p>
            </div>
          </div>
          <div class="space-y-2 text-sm">
            <p class="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div class="flex">
              <p class="mr-1 text-gray-800">Phone:</p>
              <a
                href="tel:850-123-5021"
                aria-label="Our phone"
                title="Our phone"
                class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                850-123-5021
              </a>
            </div>
            <div class="flex">
              <p class="mr-1 text-gray-800">Email:</p>
              <a
                href="mailto:info@lorem.mail"
                aria-label="Our email"
                title="Our email"
                class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                admin@alphamed.com
              </a>
            </div>
            <div class="flex">
              <p class="mr-1 text-gray-800">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800 "
              >
                22B, Adeboyejo Street, Surulere, Lagos, Nigeria
              </a>
            </div>
          </div>
          <div>
            <span class="text-base font-bold tracking-wide text-gray-900">
              Social
            </span>
            <div class="flex items-center mt-1 space-x-3">
              <a
                href="/"
                class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaTwitter />
              </a>
              <a
                href="/"
                class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaFacebook />
              </a>
              <a
                href="/"
                class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <FaInstagram />
              </a>
            </div>
            <p class="mt-4 text-sm text-gray-500">
              Follow all our social media accounts to get updates and see whats
              trending on our pages.
            </p>
          </div>
        </div>
        <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p class="text-sm text-gray-600">
            © Copyright {currentYear} AlphaMed Laboratories Inc.
          </p>
          <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                F.A.Q
              </a>
            </li>
            <li>
              <a
                href="/"
                class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
