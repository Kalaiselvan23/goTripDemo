import { createContext } from "react";
import * as React from 'react';
export type formDataType = {
    country: string,
    dates: {
        from: Date,
        to: Date,
    }
    guests: {
        adult: number,
        children: number,
        room: number,
    }
}
export type HomeInputContextType = {
    formData: formDataType,
    setFormData: React.Dispatch<React.SetStateAction<HomeInputContextType | undefined>>
}
export const HomeInputContext = createContext<HomeInputContextType>({});
export const HomeInputContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [formData, setFormData] = React.useState<formDataType>({
        country:"",
        dates:{
            from:new Date(),
            to:new Date(),
        },
        guests:{
            adult:0,
            children:0,
            room:0,
        }
    });
    return <HomeInputContext.Provider value={{ formData, setFormData }}>
        {children}
    </HomeInputContext.Provider>
}