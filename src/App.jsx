import { React } from "react";
import "./assets/styles/main.css";

import logoImg from "./assets/images/logo.svg";
import img1 from "./assets/images/illustration-1.svg";
import img2 from "./assets/images/illustration-2.svg";
import arrow from "./assets/images/icon-arrow.svg";
import quotes from "./assets/images/icon-quotes.svg";
import avatar from "./assets/images/avatar-testimonial.jpg";

import { ListaHeader } from "./assets/components/ListaHeader/ListaHeader";
import { Titulo } from "./assets/components/Titulo/Titulo";
import { Paragrafo } from "./assets/components/Paragrafo/Paragrafo";
import { Form } from "./assets/components/Form/Form";

function App() {
  return (
    <>
      <header className="flex items-center justify-between p-6">
        <img className="w-[30%]" src={logoImg} alt="" />

        <ul className="flex items-center">
          <ListaHeader text={"Features"} />
          <ListaHeader text={"Team"} />
          <ListaHeader text={"Sign In"} />
        </ul>
      </header>

      <section className="flex flex-col p-6 bg-[url('/src/assets/images/bg-curve-mobile.svg')] bg-no-repeat bg-bottom">
        <div className="pb-32">
          <Titulo
            title={
              "All your files in one secure location, accessible anywhere."
            }
            titleNumber={1}
          />

          <Paragrafo
            paragrafo={
              "Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers."
            }
            paragrafoNumber={1}
          />

          <Form textButton={"Get Started"} textButtonNumber={1} />
        </div>

        <div className="order-first max-w-full mt-36">
          <img src={img1} alt="" />
        </div>
      </section>

      <section className="bg-[hsl(240,75%,98%)] flex flex-col pb-14">
        <div className="px-6">
          <div className="pt-20 flex flex-col">
            <Titulo
              title={"Stay productive, wherever you are"}
              titleNumber={2}
            />

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

            <div
              className={`self-center text-xs text-[hsl(170,45%,43%)] border-b-[1px] border-[hsl(170,45%,43%)] flex flex-row py-1 mb-12`}
            >
              <a href="#">See how Fylo works</a>
              <img src={arrow} alt="" className="ml-1" />
            </div>
          </div>

          <div className="bg-white m-6 p-4 drop-shadow-lg">
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

        <div className="order-first mt-14 px-6">
          <img src={img2} alt="" />
        </div>
      </section>

      <section className="bg-[hsl(238,22%,44%)] pb-16">
        <div className="text-center">
          <h3 className="pt-14 text-[hsl(240,75%,98%)] font-raleway font-bold text-lg mb-5">
            Get early access today
          </h3>
          <p className="text-[hsl(240,75%,98%)] text-sm px-12 mb-6">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div className="px-16">
          <Form textButton={"Get Started For Free"} textButtonNumber={2} />
        </div>
      </section>
      <section>
        Phone: +1-543-123-4567 example@fylo.com About Us Jobs Press Blog Contact
        Us Terms Privacy
      </section>

      <footer>
        <p class="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
