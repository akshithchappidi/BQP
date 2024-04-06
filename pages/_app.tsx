// pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../Components/MainComponents/Header";
import Footer from "../Components/Footer/Footer";
import FooterDown from "@/Components/Footer/FooterDown";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <div className="h-32 relative w-full"><Header /></div>
    
      
      
        <Component {...pageProps} />
      <Footer />
      <FooterDown />
    </>
  );
}