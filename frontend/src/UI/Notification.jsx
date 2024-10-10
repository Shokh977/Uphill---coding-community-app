// import React,{ useState } from 'react';

// const Notification = ({ message, type, onClose }) => {
//   return (
//     <div className={`p-4 mb-4 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
//       <span>{message}</span>
//       <button onClick={onClose} className="ml-4">Close</button>
//     </div>
//   );
// };

// export const NotificationSystem = () => {
//   const [notification, setNotification] = useState(null);

//   const showNotification = (message, type) => {
//     setNotification({ message, type });
//     setTimeout(() => setNotification(null), 3000);
//   };

//   return (
//     <div>
//       {notification && (
//         <Notification
//           message={notification.message}
//           type={notification.type}
//           onClose={() => setNotification(null)}
//         />
//       )}
//       <button onClick={() => showNotification('Action Successful!', 'success')} className="bg-green-500 p-2">
//         Show Success
//       </button>
//       <button onClick={() => showNotification('An Error Occurred!', 'error')} className="bg-red-500 p-2 ml-2">
//         Show Error
//       </button>
//     </div>
//   );
// };
