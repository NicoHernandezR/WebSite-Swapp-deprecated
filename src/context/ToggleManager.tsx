import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

interface IMenuContext {
  colorToggle: boolean;
  setColorToggle: Dispatch<SetStateAction<boolean>>;
}

export const MyContext = createContext<IMenuContext>({
  colorToggle: false,
  setColorToggle: () => {},
});

export const ToggleManager = ({ children }) => {

  //Si es True es modo oscuro, si es False es modo claro
  const [colorToggle, setColorToggle] = useState(false);

  return (
    <MyContext.Provider value={{ colorToggle, setColorToggle }}>
      {children}
    </MyContext.Provider>
  );
};

export const useGlobalColorToggle = () => useContext(MyContext);