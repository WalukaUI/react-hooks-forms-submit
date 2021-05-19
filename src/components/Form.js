import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  //controlled form submittion

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const formData = {
  //     firstName: firstName,
  //     lastName: lastName,
  //   };
  //   props.sendFormDataSomewhere(formData);
  //   setFirstName("");
  //   setLastName("");
  // }

  //uncontrolled form submittion

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   // in an uncontrolled form, you need to access the input fields from the DOM
  //   const formData = {
  //     firstName: e.target[0].value,
  //     lastName: e.target[1].value,
  //   };
  //   props.sendFormDataSomewhere(formData);
  // } 

  //list out submissions //controlled 

  function handleSubmit(event) {
    event.preventDefault();
    setErrors([])
    if (firstName&&lastName) {
      const formData = { firstName: firstName, lastName: lastName };
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
    } else {
      setErrors(["Please fill both name fields!"]);
    }
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  const displayError=errors.map((error, index) => (
    <p key={index} style={{ color: "red" }}>
      {error}
    </p>
  ))
  return (<div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>

    {/* conditionally render error messages */}
    {errors.length > 0? displayError: null}

    <h3>Submissions</h3>
    {listOfSubmissions}
  </div>
  );
}

export default Form;
