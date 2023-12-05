import { useState } from "react"

export default function LeaveIcon({ visible, chooseIcon, type}) {
    // return (visible ? (
    //         <>
    //             <div className="icon-item icon-item-show" icontype="leaveicon" onClick={chooseIcon}>
    //                 <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     className="icon-node-icon"
    //                 >
    //                     <path
    //                     d="M12 15C13.6569 15 15 16.3431 15 18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18C9 16.3431 10.3431 15 12 15ZM12 15C12 10.6842 8.625 6 3 6L15 6M15 6C15 7.65685 16.3431 9 18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6Z"
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
            <div key={type} className="icon-item icon-item-show" icontype="leaveicon" onClick={()=>chooseIcon(type)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="icon-node-icon"
                >
                    <path
                    d="M12 15C13.6569 15 15 16.3431 15 18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18C9 16.3431 10.3431 15 12 15ZM12 15C12 10.6842 8.625 6 3 6L15 6M15 6C15 7.65685 16.3431 9 18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6Z"
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