import './Output.css';

export const Output = (props) => {
  return (
    <div id='output-wrapper'>
      <div id='output-title'>Output</div>
      <div id='output'>{props.output}</div>
    </div>
  );
};
