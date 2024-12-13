import React, { useState } from "react";
import InputMask from "react-input-mask";
import styles from './InputMask.module.css'

const PhoneNumberInput = ({ phone, onPhoneChange }) => {
  const [country, setCountry] = useState("RU");

  const masks = {
    RU: "+7 (999) 999-99-99",
    KZ: "+7 (799) 999-99-99",
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    onPhoneChange(""); // Очищаем номер телефона при смене страны
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    const isComplete = !value.includes("_"); // Проверка на полное заполнение маски
    onPhoneChange(value, isComplete); // Передаём номер и его валидность
  };

  return (
    <div className={styles.InputWrapper}>
      <label className={styles.inputText}>
        Выберите страну:
        <select
          className={styles.selectCountry}
          value={country}
          onChange={handleCountryChange}
        >
          <option value="RU">Россия</option>
          <option value="KZ">Казахстан</option>
        </select>
      </label>
      <InputMask
        mask={masks[country]}
        value={phone}
        onChange={handlePhoneChange}
        placeholder="Введите номер телефона"
        maskChar="_"
        alwaysShowMask={true}
      >
        {(inputProps) => (
          <input
            {...inputProps}
            type="tel"
            aria-label={`Введите номер телефона (${masks[country]})`}
          />
        )}
      </InputMask>
      <p className={styles.formatNumber}>
        Формат номера: {masks[country]}
      </p>
    </div>
  );
};

export default PhoneNumberInput;
