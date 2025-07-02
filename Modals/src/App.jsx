// // App.js
// import { useState } from 'react';
// import Modal from './Modal';
// import './App.css'
// function App() {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <div>
//       <h1>React Modal with Portal</h1>
//       <button onClick={() => setShowModal(true)}>Open Modal</button>

//       {showModal && (
//         <Modal onClose={() => setShowModal(false)}>
//           <h2>Hello from the modal!</h2>
//           <p>This modal is rendered using a React Portal.</p>
//         </Modal>
//       )}
//     </div>
//   );
// }

// export default App;



// App.js
// import { useState, useRef } from 'react';
// import Tooltip from './Tooltip';

// function App() {
//   const [tooltip, setTooltip] = useState(null);
//   const buttonRef = useRef();

//   const handleMouseEnter = () => {
//     const rect = buttonRef.current.getBoundingClientRect();
//     setTooltip({
//       text: 'Click me to do something!',
//       position: {
//         top: rect.top - 30,
//         left: rect.left + rect.width / 2
//       }
//     });
//   };

//   const handleMouseLeave = () => {
//     setTooltip(null);
//   };

//   return (
//     <div style={{ padding: '100px' }}>
//       <button
//         ref={buttonRef}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         Hover me
//       </button>

//       {tooltip && <Tooltip text={tooltip.text} position={tooltip.position} />}
//     </div>
//   );
// }

// export default App;


// App.js
// import { useRef, useState, useEffect } from 'react';
// import Popup from './PopUp';

// function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [popupPos, setPopupPos] = useState({ top: 0, left: 0 });
//   const btnRef = useRef();

//   const handleClick = () => {
//     const rect = btnRef.current.getBoundingClientRect();
//     setPopupPos({
//       top: rect.bottom + 5,
//       left: rect.left
//     });
//     setIsOpen(!isOpen);
//   };

//   // Close on outside click
//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       if (!btnRef.current.contains(e.target)) {
//         setIsOpen(false);
//       }
//     };
//     if (isOpen) {
//       document.addEventListener('mousedown', handleOutsideClick);
//     }
//     return () => document.removeEventListener('mousedown', handleOutsideClick);
//   }, [isOpen]);

//   return (
//     <div style={{ padding: '100px' }}>
//       <button ref={btnRef} onClick={handleClick}>
//         Toggle Popup
//       </button>

//       {isOpen && (
//         <Popup position={popupPos}>
//           <p>This is a popup rendered with a React Portal!</p>
//           <button onClick={() => alert('Clicked inside popup')}>Click Me</button>
//         </Popup>
//       )}
//     </div>
//   );
// }

// export default App;



// App.js
import { useState, useRef, useEffect } from 'react';
import FloatingMenu from './FlotingMenu/FlotingMenu';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  const btnRef = useRef();

  const toggleMenu = () => {
    const rect = btnRef.current.getBoundingClientRect();
    setMenuPos({
      top: rect.bottom + 5,
      left: rect.left,
    });
    setShowMenu(!showMenu);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!btnRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMenu]);

  return (
    <div style={{ padding: '100px' }}>
      <button ref={btnRef} onClick={toggleMenu}>
        Open Menu
      </button>

      {showMenu && (
        <FloatingMenu position={menuPos}>
          <div className="floating-menu-item" onClick={() => alert('Profile')}>
            👤 Profile
          </div>
          <div className="floating-menu-item" onClick={() => alert('Settings')}>
            ⚙️ Settings
          </div>
          <div className="floating-menu-item" onClick={() => alert('Logout')}>
            🚪 Logout
          </div>
        </FloatingMenu>
      )}
    </div>
  );
}

export default App;
