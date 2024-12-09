import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styles from './DataInput.module.css'

function MultipleInputsExample() {
  return (
    <div className={styles.dataInput}>
        <InputGroup className="mb-3">
        <InputGroup.Text>Введите Имя и Фамилию</InputGroup.Text>
        <Form.Control placeholder='Имя' />
        <Form.Control placeholder='Фамилия' />
        </InputGroup>
    </div>
  );
}

export default MultipleInputsExample