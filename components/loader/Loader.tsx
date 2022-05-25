import styles from "../loader/Loader.module.scss"
import { useEffect, useRef } from "react"
import { gsap } from "gsap";

const Loader: React.FC= () => {

    const name = useRef(null)
    const disapearSurname = useRef(null)
    const disapearName = useRef(null)

    useEffect(() => {

        gsap.fromTo(name.current, {opacity: 0}, {opacity: 1, duration: 2, delay: 0.3});
        gsap.fromTo(disapearSurname.current, {x:-30}, {x: 0,  duration: 2.4,  ease: "power3.out"});
        gsap.fromTo(disapearName.current, { x:30}, {x:0,  duration: 2.4,  ease: "power3.out"});
        gsap.to(disapearSurname.current, {opacity:0,duration: 1, delay: 2});
        gsap.to(disapearName.current, {opacity:0, duration: 1, delay: 2});




    })

    return (
        <div className={styles.container}>
            <div ref={name}>
                <h2 ref={disapearSurname}>Thibaut</h2>
                <h1 ref={disapearName}>BERTRAND</h1>

            </div>

        </div>
    )
}

export default Loader