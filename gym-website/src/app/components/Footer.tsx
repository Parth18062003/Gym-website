import Image from "next/image";
import React from "react";
import instagram from "../../../assets/instagram.svg";
import whatsapp from "../../../assets/whatsapp.svg";
import twitter from "../../../assets/twitter.svg";
import linkedin from "../../../assets/linkedin.svg";
import Link from "next/link";

const Footer = () => {
  // Define the links for the "Company" section
  const companyLinks = [
    { href: "#", text: "Our Story" },
    { href: "#", text: "Careers" },
    { href: "#", text: "Blog" },
    { href: "#", text: "About" },
  ];

  // Define the links for the "Help" section
  const helpLinks = [
    { href: "#", text: "FAQ" },
    { href: "#", text: "Terms & Conditions" },
    { href: "#", text: "Privacy Policy" },
    { href: "#", text: "Contact Us" },
  ];

  // Render the footer
  return (
    <>
      <footer className="px-4 bg-[#042440] text-white w-full">
        <div className="container mx-auto py-10 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h3 className="text-[16px] uppercase text-[#91ADC5]">Company</h3>
              <ul className="space-y-1">
                {companyLinks.map((link, index) => (
                  <li className="text-[16px] leading-8" key={index}>
                    <Link href={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-[16px] uppercase text-[#91ADC5]">Help</h3>
              <ul className="space-y-1">
                {helpLinks.map((link, index) => (
                  <li className="text-[16px] leading-8" key={index}>
                    <Link href={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <div className="text-[16px] uppercase text-[#91ADC5]">
                Social media
              </div>
              <div className="flex justify-start space-x-3">
                <Link href="#" title="Facebook" className="flex items-center p-1">
                  <Image src={instagram} alt="Instagram" width={25} height={25} />
                </Link>
                <Link href="#" title="Twitter" className="flex items-center p-1">
                  <Image src={whatsapp} alt="Whatsapp" width={25} height={25} />
                </Link>
                <Link href="#" title="Instagram" className="flex items-center p-1">
                  <Image src={twitter} alt="Twitter" width={25} height={25} />
                </Link>
                <Link href="#" title="Instagram" className="flex items-center p-1">
                  <Image src={linkedin} alt="LinkedIn" width={25} height={25} />
                </Link>
              </div>
            </div>
            <div className="space-y-2 sm:col-span-1">
              <div className="text-[16px] uppercase text-[#91ADC5]">
                Stay Updated with Us.
              </div>
              <div className="mt-4 flex">
                <input
                  type="text"
                  className="p-2 border border-grey-light round-l text-grey-dark text-sm h-auto w-full"
                  placeholder="Your email address"
                />
                <button className="bg-[#12395C] rounded-r-sm h-auto px-3 text-white">
                  &gt;
                </button>
              </div>
              <p className="mt-3">Copywrite @ fitsnap.com</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
