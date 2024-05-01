// import React from 'react';

// const Ml = () => {
//     const handleSubmit = () => {
//         window.location.href = '  https://de9a-103-106-138-141.ngrok-free.app';
//     };

//     return (
//         <div>
//             <button
//                 type="submit"
//                 className="button col-span-2 w-full"
//                 onClick={handleSubmit}
//             >
//                 Upload ECG
//             </button>
//         </div>
//     );
// };

// export default Ml;
import React from 'react';

const Ml = () => {
    const handleSubmit = () => {
        window.location.href = 'https://d7fd-2401-4900-57e0-4633-5868-ac24-6f4a-2796.ngrok-free.app/upload';
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh',marginBottom:'50px' }}>
            <button
                type="submit"
                style={{
                    padding: '10px 20px',
                    marginBottom:'10px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: 'white',
                    backgroundColor: '#4CAF50',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                }}
                onClick={handleSubmit}
            >
                Upload ECG
            </button>
        </div>
    );
};

export default Ml;

