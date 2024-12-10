import React, { useState } from "react";
import "./App.css";
import HeaderForm from "./components/HeaderForm/HeaderForm";
import ButtonSend from "./components/ButtonSend/ButtonSend";
import PhoneNumberInput from "./components/InputMask/InputMask";
import DataInput from "./components/DataInput/DataInput";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [isPhoneComplete, setIsPhoneComplete] = useState(true);

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.phone &&
    isPhoneComplete;

  const handleDataChange = (updatedData) => {
    setFormData((prevState) => ({
      ...prevState,
      ...updatedData,
    }));
  };

  const handlePhoneChange = (phone, isComplete) => {
    handleDataChange({ phone });
    setIsPhoneComplete(isComplete);
  };

  const handleSubmit = () => {
    console.log("Отправленные данные:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
    });
    setIsPhoneComplete(false); // Устанавливаем значение в true для нового ввода
  };

  return (
    <div className="App">
      <HeaderForm />
      <div className="formInput">
        <DataInput formData={formData} onDataChange={handleDataChange} />
        <PhoneNumberInput phone={formData.phone} onPhoneChange={handlePhoneChange} />
        <ButtonSend onSubmit={handleSubmit} isDisabled={!isFormValid} />
      </div>
    </div>
  );
}

export default App;
