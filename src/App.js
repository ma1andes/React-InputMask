import React from 'react';
import './App.css';
import HeaderForm from './components/HeaderForm/HeaderForm';
import ButtonSend from './components/ButtonSend/ButtonSend';
import InputMask from './components/InputMask/InputMask';
import DataInput from './components/DataInput/DataInput';

function App() {
  return (
    <div className='App'>
      <HeaderForm></HeaderForm>
      <div className='formInput'>
      <DataInput></DataInput>
      <InputMask></InputMask>
      <ButtonSend></ButtonSend>
      </div>
    </div>
  );
}

export default App;
