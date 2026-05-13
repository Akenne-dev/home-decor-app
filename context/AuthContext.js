import { createContext, useState } from "react";
import * as SecureStore from "expo-secure-store";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signup = async (data) => {
        try {
            await SecureStore.setItemAsync(
                "user",
                JSON.stringify(data)
            );

            console.log("User saved:", data);

            return true;
        } catch (error) {
            console.log("Signup error:", error);
            return false;
        }
    };

    const login = async (email, password) => {
        try {
            const savedUser = await SecureStore.getItemAsync("user");

            console.log("Saved user:", savedUser);

            if (!savedUser) {
                return false;
            }

            const parsedUser = JSON.parse(savedUser);

            console.log("Parsed user:", parsedUser);
            console.log("Email entered:", email);
            console.log("Password entered:", password);

            if (
                parsedUser.email === email &&
                parsedUser.password === password
            ) {
                setUser(parsedUser);

                console.log("Login successful");

                return true;
            }

            console.log("Invalid login details");

            return false;
        } catch (error) {
            console.log("Login error:", error);
            return false;
        }
    };

    const logout = async () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                signup,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};









// import { createContext, useState, useEffect } from 'react';
// import * as SecureStore from 'expo-secure-store';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const loadUser = async () => {
//             const savedUser = await SecureStore.getItemAsync('user');
//             if (savedUser) {
//                 setUser(JSON.parse(savedUser));
//             }
//         };
//         loadUser();
//     }, []);

//     // for SIGN UP 1
//     const signup = async (data) => {
//         await SecureStore.setItemAsync('user', JSON.stringify(data));
//         setUser(data);
//     };

//     // for LOGIN 2
//     const login = async (email, password) => {
//         const savedUser = await SecureStore.getItemAsync('user');

//         if (savedUser) {
//             const userData = JSON.parse(savedUser);

//             if (
//                 userData.Email === email &&
//                 userData.Password === password
//             ) {
//                 setUser(userData);
//                 return true;
//             }
//         }

//         return false;
//     };

// // for log out
//     const logout = async () => {
//         await SecureStore.deleteItemAsync('user');
//         setUser(null);
//     };

//     return (
//         <AuthContext.Provider value={{ user, signup, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };