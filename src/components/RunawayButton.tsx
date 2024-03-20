import React, { CSSProperties, useState } from 'react';
import './buttons.scss';

const RunawayButton: React.FC = () => {
    const [style, setStyle] = useState<CSSProperties>({ position: 'absolute' });

    const handleMouseEnter = () => {
        const x = Math.random() * (window.innerWidth - 200);
        const y = Math.random() * (window.innerHeight - 50);

        setStyle({
            position: 'absolute',
            left: `${x}px`,
            top: `${y}px`,
        });
    };

    return (
        <button
            tabIndex={-1}
            style={style}
						onMouseEnter={handleMouseEnter}
						className="btn btn--red runaway-btn"
        >
            Нет
        </button>
    );
};

export default RunawayButton;