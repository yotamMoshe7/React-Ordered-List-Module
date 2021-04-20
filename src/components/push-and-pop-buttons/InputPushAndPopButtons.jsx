import './InputPushAndPopButtons.css';
import { INPUT_PLACEHOLDER } from '../../utils/Constants';

export const InputPushAndPopButtons = (props) => {
  return (
    <div id='input-buttons-wrapper'>
      <div id='input-wrapper'>
        <input
          placeholder={INPUT_PLACEHOLDER}
          type='text'
          id='input'
          value={props.input}
          onChange={(event) => props.setInput(event.target.value)}
        />
      </div>
      <div id='button-wrapper'>
        <button id='button' onClick={props.pushClicked}>
          Push
        </button>
      </div>
      <div id='button-wrapper'>
        <button id='button' onClick={props.popClicked}>
          Pop
        </button>
      </div>
    </div>
  );
};
