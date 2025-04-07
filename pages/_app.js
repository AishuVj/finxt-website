// pages/_app.js
import '../styles/globals.css';
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Playfair+Display:wght@600&display=swap" rel="stylesheet" />



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;


