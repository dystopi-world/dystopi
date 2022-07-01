import Layout from '../components/layout';
import PresaleWrapper from '../contexts/presale-wrapper';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <PresaleWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PresaleWrapper>
  );
}

export default MyApp;
