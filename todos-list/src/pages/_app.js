// src/pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@/styles/globals.css'; // For global styling
import Hello from '@/components/Hello'; // Import Hello component

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Hello />
      
    </>
  );
}
