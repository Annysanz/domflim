import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div classNameName="contact">
        <div className="col-md-7">
                <h1>Contáctanos</h1>
                <br></br>
                <form>
                    <div className=""> 
                    <label for="" className="">Nombre </label>
                      <br></br><br></br>
                    <input type="text" className="" placeholder="Your name"/> 
                      <br></br> <br></br>
                    <label for="" className=""> Email</label>
                      <br></br><br></br>
                    <input type="email" className="" placeholder="Your email"/> 
                      <br></br> <br></br>
                    <label for="" className=""> Mensaje </label>
                      <br></br><br></br>
                    <textarea cols="31" rows="8" placeholder="Escribe tu mensaje"> </textarea>
                      <br></br><br></br>
                    <input type="submit" value="Enviar" className="btn btn-block btn-primary"/>
                      </div>
                </form>
       </div>
    </div>
  );
};

export default Contact;
