import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import React from 'react'
import Layout from "../components/Layout";
import "../styles/index.css";
import '../components/sass/main.scss'

function MyApp({ Component, pageProps, router }) {
  const [isFirstMount, setIsFirstMount] = React.useState(true);
  React.useEffect(() => {
    const handleRouteChange = () => {
      isFirstMount && setIsFirstMount(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component
          isFirstMount={isFirstMount}
          key={router.route}
          {...pageProps}
        />
      </AnimatePresence>
    </Layout>
  );
}
export default MyApp;