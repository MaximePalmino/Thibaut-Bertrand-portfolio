import styles from '../Works/Work.module.scss'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

interface PropsWork {

    name: string,
    proprety: string,
    image: string
}


const Work: React.FC<PropsWork> = ({name, proprety, image}) => {

    const card = useRef(null)

    useEffect(() => {
        gsap.fromTo(card.current, {rotate: 10, y:100, opacity:0}, {rotate: 0,y:0, opacity:1, duration: 1.5, delay: 0.3, ease: "power3.out"})
    })

    return (
        <div ref={card} className={styles.container}>
            <div className={styles.card} >
                <img src={image} alt='' />
            </div>
            <div className={styles.description}>
                <h2>{name}</h2>
                <p>{proprety}</p>
            </div>
        </div>
    )
}

export default Work