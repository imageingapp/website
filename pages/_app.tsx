import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/main.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <NotificationsProvider>
        <main className="flex flex-col h-screen justify-between">
          <Nav />
          <div>
            {/** @ts-ignore No idea what's triggering this to think a page isn't a JSX Component */}
            <Component {...pageProps} />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                className="fill-base-300"
                fillOpacity="1"
                d="M0,160L30,170.7C60,181,120,203,180,208C240,213,300,203,360,176C420,149,480,107,540,90.7C600,75,660,85,720,106.7C780,128,840,160,900,181.3C960,203,1020,213,1080,202.7C1140,192,1200,160,1260,154.7C1320,149,1380,171,1410,181.3L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
              ></path>
            </svg>
          </div>
          <Footer />
        </main>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default MyApp;
