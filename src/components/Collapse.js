import React, { useState } from "react"
import "../styles/collapse.scss"

const Collapse = ({title, content}) => {

    const handleClick = () => {
        setOpen(!open)
    }

    const [open, setOpen] = useState(false)

    return(
        <div className="collapse">
            <div className="collapse-title">
                {title} 
                <i class="fa-solid fa-chevron-up pointer" onClick={handleClick}></i>
            </div>
            {open && (
                <div className="collapse-content">
                    {content}
                </div>
            )}
        </div>
    )
}

export default Collapse