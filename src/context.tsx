<<<<<<< HEAD
import { createContext, ReactNode } from "react";
=======
import React,  { createContext, ReactNode } from "react"
>>>>>>> a49afb00d8fec56fdbdfc367aeae640454417788

export const CONTEXT = createContext({});

type ProviderType = {
<<<<<<< HEAD
    value: any | any[];
    children: ReactNode;
};

const Provider = ({ value, children }: ProviderType) => (
    <CONTEXT.Provider value={value}>{children}</CONTEXT.Provider>
);

export default Provider;
=======
    value: any | any[]
    children: ReactNode
}

const Provider = ({value, children} : ProviderType) => (
    <CONTEXT.Provider value={value}>
        {children}
    </CONTEXT.Provider>
);

export default Provider;
>>>>>>> a49afb00d8fec56fdbdfc367aeae640454417788
