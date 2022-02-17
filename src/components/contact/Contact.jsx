import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
        <div class="col-md-7">
                <h1>Contáctanos</h1>
                <br></br>
                <form>
                    <div class=""> 
                    <label for="" class="">Nombre </label>
                      <br></br><br></br>
                    <input type="text" class="" placeholder="Your name"/> 
                      <br></br> <br></br>
                    <label for="" class=""> Email</label>
                      <br></br><br></br>
                    <input type="email" class="" placeholder="Your email"/> 
                      <br></br> <br></br>
                    <label for="" class=""> Mensaje </label>
                      <br></br><br></br>
                    <textarea cols="31" rows="8" placeholder="Escribe tu mensaje"> </textarea>
                      <br></br><br></br>
                    <input type="submit" value="Enviar" class="btn btn-block btn-primary"/>
                      </div>
                </form>
       </div>
    </div>
  );
};

export default Contact;
