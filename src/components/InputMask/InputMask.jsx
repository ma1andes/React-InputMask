import React, { useState } from "react";
import InputMask from "react-input-mask";
import styles from './InputMask.module.css'

const PhoneNumberInput = () => {
  const [country, setCountry] = useState("RU"); // Текущая страна
  const [phone, setPhone] = useState(""); // Введённый номер телефона

  // Маски для России и Казахстана
  const masks = {
    RU: "+7 (999) 999-99-99",
    KZ: "+7 (799) 999-99-99", // Экранирование символов для предотвращения автоматического заполнения
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value); // Меняем страну
    setPhone(""); // Очищаем ввод
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value); // Обновляем состояние номера
  };

  return (
    <div className={styles.InputWrapper}>
      <label className={styles.inputText}>
        Выберите страну:
        <select
          value={country}
          onChange={handleCountryChange}
        >
          <option value="RU">Россия</option>
          <option value="KZ">Казахстан</option>
        </select>
      </label>

      {/* Маска для ввода номера */}
      <InputMask
        mask={masks[country]}
        value={phone}
        onChange={handlePhoneChange}
        placeholder="Введите номер телефона"
        maskChar={null} // Отключает автозаполнение символами
        alwaysShowMask={true} // Не показывать маску до ввода
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
