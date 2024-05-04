import plage from "../assets/plage.png"
import "../styles/banner.scss"

function Banner() {
    // state (état, donnéées)

    // comportement

    // affichage (render)
    return (
        <div className='banner'>
            <img src={plage} alt="phot d'une plage" className="bannerImg" />
            <div></div>
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner