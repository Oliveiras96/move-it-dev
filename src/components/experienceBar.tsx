import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
// importando os estilos deste componente:
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(){

    const { currentExperience, experienceToNextlevel } = useContext(ChallengesContext);
    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextlevel

    return (
        // classes agora devem ser usadas como variáveis de JS:
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }}/>
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                    {currentExperience} xp
                </span>
                
            </div>
            <span>{experienceToNextlevel} xp</span>
        </header>

    )
}