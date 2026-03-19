import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';
import PopupModal from './PopupModal';

export default function Layout({ children, title = 'CIJ Academy' }) {
  return (
    <>
      <Head>
        <title>{title} | CIJ Academy - Cebu International Junior Academy</title>
        <meta name="description" content="CIJ Academy - Premier English Language Academy in Cebu, Philippines" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <FloatingButtons />
      <PopupModal />
      <Footer />
    </>
  );
}
