import { useState } from "react";

  export default function useHooks() {
    const [contador, setContador] = useState(0);
    const handleClickMas = () => {
        setContador(contador + 1);
      };
    
      const handleClickMenos = () => {
        if (contador > 0) {
          setContador(contador >= 1 && contador - 1);
        }
      };
    return {
        handleClickMas, handleClickMenos, contador
    }
  }
  