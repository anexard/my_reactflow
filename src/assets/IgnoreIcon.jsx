import { useState } from "react"

export default function IgnoreIcon({ visible, chooseIcon, type }) {
    // return ( visible ? (
    //         <>
    //             <div className="icon-item" icontype="ignoreicon" onClick={chooseIcon}>
    //                 <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     className="icon-node-icon"
    //                 >
    //                     <path
    //                     d="M4 7H15M15 7L11 11M15 7L11 3M4 17H20M20 17L16 21M20 17L16 13"
    //                     fill="none" 
    //                     stroke="#fff"
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                     strokeWidth={1.5}
    //                     />
    //                 </svg>
    //             </div>
    //         </>
    //     ) : null
    // )

    return (
            <div key={type} className="icon-item" icontype="ignoreicon" onClick={()=>chooseIcon(type)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="icon-node-icon"
                >
                    <path
                    d="M4 7H15M15 7L11 11M15 7L11 3M4 17H20M20 17L16 21M20 17L16 13"
                    fill="none" 
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    />
                </svg>
            </div>
)
}