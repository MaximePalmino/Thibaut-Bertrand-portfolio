import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import Loader from '../components/loader/Loader'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';


function MyApp({ Component, pageProps }: AppProps) {

  gsap.registerPlugin(ScrollTrigger);

  const [loader, setLoader] = useState<Boolean>(true)

  useEffect(() => {

    setTimeout(() => {
      setLoader(false)
    }, 3400)

  })


  return (
      <>  
        {loader ? <Loader/> : <Component {...pageProps} />}
      </>
  
  )
}

export default MyApp
