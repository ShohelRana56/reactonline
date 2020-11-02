import React from "react";
import { useState } from "react";

const Contact = () => {
  const [data, setdata] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setdata((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome Mr. ${data.fullname}`);
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact US</h1>
      </div>
      <div className="container contact_div mb-5">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3 form-group">
                <label htmlFor="exampleInputEmail1">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                />
              </div>
              <div className="mb-3 form-group">
                <label htmlFor="exampleInputEmail1">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter your mobile number"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                />
              </div>
              <div className="mb-3 form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                />
              </div>

              <div className="mb-3 form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={inputEvent}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary btn-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
