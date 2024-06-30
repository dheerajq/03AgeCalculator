import { useState } from "react";
import "./style.css";
const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);
  const [month, setMonth] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const birthDate2 = new Date(birthDate);
    const today = new Date();
    console.log(today.getFullYear());
    let age = today.getFullYear() - birthDate2.getFullYear();
    let monthDifference = today.getMonth() - birthDate2.getMonth();
    setAge(age);
    setMonth(monthDifference);
  };
  return (
    <>
      <div className="container">
        <h1 className="header">Age Calculator</h1>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="ageCal" className="label">
            Enter your date of birth
          </label>
          <input
            type="date"
            placeholder=""
            id="ageCal"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <button type="submit">Calculate Age</button>
        </form>
       {(age!==null && month!==null)&&(
        <h1>
            you are {age} year and {month} months old.
        </h1>
       )}
      </div>
    </>
  );
};

export default AgeCalculator;
