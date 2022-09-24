import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

import "./assets/styles/main.css";

import img1 from "./assets/images/illustration-1.svg";
import img2 from "./assets/images/illustration-2.svg";
import arrow from "./assets/images/icon-arrow.svg";
import quotes from "./assets/images/icon-quotes.svg";
import avatar from "./assets/images/avatar-testimonial.jpg";
import phone from "./assets/images/icon-phone.svg";
import email from "./assets/images/icon-email.svg";

import { ListaHeader } from "./assets/components/ListaHeader/ListaHeader";
import { Titulo } from "./assets/components/Titulo/Titulo";
import { Paragrafo } from "./assets/components/Paragrafo/Paragrafo";
import { Form } from "./assets/components/Form/Form";
import { Logo } from "./assets/components/Logo/Logo";

function App() {
  return (
    <div>
      <header className="flex items-center justify-between p-6 md:p-10 lg:p-14">
        <Logo logoId={1} className="w-32 h-12 scale-75 lg:scale-100 lg:w-64" />

        <ul className="flex items-center">
          <ListaHeader text={"Features"} />
          <ListaHeader text={"Team"} />
          <ListaHeader text={"Sign In"} />
        </ul>
      </header>

      <section className="flex flex-col px-6 bg-[url('/src/assets/images/bg-curve-mobile.svg')] bg-no-repeat bg-bottom bg-contain md:flex-row gap-6 md:pb-60 lg:pb-80 lg:px-14 lg:p-0">
        <div className="pb-32 md:p-0 lg:max-w-[600px]">
          <Titulo
            title={
              "All your files in one secure location, accessible anywhere."
            }
            titleNumber={1}
          />

          <div className="lg:pr-20">
            <Paragrafo
              paragrafo={
                "Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers."
              }
              paragrafoNumber={1}
            />
          </div>

          <Form textButton={"Get Started"} textButtonNumber={1} />
        </div>

        <div className="order-first max-w-full mt-36 md:order-1 md:mt-0 self-center">
          <img src={img1} alt="" />
        </div>
      </section>

      <section className="bg-[hsl(240,75%,98%)] flex flex-col pb-14 md:flex-row lg:grid grid-cols-[600px_1fr] lg:pb-20 lg:px-14">
        <div className="px-6 lg:px-0">
          <div className="pt-20 flex flex-col md:pt-4 lg:max-w-2xl">
            <Titulo
              title={"Stay productive, wherever you are"}
              titleNumber={2}
            />

            <div className="lg:max-w-[29rem] lg:self-start">
              <Paragrafo
                paragrafo={
                  "Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs."
                }
                paragrafoNumber={2}
              />
              <Paragrafo
                paragrafo={
                  "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!"
                }
                paragrafoNumber={2}
              />
            </div>

            <div className="self-center text-xs text-[hsl(170,45%,43%)] border-b-[1px] border-[hsl(170,45%,43%)] flex flex-row py-1 mb-8 mt-4 lg:self-start hover:opacity-50">
              <a href="#">See how Fylo works</a>
              <img src={arrow} alt="" className="ml-1" />
            </div>
          </div>

          <div className="bg-white m-6 p-4 drop-shadow-lg lg:m-0 lg:max-w-[16rem]">
            <img src={quotes} alt="" className="mb-3" />
            <p className="text-[10px] font-opensans font-normal leading-5 tracking-wider mb-4 text-[hsl(243,87%,12%)]">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex flex-row text-[hsl(243,87%,12%)] font-opensans">
              <img src={avatar} alt="" className="w-6 h-6 rounded-full mr-2" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-wider">
                  Kyle Burton
                </span>
                <span className="text-[8px] opacity-70 tracking-tighter">
                  Founder & CEO, Huddle
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="order-first mt-14 px-6 md:order-1 md:mt-0 md:self-center">
          <img src={img2} alt="" className="lg:w-full" />
        </div>
      </section>

      <section className="bg-[hsl(238,22%,44%)] pb-16 md:grid grid-cols-2  md:pb-6 lg:py-16 lg:px-14 gap-32">
        <div className="text-center lg:text-left">
          <h3 className="pt-14 text-[hsl(240,75%,98%)] font-raleway font-bold text-lg mb-5 lg:text-2xl lg:pt-0">
            Get early access today
          </h3>

          <p className="text-[hsl(240,75%,98%)] text-sm px-12 mb-6 lg:text-left lg:px-0 lg:max-w-[26rem] lg:mb-0">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>

        <div className="px-16 md:self-center lg:px-0">
          <Form textButton={"Get Started For Free"} textButtonNumber={2} />
        </div>
      </section>

      <section className="flex flex-col pt-12 bg-[hsl(243,87%,12%)] px-12 text-white font-opensans text-sm md:grid grid-cols-1 lg:px-14">
        <Logo logoId={2} className="w-40 h-12 scale-90 origin-left lg:mb-10" />

        <div className="flex flex-col md:grid md:grid-cols-4 justify-items-center lg:justify-items-start">
          <div className="flex flex-col mb-12 md:mb-0">
            <div className="flex flex-row items-center mb-5 lg:mb-4">
              <img src={phone} alt="" />
              <span className="ml-4">Phone: +1-543-123-4567</span>
            </div>

            <div className="flex flex-row items-center">
              <img src={email} alt="" />
              <span className="ml-4">example@fylo.com</span>
            </div>
          </div>

          <div className="lg:justify-self-center">
            <ul>
              <li className="mb-4">
                <a href="#">About Us</a>
              </li>

              <li className="mb-4">
                <a href="#">Jobs</a>
              </li>

              <li className="mb-4">
                <a href="#">Press</a>
              </li>

              <li className="mb-4">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div className="my-12 md:my-0 lg:justify-self-center">
            <ul>
              <li className="mb-4">
                <a href="#">Contact Us</a>
              </li>

              <li className="mb-4">
                <a href="#">Terms</a>
              </li>

              <li className="mb-4">
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-row self-center md:self-start lg:justify-self-center">
            <FaFacebookSquare size={22} className="mr-2" />
            <FaTwitterSquare size={22} className="mr-2" />
            <FaInstagramSquare size={22} />
          </div>
        </div>
      </section>

      <footer className="bg-[hsl(243,87%,12%)] p-12 text-white font-opensans text-xs">
        <p className="text-center">
          Challenge by{" "}
          <a
            className="underline"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Rubén</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
