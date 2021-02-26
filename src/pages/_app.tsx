/* Aqui ficam todos os componentes que são fixos na aplicação
mas todo o conteúdo deste arquivo é recarregado a cada novo acesso do 
usuário */

import '../styles/global.css';

// importar o contexto das challenges:
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return (

    /* provider vai permitir que todos os componentes da aplicação
    tenham acesso aos dados deste contexto que neste caso, esta em
    volta de toda a aplicação. */    
      <Component {...pageProps} />
  );
}

export default MyApp
