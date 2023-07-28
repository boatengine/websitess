import Head from 'next/head'
// import { Navbar, Footer, Sleep } from './components'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sleep from './components/Sleep'
import Working from './components/Working'
import Learning from './components/Learning'

export default function Home() {
	return (
    <div>
      <Head>
        <title>Boat | Status</title>
        <meta name="description" content="Boat Status 😎>" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen overflow-x-hidden">
        <Navbar />
        {/* <Sleep /> */}
        {/* <Working /> */}
        <Learning />
        
        <Footer />
      </div>
    </div>
  )
}
