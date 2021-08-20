import React, {createContext, useState, useEffect} from 'react'


export const Authcontext = createContext()

export default ({children}) => {

    const [isLoaded,setIsLoaded] = useState(false);
    const [ifToken, setifToken] = useState(false);
    const token = localStorage.getItem('jwt');

    useEffect(() => {
        if(token === null){
          setifToken(false);
          setIsLoaded(true);
        }else{
            setifToken(true);
            setIsLoaded(true);
        }

    
      }, [])

      return (
        <div>
            {!isLoaded ? <h1>Cargando Aplicacion...</h1> : 
            <Authcontext.Provider value={{ifToken,setifToken}}>
                { children }
            </Authcontext.Provider>}
        </div>
    )
} 


