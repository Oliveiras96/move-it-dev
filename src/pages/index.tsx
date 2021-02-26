import Head from 'next/head' // tag head do HTML através do Next
import { GetServerSideProps } from 'next';

import { ExperienceBar } from "../components/experienceBar";
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { CountDown } from '../components/CountDown';
import { ChallengeBox } from "../components/ChallengeBox";

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}


export default function Home(props: HomeProps) {
  console.log(props);
  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
      >
      <div className={styles.container}>

        <Head>
          <title>Inicio | move.it</title>
        </Head>

        <ExperienceBar />

        {/* seção do perfil */}
        {/* Como só esses elementos desta página dependem de variáveis
        do contexto countdown o provider do countdown vem aqui */}
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>

      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
 
  // busca os dados nos cookies da aplicação:
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}