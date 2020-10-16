import React from "react";
import "../styles/form.scss";
const Form = ({}) => (
  <div className="contentForm">
    <div className="title">
      <h2>Schedule your appointment</h2>
    </div>
    <form>
      <div className="colTwo">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input type="text" id="phone" name="phone" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="checkInput">
        <span>
          <div class="round">
            <input type="checkbox" id="checkbox" />
            <label for="checkbox"></label>
          </div>

          <p>
            He leído y acepto el{" "}
            <a className="noticePrivacy" href="#open-modal">
              Aviso de privacidad
            </a>
          </p>
        </span>
      </div>
      <div className="contentButton">
        <button>SEND</button>
      </div>
    </form>
  </div>
);

Form.defaultProps = {};

export default Form;
