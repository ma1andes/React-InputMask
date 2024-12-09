import React, { useState } from 'react';
import './App.css';
import HeaderForm from './components/HeaderForm/HeaderForm';
import ButtonSend from './components/ButtonSend/ButtonSend';
import PhoneNumberInput from './components/InputMask/InputMask';
import DataInput from './components/DataInput/DataInput';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [isPhoneComplete, setIsPhoneComplete] = useState(false); // Статус заполнения номера

  // Проверяем, что все поля формы заполнены
  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.phone &&
    isPhoneComplete;

  // Обновляем данные формы
  const handleDataChange = (updatedData) => {
    setFormData((prevState) => ({
      ...prevState,
      ...updatedData,
    }));
  };

  // Обновляем данные номера телефона и его статус
  const handlePhoneChange = (phone, isComplete) => {
    handleDataChange({ phone });
    setIsPhoneComplete(isComplete); // Обновляем статус валидности номера
  };

  // Обработка отправки формы
  const handleSubmit = () => {
    console.log('Отправленные данные:', formData);
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
    });
    setIsPhoneComplete(false); // Сбрасываем состояние валидности номера
  };

  return (
    <div className='App'>
      <HeaderForm />
      <div className='formInput'>
        <DataInput 
          formData={formData}
          onDataChange={handleDataChange} 
        />
        <PhoneNumberInput 
          phone={formData.phone}
          onPhoneChange={handlePhoneChange}
        />
        <ButtonSend 
          onSubmit={handleSubmit} 
          isDisabled={!isFormValid} 
        />
      </div>
    </div>
  );
}

export default App;
