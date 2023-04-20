import React from 'react'
// import { encrypt, decrypt } from 'crypto-js';

// export const cryptCredentials = () => {
//      const encryptCredentials = (username: string, password: string) => {
//         const encrypted = encrypt(`${username}:${password}`, 'my-secret-key');
//         return encrypted.toString();
//       };

//       const decryptCredentials = (encryptedCredentials: string) => {
//         const decrypted = decrypt(encryptedCredentials, 'my-secret-key');
//         const [username, password] = decrypted.toString().split(':');
//         return { username, password };
//       };

//       const saveCredentials = (username: string, password: string) => {
//         const encryptedCredentials = encryptCredentials(username, password);
//         localStorage.setItem('credentials', encryptedCredentials);
//       };

//       const getCredentials = () => {
//         const encryptedCredentials = localStorage.getItem('credentials');
//         if (encryptedCredentials) {
//           return decryptCredentials(encryptedCredentials);
//         }
//         return null;
//       };
// }
