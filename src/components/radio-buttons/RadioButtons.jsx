import './RadioButtons.css';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import {
  RADIO_BUTTON_POP,
  RADIO_BUTTON_PUSH,
  RADIO_BUTTON_POP_TITLE,
  RADIO_BUTTON_PUSH_TITLE,
} from '../../utils/Constants';

const useStyles = makeStyles(() => ({
  label: {
    backgroundColor: 'yellow',
    '& .MuiSvgIcon-root': {
      fontSize: '3vw',
    },
  },
}));

export const RadioButtons = (props) => {
  const classes = useStyles();
  const handleChange = (event) => {
    props.setRadioButtonValue(event.target.value);
  };

  const createRadioButton = (value) => {
    return (
      <Radio
        classes={{
          root: classes.label,
        }}
        checked={props.radioButtonValue === value}
        onChange={handleChange}
        type='radio'
        name='classSelect'
        value={value}
        style={{ backgroundColor: 'white' }}
      />
    );
  };

  return (
    <div id='radio-buttons-wrapper'>
      <div id='radio-button-wrapper'>
        <div id='radio-title'>{RADIO_BUTTON_POP_TITLE}</div>
        {createRadioButton(RADIO_BUTTON_POP)}
      </div>
      <div id='radio-button-wrapper'>
        <div id='radio-title'>{RADIO_BUTTON_PUSH_TITLE}</div>
        {createRadioButton(RADIO_BUTTON_PUSH)}
      </div>
    </div>
  );
};
