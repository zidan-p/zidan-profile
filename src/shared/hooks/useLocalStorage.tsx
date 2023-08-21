import { useEffect, useState } from "react"




export const useLocalStorage = (key: string, initialValue: string | {}) => {
  const [storedValue, setStoredValue] = useState(()=>{
    if(!window) return "light";
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  })

  useEffect(()=>{
    try {
      //allow value as function
      const valueToStore = 
        typeof storedValue === "function"
          ? storedValue(storedValue)
          : storedValue;

      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  },[key, storedValue])

  return [storedValue, setStoredValue]
}