import { mapRange } from "gsap"
import Work from "./Work"
import styles from '../Works/WorkList.module.scss'
import gsap from "gsap"
import { useEffect, useRef } from "react"

const WorkList: React.FC= () => {

    const works = [{
        name: 'Python',
        proprety: 'AI - Machine Learning',
        image: 'https://images.unsplash.com/photo-1554147090-e1221a04a025?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048'
    },
    {
        name: 'Python',
        proprety: 'AI - Machine Learning',
        image: 'https://images.unsplash.com/photo-1554147090-e1221a04a025?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048'
    },
    {
        name: 'Python',
        proprety: 'AI - Machine Learning',
        image: 'https://images.unsplash.com/photo-1554147090-e1221a04a025?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048'
    },
    {
        name: 'Python',
        proprety: 'AI - Machine Learning',
        image: 'https://images.unsplash.com/photo-1554147090-e1221a04a025?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048'
    },
    {
        name: 'Python',
        proprety: 'AI - Machine Learning',
        image: 'https://images.unsplash.com/photo-1554147090-e1221a04a025?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048'
    },
{
    name: 'Docker',
    proprety: 'AI - Machine Learning',
    image: 'https://images.unsplash.com/photo-1580596090683-f4711170117b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988'
},
]




    return (
        <div  id={styles.container} >
            {works.map((work) => (
                <div className={styles.module}>
                     <Work name={work.name} proprety={work.proprety} image={work.image} key={Math.random()} />
                </div>

            ))}
        </div>
    )
}

export default WorkList