// ProfileDetailsContext.js
import React, { createContext, useState, useContext } from 'react';

const DrawerContext = createContext();

export const useDrawerContext = () => {
    const context = useContext(DrawerContext);
    if (!context) {
        throw new Error('useDrawerContext must be used within a DrawerProvider');
    }
    return context; // Make sure it returns both state and setter function
};

export const DrawerProvider = ({ children }) => {
    const [showDrawer, setshowDrawer] = useState(false);

    return (
        <DrawerContext.Provider value={[showDrawer, setshowDrawer]}>
            {children}
        </DrawerContext.Provider>
    );
};
