import { useState } from "react";
import React from 'react';
import './Form_1.css';


const Form1 = () => {
  const options = [
    { value: '', text: 'default value'},
    { value: 'New Grad Software Engineer', text: 'New Grad Software Engineer' },
    { value: 'Civil Engineering Intern', text: 'Civil Engineering Intern' },
    { value: 'Software Engineering Manager', text: 'Software Engineering Manager' },
    { value: 'Junior Software Engineer', text: 'Junior Software Engineer' },
    { value: 'Entry Level Embedded Software Engineer', text: 'Entry Level Embedded Software Engineer' }
  ];

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pwd, setPwd] = useState('')
  const [selected, setSelected] = useState(options[0].value);
  const [gender, setGender] = useState('')
  const [tr, setTxtArea] = useState('')

  const submit = e => {
    e.preventDefault()
    console.log(name, email, selected, pwd, gender, tr)
  }


  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  }




  return (
    <div>
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: "100vh", overflow: "hidden" }}>

        <div className="row  neo-form d-flex align-items-center" style={{ height: "60vh", width: "50vh", overflow: "hidden", }} >

          <form onSubmit={submit}>

            <h4 className="form-head text-center">Registration</h4><hr></hr>

            <input
              type="text"
              value={name}
              className="form-control mb-3"
              placeholder="Username"
              onChange={event => setName(event.target.value)}
            />

            <input
              type="email"
              value={email}
              className="form-control mb-3"
              placeholder="email"
              onChange={event => setEmail(event.target.value)}
            />

            <input
              type="password"
              value={pwd}
              className="form-control mt-2 mb-3"
              placeholder="Password"
              onChange={event => setPwd(event.target.value)}
            />

            {/* <select className="form-select" name="designation" required
              aria-label="Default select example"

              

            </select> */}

            <select  className="form-select" name="designation" required value={selected} onChange={event => setSelected(event.target.value)}>
              {options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>

            <div className=" gender mt-3 mb-3"  >
              <label className="form-check-label fw-medium pe-3" >Gender : </label>
              <input className="form-check-input me-1" type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={event => setGender(event.target.value)} id="inlineRadio1" />
              <label className="form-check-label pe-3" >Male</label>

              <input className="form-check-input me-1" type="radio" value="Female" checked={gender === "Female"} onChange={event => setGender(event.target.value)} id="inlineRadio2" />
              <label className="form-check-label" >Female</label>
            </div>

            <div className="form-floating mb-3 ">
              <textarea className="form-control" value={tr} onChange={event => setTxtArea(event.target.value)} placeholder="Leave a comment here"
                name={"textarea"} id="floatingTextarea2Disabled" style={{ height: "100px" }} />
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox"
                onChange={checkboxHandler}
              />
              <label className="form-check-label" >
                Accept Terms & Condition
              </label>
            </div>

            <div className="d-grid gap-2 col-6 mx-auto">
              <button type="submit" disabled={!agree}
                value="Submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div >
  );
}

export default Form1;

