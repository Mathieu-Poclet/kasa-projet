import Banner from "../components/Banner"
import montagne from "../assets/montagne.png"
import Collapse from "../components/Collapse"

const title1 = "Fiabilité"
const title2 = "Respect"
const title3 = "Service"
const title4 = "Sécurité"

const content1 = "Les annonces postées sur Kasa garantissent une fiabilité total. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
const content2 = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminitoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
const content3 = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminitoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
const content4 = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

function About() {
    return (
        <div className='main'>
            <Banner photo={montagne} opacity={"about"} />
            <Collapse title={title1} content={content1} />
            <Collapse title={title2} content={content2} />
            <Collapse title={title3} content={content3} />
            <Collapse title={title4} content={content4} />
            
        </div>
    )
}

export default About