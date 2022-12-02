import React, { useState } from "react";
import "./ContactUs.css";
const ContactUs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
    // event.preventDefault();
  };
  console.log(user);
  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, address, message } = user;

    if (name && email && phone && address && message) {
      const response = await fetch(
        "https://formsubmit-c2da8-default-rtdb.firebaseio.com/formsubmit.json",
        {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            address,
            message,
          }),
        }
      );
      if (response) {
        setUser({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });
        alert("Data Stored Successfully");
      }
    } else {
      alert("Plz fill the all the data");
    }
  };
  return (
    <div className="mainContainer">
      <div className="container">
        <div>
          <form method="POST">
            <h3 className="contact">Contact us</h3>
            <div className="field">
              <div className="main">
                <span> Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={getUserData}
                  placeholder="Enter your name"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="main">
                <span>Email</span>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={getUserData}
                  placeholder="Enter your email"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className="field">
              <div className="main">
                <span>Mobile Number</span>
                <input
                  type="number"
                  name="phone"
                  value={user.phone}
                  onChange={getUserData}
                  placeholder="Enter your mobile number"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="main">
                <span>Address</span>
                <input
                  type="text"
                  name="address"
                  value={user.address}
                  onChange={getUserData}
                  placeholder="Enter your address"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className="field">
              <div className="main">
                <span>Message</span>
                <input
                  type="text"
                  name="message"
                  value={user.message}
                  onChange={getUserData}
                  placeholder="Enter message here"
                  autoComplete=""
                  required
                />
              </div>
            </div>
            <button onClick={postData}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
// import "./styles.css";
// import { useState } from "react";

// export default function App() {
//   const [dob, setDob] = useState({
//     day:"",
//     month:"",
//     year:"",
//   });
//   // const [print, setprint] = useState(false);
// let day ,month, year;
//   function getdata(e) {
//     day=e.target.day
//     month=e.target.month
//     year=e.target.year
//     setDob({...dob, [day]:value});
//     // setprint(false);
//   }
//   console.log(dob);

//   return (
//     <div className="App">
//       {print ? <h1>{dob}</h1> : null} <input type="date" onChange={getdata} />
//     </div>
//   );
// }
