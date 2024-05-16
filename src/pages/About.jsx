import montagne from "../assets/montagne.png"
import Banner from "../components/Banner/Banner"
import Collapse from "../components/Collapse/Collapse"

const fiabilite = "Fiabilité"
const respect = "Respect"
const service = "Service"
const securite = "Sécurité"

const fiabiliteContent = "Les annonces postées sur Kasa garantissent une fiabilité total. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
const respectContent = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminitoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
const serviceContent = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminitoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
const securiteContent = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

function About() {
    return (
        <div className='main'>
            <Banner photo={montagne} opacity={"about"} />
            <Collapse title={fiabilite} content={fiabiliteContent} />
            <Collapse title={respect} content={respectContent} />
            <Collapse title={service} content={serviceContent} />
            <Collapse title={securite} content={securiteContent} />
        </div>
    )
}

export default About