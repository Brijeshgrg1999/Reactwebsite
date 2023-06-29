import React, { useState } from "react";

import cogoToast from "cogo-toast"
import "../App.css";
import axios from 'axios';
import { Link } from "react-router-dom";

function Collab() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email, number);
    try {
      const res = await axios.post("http://localhost:8000/join", {
        name, email, number
      });
      cogoToast.success("Please wait for the conformation")
     
    } catch (error) {
      cogoToast.warn("Please try again ")
     
    }
  }


  return (
    <div className="enrollment">
      <div>
        <h1>Enrollment</h1>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <label>Full Name : </label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />

        <label>Your Email : </label>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
        />

        <label>Phone Number: </label>
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Phone number here..."
          required
        />
        <button className="button" type="submit">submit</button>

      </form>

      <div>
        <div><p>
          We will give you the confirmation via WhatsApp or phone call.
        </p></div>
        <Link to='/'
          style={{
            textDecoration: "none ",
          }}>
          <button style={{
            textDecoration: "none ",
            backgroundColor: "white",
            marginTop: "100px",
            borderRadius: "5px"
          }}> To Home </button>
        </Link>
      </div>
    </div>
  );
}

export default Collab;