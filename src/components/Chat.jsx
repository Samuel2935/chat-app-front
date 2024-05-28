// // src/Chat.js
// import { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:3000');

// const Chat = () => {
//     const [messages, setMessages] = useState([]);
//     const [message, setMessage] = useState('');

//     useEffect(() => {
//         socket.on('receiveMessage', (message) => {
//             setMessages([...messages, message]);
//         });

//         return () => {
//             socket.off('receiveMessage');
//         };
//     }, [messages]);

//     const sendMessage = () => {
//         socket.emit('sendMessage', message);
//         setMessage('');
//     };

//     return (
//         <div>
//             <div>
//                 {messages.map((msg, index) => (
//                     <div key={index}>{msg}</div>
//                 ))}
//             </div>
//             <input 
//                 value={message} 
//                 onChange={(e) => setMessage(e.target.value)} 
//                 onClick={(e) => e.key === 'Enter' ? sendMessage() : null}
//             />
//             <button onClick={sendMessage}>Send</button>
//         </div>
//     );
// };

// export default Chat;
