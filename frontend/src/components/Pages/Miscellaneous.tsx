import React from "react";
import questions, { QA } from "../../resources/misc/questions";
import MiscQuestion from "../miscPageComponents/MiscQuestion";
import StyledMiscellaneousPage from "./Miscellaneous.style";

const Miscellaneous: React.FC = () => {
  return (
    <StyledMiscellaneousPage>
      <div className="misc__intro-text-container">
        <h1>Miscellaneous page full of everything</h1>
        <h3>Contact or read questions and answers while you sip your drink</h3>
        <p>
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, officia
          excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem
          pariatur mollit ex esse exercitation amet. Nisi anim cupidatat
          excepteur.
        </p>
      </div>

      <div id="contact" className="misc__contact-container">
        <div className="misc__banner">
          <h3>Contact</h3>
        </div>
        <div className="misc__contact-text-container">
          <h4>
            Questions, ideas, feedback, anything - shoot to this address:{" "}
            <a href="mailto:ville&#64;yritys&#46;com">ville&#64;ville&#46;fi</a>
          </h4>
        </div>
      </div>

      <div id="faq" className="misc__qa-container">
        <div className="misc__banner">
          <h3>FAQ</h3>
        </div>
        {questions.map((qa: QA) => {
          return <MiscQuestion qa={qa} />;
        })}
      </div>
    </StyledMiscellaneousPage>
  );
};

export default Miscellaneous;
