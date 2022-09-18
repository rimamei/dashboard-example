import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import DefaultLayout from "../layout/DefaultLayout";

interface AppStateProps extends AppProps {
  Component: any;
}

function MyApp({ Component, pageProps }: AppStateProps) {
  const Layout = Component.Layout || DefaultLayout;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;
