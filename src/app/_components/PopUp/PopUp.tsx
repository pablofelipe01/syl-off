import React from 'react'

const PopUp: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <img src="/kyc.png" alt="KYC Image" style={{ maxWidth: '100%', height: 'auto' }} />
        <button onClick={onClose} style={{ marginTop: '20px' }}>
          Close
        </button>
      </div>
      <style jsx>{`
        .popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .popup-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          max-width: 80%;
        }
        button {
          background: #f44336;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background: #d32f2f;
        }
      `}</style>
    </div>
  )
}

export default PopUp
