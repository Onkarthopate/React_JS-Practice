// Tooltip.js
import ReactDOM from 'react-dom';
import './tooltip.css';

const Tooltip = ({ text, position = { top: 0, left: 0 } }) => {
  return ReactDOM.createPortal(
    <div className="tooltip" style={position}>
      {text}
    </div>,
    document.getElementById('tooltip-root')
  );
};

export default Tooltip;
