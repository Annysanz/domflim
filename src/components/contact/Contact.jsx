import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h1> Contacto</h1>
        <form>
  <label>
    Nombre:
    <input type="text" name="name"/>
  </label>
  <label>
    Apellido:
    <input type="text" name="apellido"/>
  </label>
  <br></br>
  <input type="submit" value="Enviar" />
</form>
      <br></br>
      <h4>
      <textarea>
  Hello there, this is some text in a text area
</textarea>
      </h4>
    </div>
  );
};

export default Contact;
