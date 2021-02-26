import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CountDown.module.css'
import { CountdownContext } from '../contexts/CountdownContext';

export function CountDown() {

    const {minutes, 
           seconds,
           hasFinished,
           isActive,
           startCountdown,
           resetCountdown
        } = useContext(CountdownContext);

    // Apenas regras de negócio vão no context
    // regras de layout ficam no componente
    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                {/* contador */}

                {/* div dos minutos */}
                <div>
                    <span>{minuteLeft}</span> 
                    <span>{minuteRight}</span>
                </div>
                
                {/* dois pontos */}
                <span>:</span>
                
                {/* div dos segundos */}
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {/* Quando chegar a zero mostre que terminou */}
            {hasFinished ? (
                <button 
                disabled
                className={styles.countdownButton}>
                    Ciclo encerrado
                </button>
            ) : (
                // fragment é uma tag que não aparece no HTML
                <>
                    { isActive ? (
                        <button 
                        type="button" 
                        className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        onClick={resetCountdown} >
                            Abandonar ciclo
                        </button>) : (<button 
                        type="button" 
                        className={styles.countdownButton}
                        onClick={startCountdown} >
                            Iniciar ciclo
                       </button>
            
                    )}
                </>
            )}

            

        
        </div>
        
    );
}