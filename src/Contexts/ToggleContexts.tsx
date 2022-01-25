import React, { useState, createContext } from 'react';

interface ToggleInterface {
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}


export const ToggleContext = createContext<ToggleInterface | undefined>(undefined);


export const ToggleProvider = (props: any) => {

    const [isLoading, setIsLoading] = useState(false)

    return (
        <ToggleContext.Provider
            value={{

                isLoading, setIsLoading

            }}>
            {props.children}
        </ToggleContext.Provider>
    );

};