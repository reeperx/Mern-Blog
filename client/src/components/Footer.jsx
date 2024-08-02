import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsWhatsapp,
  BsTiktok,
} from "react-icons/bs";
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-black">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center flex whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <img src="/logo.png" alt="logo" width={30} />
              <h1 className="ml-2 mt-5 uppercase text-xl">
          Thabo <span className="text-[#c49c26]">Bester</span>{" "}
        </h1>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="/gallery">
                  Gallery
                </Footer.Link>
                <Footer.Link
                  href="#"
                >
                  Cases
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="/contact">
                  Contact
                </Footer.Link>
                <Footer.Link href="#">Team</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Team"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsWhatsapp} />
            <Footer.Icon href="#" icon={BsTiktok} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
