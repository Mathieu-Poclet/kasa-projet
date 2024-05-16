import React, { useState } from "react"
import "./collapse.scss"

const Collapse = ({title, content}) => {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return(
        <div className="collapse">
            <div className="collapse-title">
                {title} 
                <i 
                    className={`fa-solid fa-chevron-up pointer ${open ? 'open' : ''}`}
                    onClick={handleClick}>
                </i>
            </div>
            {open && <div className="collapse-content">{content}</div>}
        </div>
    )
}

export default Collapse