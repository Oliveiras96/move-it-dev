import { Children, createContext, ReactNode, useEffect, useState } from 'react';
import { LevelUpModal } from '../components/LevelUpModal';
// js-cookie é em js puro precisamos adicionar as tipagens com o pacote @types/js-cookies 
import Cookies from "js-cookie";
import challenges from '../../challenges.json';



// formato do objeto challenge:
interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

// define o retorno do contexto
interface ChallengeContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    experienceToNextlevel: number;
    levelUp: () => void;
    closeLevelUpModal: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
}

// Tipagem: children pode ser qualquer componente react
interface ChallengesProviderProps {
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengeContextData);

// É uma boa prática criar os contextos e exporta-los no App:
export function ChallengesProvider({
    children,
    // todas as outras propriedades em ChallengesProviderProps vão para um obj:
    ...rest
}: ChallengesProviderProps) {

    const [level, setLevel] = useState(rest.level ?? 1 );
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
    const [activeChallenge, setActiveChallenge] = useState(null);
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

    const experienceToNextlevel = Math.pow((level + 1) * 4, 2);

    // quando o segundo parâmetro é vazio, a função é executada 
    // uma única vez quando o componente é mostrado em tela
    useEffect(() => {

        // Pede permissões para enviar notificações
        Notification.requestPermission(); 
    }, []);


    // Armazenando informações em cookies:
    useEffect(() => {
        // monitora mudança nas variáveis level, currentExperience e challengesCompleted:
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengesCompleted', String(challengesCompleted));
    },[level, currentExperience, challengesCompleted]);

    // atualiza o level
    function levelUp() {
        setLevel(level + 1);
        setIsLevelUpModalOpen(true);
    }

    function closeLevelUpModal() {
        setIsLevelUpModalOpen(false);
    }

    function startNewChallenge() {
        // pegar um, desafion aleatório:
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];

        // muda o estado do challengeActive com o desafio aleatório:
        setActiveChallenge(challenge);

        new Audio('/notification.mp3').play();

        if(Notification.permission === 'granted') {
            new Notification('Novo Desafio', {
                body: `valendo ${challenge.amount} xp!`
            })
        }
    }

    // função para resetar em caso de falha do desafio (botão falhei)
    function resetChallenge() {
        setActiveChallenge(null);
    }

    // função de exitop no desafio (completei);
    function completeChallenge() {
        // se não tem deesafio ativo, retorne:
        if(!activeChallenge) {
            return;
        }

        // atualiza a experiencia atual do usuário com o valor do desafio completado
        const { amount } = activeChallenge;
        let finalExperience = currentExperience + amount;

        // se a exp atual for suficiente para upar de nível:
        if(finalExperience >= experienceToNextlevel) {

            finalExperience = finalExperience - experienceToNextlevel;
            levelUp();
        }

        // Atualiza a exp atual:
        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);

    }

    // todas as propriedades e estados exportados pelo contexto
    // ficaram disponíveis para todos os componentes da aplicação

    return (
        /* um provider recebe uma propriedade que pode ser um 
        objeto com tudo o que queremos acessar de outros componentes*/

        <ChallengesContext.Provider 
            value={{ 
                level,
                currentExperience, 
                challengesCompleted,
                activeChallenge,
                experienceToNextlevel,
                levelUp,
                closeLevelUpModal,
                startNewChallenge,
                resetChallenge,
                completeChallenge                
            }}
        >
            {/* dentro do contexto poderemos ter vários outros componentes */}
            { children }

            { isLevelUpModalOpen && <LevelUpModal /> }
        </ChallengesContext.Provider>
        
    )
}