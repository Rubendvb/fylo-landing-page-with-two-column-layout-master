import "./assets/styles/main.css";
import logoImg from "./assets/images/logo.svg";
import img1 from "./assets/images/illustration-1.svg";
import { ListaHeader } from "./assets/components/ListaHeader/ListaHeader";
import { Titulo } from "./assets/components/Titulo/Titulo";
import { Paragrafo } from "./assets/components/Paragrafo/Paragrafo";
import { Form } from "./assets/components/Form/Form";

function App() {
  return (
    <>
      <header className="flex justify-between">
        <img className="w-36 h-12" src={logoImg} alt="" />

        <ul className="flex items-center">
          <ListaHeader text={"Features"} />
          <ListaHeader text={"Team"} />
          <ListaHeader text={"Sign In"} />
        </ul>
      </header>

      <section className="flex flex-col">
        <div>
          <Titulo
            title={
              "All your files in one secure location, accessible anywhere."
            }
          />

          <Paragrafo
            paragrafo={
              "Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers."
            }
          />

          <Form textButton={"Get Started"} />
        </div>

        <div className="order-first max-w-full mt-36">
          <img src={img1} alt="" />
        </div>
      </section>

      <section>
        <div>
          <div>
            <h2>Stay productive, wherever you are</h2>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
            <a href="#">See how Fylo works</a>
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
        <div>
          <img src="" alt="" />
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
