import Head from "next/head";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, viewport-fit=cover"
                />
            </Head>
            <Navbar />
            <main className="pt-16">
                <Component {...pageProps} />
            </main>
            <Footer />
            <BackToTop />
        </>
    );
}

