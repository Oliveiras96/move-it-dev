import styles from '../styles/components/Profile.module.css';

import { ChallengesContext } from '../contexts/ChallengesContext';
import { useContext } from 'react';

export function Profile() {
    
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="avatar.png" alt="Profile Pic"/>
            <div>
                <strong>User</strong>            
                
                <p>
                    {/* Arquivos dentro de public não precisam do caminho completo */}
                    <img src="icons/level.svg" alt="level"/>
                    Level { level }
                </p>
            </div>
        </div>
    );
}