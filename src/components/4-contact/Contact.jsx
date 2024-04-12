import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import emailAnimation from "../../animation/email.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("mjvnppka");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact Us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "10px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
          {state.succeeded && (
            <p
              className="flex message"
              style={{ fontSize: "18px", marginTop: "1.6rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 55 }}
                animationData={doneAnimation}
              />
              Your Message has been sent successfully 👌
            </p>
          )}
        </form>

        <div className="animation">
          <Lottie
            className="email-animation"
            style={{ height: 500 }}
            animationData={emailAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
