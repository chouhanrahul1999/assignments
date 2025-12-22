import React, { useState } from "react";
import { validation } from "../utils/validation";
import AdopterData from "../../solution/AdopterData";

const PetAdoptionForm = () => {
  const [petData, setPetData] = useState([]);
  const [values, setValue] = useState({
    petName: "",
    petType: "Dog",
    breed: "",
    adoptorName: "",
    email: "",
    phone: "",
  });
  const [showTable, setShowTable] = useState(false);
  const { petName, petType, breed, adoptorName, email, phone } = values;
  console.log(petName, petType, breed, adoptorName, email, phone);
  const [error, setError] = useState({
    petName: "",
    petType: "",
    breed: "",
    adoptorName: "",
    email: "",
    phone: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    let errorsCopy = { ...error };
    const errorR = validation(name, value, errorsCopy);
    setError(errorR);
  };

  const handleSubmit = () => {
    console.log(`
      Pet Name: ${petName}
      Pet Type: ${petType}
      Breed: ${breed}
      Adoptor Name: ${adoptorName}
      Email: ${email}
      Phone: ${phone}`);

    if (!petName || !petType || !breed || !adoptorName || !email || !phone) {
      alert("Please fill out all fields");
      return;
    }

    const hasErrors = Object.values(error).some((value) => value);
    if (hasErrors) {
      alert("Please fill out all fields");
      return;
    }

    const data = { petName, petType, breed, adoptorName, email, phone };
    setPetData((prevData) => [...prevData, data]);
    setShowTable(true);
    setValue({
      petName: "",
      petType: "Dog",
      breed: "",
      adoptorName: "",
      email: "",
      phone: "",
    });
    setError({
      petName: "",
      petType: "",
      breed: "",
      adoptorName: "",
      email: "",
      phone: "",
    });
  };

  const handleGoBack = () => setShowTable(!showTable);

  if (!showTable) {
    return (
      <div className="form">
        <div>
          <label htmlFor="petName">Pet Name</label>
          <input
            type="text"
            name="petName"
            value={petName}
            onChange={handleChange}
          />
          <small>{error.petName}</small>
        </div>
        <div>
          <label htmlFor="petTypes">Pet Types</label>
          <select name="petType" value={petType} onChange={handleChange}>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Bird">Bird</option>
          </select>
        </div>
        <div>
          <label htmlFor="breed">Breed</label>
          <input
            type="text"
            name="breed"
            placeholder="Breed"
            value={breed}
            onChange={handleChange}
          />
          <small>{error.breed}</small>
        </div>
        <div>
          <label htmlFor="adoptorName">Adoptor Name</label>
          <input
            type="text"
            name="adoptorName"
            value={adoptorName}
            placeholder="AdoptorName"
            onChange={handleChange}
          />
          <small>{error.adoptorName}</small>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
          />
          <small>{error.email}</small>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={phone}
            onChange={handleChange}
          />
          <small>{error.phone}</small>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
  return <AdopterData formData={petData} handleGoBack={handleGoBack} />;
};

export default PetAdoptionForm;
