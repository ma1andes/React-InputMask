import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styles from './DataInput.module.css';

function MultipleInputsExample({ formData, onDataChange }) {
  const handleInputChange = (field, value) => {
      if (/^[a-zA-Zа-яА-ЯёЁ\s]*$/.test(value) || value === "") {
          onDataChange({ [field]: value });
      }
  };

  return (
      <div className={styles.dataInput}>
          <InputGroup className="mb-3">
              <InputGroup.Text className={styles.text}>Введите Имя и Фамилию</InputGroup.Text>
              <Form.Control
                  placeholder="Имя"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
              <Form.Control
                  placeholder="Фамилия"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
          </InputGroup>
      </div>
  );
}


export default MultipleInputsExample;
