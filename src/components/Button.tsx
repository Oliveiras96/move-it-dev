// Usando  uma interface para declarar as propriedades 

import { countReset } from "console";
import { useState } from "react";


// que umbotão pode ter:
interface ButtonProps {
    color: string;
    children: string;
}

// criando um componente de React

//Button recebe por padrão as propriedfades listadas em ButtonProps
export function Button(props: ButtonProps){
    // Estados:

    const [counter, setCounter] = useState(1);

    // função para incrementar o valor de counter:
    function increment() {
        // setCounter usa imutabilidade para criar uma nova variável 
        // com o valor setado:
        setCounter(counter + 1);
    }


    return (
        // inserindo estilização no react

        // propriedades podem ser passadas como um objeto JS
        <button 
            type="button"
            style={{ backgroundColor: props.color}}
            //quando o usuário clicar incrementa o valor entre () em 1:
            onClick={increment}
        >
            {/* chaves são usadas para inserir código em JS */}
            {props.children} 
            <strong>
                {/* mostra o valor da var counter */}
                ({counter})
            </strong>
        </button>
    );
}