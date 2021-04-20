import React, { useState, useRef } from 'react';
import './HomePage.css';
import { RADIO_BUTTON_POP, ERROR_TEXT } from '../../utils/Constants';
import { push, pop } from '../../utils/Utility';
import { RadioButtons } from '../../components/radio-buttons/RadioButtons';
import { InputPushAndPopButtons } from '../../components/push-and-pop-buttons/InputPushAndPopButtons';
import { Output } from '../../components/output/Output';
import { Title } from '../../components/title/Title';

// Implement the way i compare objects
export const compare = (insertElement, arrayElement) => {
  if (parseInt(insertElement) > parseInt(arrayElement)) {
    return true;
  }
  return false;
};

export const HomePage = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [radioButtonValue, setRadioButtonValue] = useState(RADIO_BUTTON_POP);
  const [errorText, setErrorText] = useState(false);
  const popClassArray = useRef([]);
  const pushClassArray = useRef([]);
  const popClassCounter = useRef(0);

  const pushClicked = () => {
    // Check input is not empty and contain number
    if (input !== '' && /^\d+$/.test(input)) {
      setInput('');
      push(input, radioButtonValue, compare, popClassArray, pushClassArray);
      setErrorText(false);
    } else {
      setErrorText(true);
    }
  };

  const popClicked = () => {
    setOutput(
      pop(
        radioButtonValue,
        compare,
        popClassArray,
        pushClassArray,
        popClassCounter
      )
    );
  };

  return (
    <div id='home-wrapper'>
      <Title />
      <RadioButtons
        radioButtonValue={radioButtonValue}
        setRadioButtonValue={setRadioButtonValue}
      />
      <InputPushAndPopButtons
        input={input}
        setInput={setInput}
        pushClicked={pushClicked}
        popClicked={popClicked}
      />
      <Output output={output} />
      {errorText ? <div id='error'>{ERROR_TEXT}</div> : null}
    </div>
  );
};
