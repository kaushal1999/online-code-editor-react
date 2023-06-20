import  { useState } from 'react'

export default function useLocalStorage(key) {
     
    let initialValue = localStorage.getItem(key);
    if (initialValue === null) initialValue = ""
    
    const [val, setVal] = useState(initialValue)
    
    function setValue(value) {
      localStorage.setItem(key,value)
       setVal(value);
    }
    
    return [val,setValue]
}
