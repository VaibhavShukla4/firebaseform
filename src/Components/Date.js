import React from "react";
import { format } from "date-fns";
import { useState } from "react";
const Date = () => {
  const [dob, setDob] = useState({
    day: "",
    month: "",
    year: "",
  });
  let day, month, year, value;
  function getdata(e) {
    day = e.target.value;
    month = e.target.value;
    year = e.target.value;
    setDob({ ...dob, [day]: value });
  }
  console.log(dob);
  return (
    <div>
      {/* <h1>{dob}</h1> */}
      <input type="date" value={dob} format="DD-MM-YYYY" onChange={getdata} />
    </div>
  );
};

export default Date;
