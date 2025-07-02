// Popup.js
import ReactDOM from 'react-dom';
import './Popup.css';

const Popup = ({ children, position }) => {
  return ReactDOM.createPortal(
    <div className="popup" style={position}>
      {children}
    </div>,
    document.getElementById('popup-root')
  );
};

export default Popup;
