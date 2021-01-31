import "../styles/globals.css";

import AutState from "../context/Auth/AuthState";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <AutState>
        <Component {...pageProps} />
      </AutState>
    </>
  );
}

export default MyApp;
