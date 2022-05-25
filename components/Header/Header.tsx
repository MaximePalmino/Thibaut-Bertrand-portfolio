import styles from '../Header/Header.module.scss'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'


const Header: React.FC = () => {

    const title = useRef(null)
    const description = useRef(null)

    useEffect(() => {

        gsap.fromTo(title.current, {y:20, opacity:0}, {y:0, opacity:1, duration: 1})
        gsap.fromTo(description.current, {y:20, opacity:0}, {y:0, opacity:1, duration: 1, delay: 0.2})

    })


    return (
        <>

        <div className={styles.container}>
            <div ref={title}><h1>AI . Python</h1></div>
            <div ref={description}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus commodi illum deleniti cum amet. Ipsam ipsa id culpa quisquam odio a nesciunt suscipit sequi facere, amet ducimus. Ex, odit explicabo!</p></div>
        </div>
        </>
    )
}

export default Header