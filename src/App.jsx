import "./assets/styles/main.css";

import logoImg from "./assets/images/logo.svg";
import img1 from "./assets/images/illustration-1.svg";
import img2 from "./assets/images/illustration-2.svg";
import arrow from "./assets/images/icon-arrow.svg";

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

          <Form textButton={"Get Started"} />
        </div>

        <div className="order-first max-w-full mt-36">
          <img src={img1} alt="" />
        </div>
      </section>

      <section className="bg-[hsl(240,75%,98%)] flex flex-col">
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
              className={`self-center text-xs text-[hsl(170,45%,43%)] border-b-2 border-[hsl(170,45%,43%)]`}
            >
              <a href="#">See how Fylo works</a>
            </div>
          </div>
          <div>
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div>
              <img src="" alt="" />
              <div>
                <span>Kyle Burton</span>
                <span>Founder & CEO, Huddle</span>
              </div>
            </div>
          </div>
        </div>

        <div className="order-first mt-14 px-6">
          <img src={img2} alt="" />
        </div>
      </section>

      <section>
        <div>
          <h3>Get early access today</h3>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div>
          <input type="text" />
          <button>Get Started For Free</button>
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
