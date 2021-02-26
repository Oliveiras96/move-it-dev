/* ESte documento contém tudo o que é estático na aplicação e
diferente do arquivo _app.tsx, este arquico é carregado uma única
vez a cada novo acesso. */

import Document, { Html, Head, Main, NextScript } from 'next/document';

// Design Pattern: classe herdar da Document
export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                {/* fontes neste arquivo carregam somente uma vez */}
                <Head>
                    <link rel="shortcut icon" href="favicon.png" type="image/png"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet"/> 
                </Head>
                <body>
                    <Main/>
                    <NextScript />
                </body>
            </Html>
        );
    }
}