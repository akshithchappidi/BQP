// pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../Components/MainComponents/Header";
import Footer from "../Components/MainComponents/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="container mx-auto py-8">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}