import "./banner.scss"

function Banner({photo, opacity}) {
    return (
        <div className="banner">
            <img src={photo} alt="paysage" className="bannerImg" />  
            <div className={opacity}></div>  
        </div>
    )
}

export default Banner