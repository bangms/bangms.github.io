import React, { useState, useEffect } from 'react';
import ReactTyped from 'react-typed';
import { useNavigate, Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  const [typingCompleted, setTypingCompleted] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    if (typingCompleted) {
      const timer = setTimeout(() => {
        setShowArrow(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [typingCompleted]);

  return (
    <>
      <div className="container">
        <div className="copy-container center-xy">
          <ReactTyped
            className="text"
            typeSpeed={100}
            strings={['404, page not found.']}
            loop={false}
            smartBackspace={false}
            showCursor
            cursorChar="|"
            onComplete={() => setTypingCompleted(true)}
          />
        </div>
        {showArrow && ( // showArrow가 true일 때만 .arrow를 렌더링
          <div className="arrow">
            <Link to="/" className="arrow-link">
              <div className="arrow-top"></div>
              <div className="arrow-bottom"></div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
export default NotFound;
