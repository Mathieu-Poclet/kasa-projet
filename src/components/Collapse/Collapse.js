import React, { useState } from "react"
import "./collapse.scss"

const Collapse = ({title, content}) => {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
    let addOpenClass = open ? ' active' : null
    let addCloseClass = !open ? ' active': null
    const chevron = "fa-solid fa-chevron-up pointer"
    const contento = "collapse-content"

    return(
        <div className="collapse">
            <div className="collapse-title">
                {title} 
                <i className={`${chevron} openRotation${addOpenClass} closeRotation${addCloseClass} `} onClick={handleClick}></i>
            </div>
            {open && (
                <div className={`${contento} openContent${addOpenClass} `}>
                    {content}
                </div>
            )}
        </div>
    )
}

export default Collapse