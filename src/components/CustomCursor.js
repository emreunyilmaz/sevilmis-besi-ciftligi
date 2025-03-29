import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const onMouseMove = (e) => {
            requestAnimationFrame(() => {
                setPosition({ x: e.clientX, y: e.clientY });
            });
        };

        const onMouseOver = (e) => {
            const target = e.target;
            setIsPointer(
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button')
            );
        };

        window.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', onMouseOver);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseOver);
        };
    }, []);

    return (
        <>
            <style>
                {`
                    @media (hover: hover) and (pointer: fine) {
                        * {
                            cursor: none !important;
                        }
                    }
                    
                    .custom-cursor {
                        display: none;
                        pointer-events: none;
                        position: fixed;
                        z-index: 9999;
                        mix-blend-mode: difference;
                    }
                    
                    @media (hover: hover) and (pointer: fine) {
                        .custom-cursor {
                            display: block;
                        }
                    }
                    
                    .cursor-dot {
                        width: 6px;
                        height: 6px;
                        background-color: white;
                        border-radius: 50%;
                        transition: transform 0.1s ease;
                    }
                    
                    .cursor-outline {
                        width: 25px;
                        height: 25px;
                        background-color: transparent;
                        border: 1.5px solid white;
                        border-radius: 50%;
                        transition: transform 0.2s ease, width 0.2s ease, height 0.2s ease;
                    }
                    
                    .cursor-pointer {
                        width: 30px;
                        height: 30px;
                        transform: translate(-50%, -50%) scale(1.2);
                        background-color: rgba(255, 255, 255, 0.1);
                    }
                `}
            </style>
            <div
                className="custom-cursor cursor-dot"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)'
                }}
            />
            <div
                className={`custom-cursor cursor-outline ${isPointer ? 'cursor-pointer' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)'
                }}
            />
        </>
    );
} 