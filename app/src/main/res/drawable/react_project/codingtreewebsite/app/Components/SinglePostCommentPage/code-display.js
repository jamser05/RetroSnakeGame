import React, { useState } from 'react';
import Clipboard from 'clipboard';
import copyIcon from '../../../ImageForReddit/icon-clipboard.png'; // Import copy icon image
import checkIcon from '../../../ImageForReddit/icon-check.png'; // Import check icon image
import darkModeIcon from '../../../ImageForReddit/icon-dark-mode.png'; // Import dark mode icon image
import lightModeIcon from '../../../ImageForReddit/icon-light-mode.png'; // Import light mode icon image
import Image from 'next/image';
import './code-display.css';

export default function CodeDisplay({ code_snippet }) {
    const [copied, setCopied] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const copyCodeToClipboard = () => {
        const code = code_snippet.code_visualization;
        navigator.clipboard.writeText(code)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => console.error('Failed to copy: ', err));
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className='code-container'>
            <div className="top-bar">
                <p>Kotlin</p>
                <button className="toggle-mode" onClick={toggleDarkMode}>
                    {isDarkMode}
                    <Image src={isDarkMode ? lightModeIcon : darkModeIcon} alt="Mode" className="mode-icon" />
                </button>
                <button id="copyButton" className="copy-button code-display-button" onClick={copyCodeToClipboard}>
                    {!copied ? (
                        <Image src={copyIcon} alt="Copy" className="icon" />
                    ) : (
                        <Image src={checkIcon} alt="Copied" className="icon" />
                    )}
                    {!copied ? 'Copy Code' : 'Copied'}
                </button>
            </div>
            <div className={`code-display-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                <pre>
                    <code className="code-style">
                        <p>{code_snippet.code_visualization}</p>
                    </code>
                </pre>
            </div>
        </div>
    );
}
