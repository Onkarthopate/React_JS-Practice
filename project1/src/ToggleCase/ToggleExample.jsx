import React, { useState, useEffect } from 'react';

function ToggleExample() {
    const [isActive, setIsActive] = useState(true);

    const toggle = () => {
        setIsActive(!isActive);
    };

    // Effect to update the body background color whenever isActive changes
    useEffect(() => {
        if (isActive) {
           document.body.style.backgroundColor = '#ffffff'; // Light background
            document.body.style.color = '#000000'; // Dark text
        } else {
           
              document.body.style.backgroundColor = '#121212'; // Dark background
            document.body.style.color = '#ffffff'; // Light text
        }
    }, [isActive]);

    return (
        <div>
            <button onClick={toggle} style={{ fontSize: '24px', cursor: 'pointer' }}>
                {isActive ? (
                    <i className="bi bi-moon-stars-fill"></i>

                ) : (
                    <i className="bi bi-brightness-high"></i>
                )}
            </button>
        </div>
    );
}

export default ToggleExample;
