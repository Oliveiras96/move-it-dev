import  { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountDownProviderProps {
    children: ReactNode;
}

// qual o formato de retorno do countdownTimeout:
let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountDownProviderProps) {

    // pega a função startNewChallenge do contexto:
    const { startNewChallenge } = useContext(ChallengesContext);
    

    const [time, setTime] = useState(25 * 60);

    // Armazena se o countDown está o não ativo:
    const [isActive, setIsActive] = useState(false);

    // estado para guardar se o timer finalizou
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    

    function startCountdown()  {
        setIsActive(true);
    }

    function resetCountdown() {
        // cancela a execução de um timeout depois de clicar no botão
        // evita que o contador execute mais um segundo depois do clique:
        clearTimeout(countdownTimeout);
        setIsActive(false);
        // volta o valor do timer pra 25':
        setTime(25 * 60);
        setHasFinished(false);

    }

    // Quando uma das variáveis observadas muda 
    // execute uma função:
    useEffect(() => {
        // se o setActive esta ativo e o time é maior que 0:
        if (isActive && time > 0) {
            // pega o retorno do setTimeout
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if( isActive && time === 0) {
            // Contador finalizou:
            setHasFinished(true);
            // Contado não está mais ativo:
            setIsActive(false);
            // Dispara a função startNewChallenge:
            startNewChallenge();
        }

    }, [isActive, time]) // executa se o active muda (inicio) e se o time muda (continua contando)

    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            { children }
        </CountdownContext.Provider>
    )
}
