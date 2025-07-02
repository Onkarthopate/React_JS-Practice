// FloatingMenu.js
import ReactDOM from 'react-dom';
import './FlotingMenu.css';

const FloatingMenu = ({ position, children }) => {
  return ReactDOM.createPortal(
    <div className="floating-menu" style={position}>
      {children}
    </div>,
    document.getElementById('menu-root')
  );
};

export default FloatingMenu;

