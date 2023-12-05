import { useState } from "react"

export default function ReturnIcon({ visible, chooseIcon,type }) {
    // return (visible ? (
    //         <>
    //             <div className="icon-item" icontype="returnicon" onClick={chooseIcon}>
    //                 <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     className="icon-node-icon"
    //                 >
    //                     <path
    //                     d="M2 10C2 10 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604C19.6092 6.88131 20.4133 8.40072 20.7762 10M2 10V4M2 10H8M22 14C22 14 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C4.39076 17.1187 3.58669 15.5993 3.22383 14M22 14V20M22 14H16"
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
        
            <div key={type} className="icon-item" icontype="returnicon" onClick={()=>chooseIcon(type)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="icon-node-icon"
                >
                    <path
                    d="M2 10C2 10 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604C19.6092 6.88131 20.4133 8.40072 20.7762 10M2 10V4M2 10H8M22 14C22 14 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C4.39076 17.1187 3.58669 15.5993 3.22383 14M22 14V20M22 14H16"
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