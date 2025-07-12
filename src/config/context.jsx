import { createContext, useContext } from "react";




const AppContext = createContext();
export const AppProvider = ({ children }) => {
      const user = JSON.parse(localStorage.getItem("user"));
       return (
    <AppContext.Provider value={{ user}}>
      {children}
    </AppContext.Provider>
  );
}
export const ContextProvider = () => {
  return useContext(AppContext);
};