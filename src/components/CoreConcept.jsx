import CoreConcepts from "./CoreConcepts"
import { CORE_CONCEPTS } from "../data.js"
 export default function CoreConcept() {
    return (
            <section id="core-concepts">
                <h2>Core Concepts</h2>
                <ul>
                    {CORE_CONCEPTS.map ((conceptItem) => (<CoreConcepts {...conceptItem} />))}
                </ul>
            </section>
    )
}