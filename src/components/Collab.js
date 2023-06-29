import React, { useState } from "react";
import cogoToast from "cogo-toast"
import "../App.css";

function Collab() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault() ; 
    try{
      const res = await fetch("http://localhost:8080/collab",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        } , 
        body: JSON.stringify(formData) 

      }) ; 
      const data = await res.json() ; 
      setFormData({ name: "", email: "", message: "" });
      cogoToast.success("you message is succesfully sent ")

    }catch(err)
    {
    
      console.error("failed" , err) ; 
    }
   
  };

  return (
    <div className="collab">
          <div style={{alignItems:"center"}}>
          
            <h1 style={{textAlign:"left", marginLeft:"10px"}}>
              WHY <br/>
              DONT <br/>
              WE<br/>
              WORK <br/>
              TOGETHER 
            </h1>

          </div>
          
              <form onSubmit={handleSubmit}>
              <label>Full Name : </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="name"
              />

              <label>Your Email : </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email"
              />

              <label>Your Message :</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                cols="40"
                placeholder="Enter your message here..."
              />
              <button className="button" type="submit">submit</button>
            </form>
    </div>
  );
}

export default Collab;