
import React, { useState } from "react"

export default function ItemList({el,last, chevron})
 {
    const[show,setShow] = useState(false)
    
    return (
        <React.Fragment >
            <div className="item-title" onClick={()=>setShow(!show)}>
                <div className="title-block">
                    <p className="title-text">{el.title}</p>
                    <img src={chevron}></img>
                </div>
                { !!show && <div className="subdropdown" >
                {
                    el?.subdropdown?.length > 0 && el.subdropdown.map((elem, ind) => {
                        return (
                                <div className="subdropdown-item" key={ind}>
                                    <p className="subdropdown-item-text">{elem}</p>
                                </div>
                        )
                    })
                }
                </div>}
            </div>
            {last ? (<div className="dropdown-divider"></div>) : null}
        </React.Fragment>
    )
}