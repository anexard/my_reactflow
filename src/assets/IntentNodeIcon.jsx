export default function ClientNodeIcon({ subType, changeNode }) {
    const iconStyles = subType === "dropDown" ? {
        class: "control-icon control-icon-current",
        strokeColor: "rgba(255, 255, 255, 1)"
    } : {
        class: "control-icon",
        strokeColor: "rgba(70, 71, 73, 0.50)"
    }

    return (
        <div className="control-item" typetochange="dropDown" onClick={changeNode}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                
                className={iconStyles.class}
            >
                <path
                d="M13.0028 2L4.09625 12.6879C3.74744 13.1064 3.57303 13.3157 3.57037 13.4925C3.56805 13.6461 3.63652 13.7923 3.75605 13.8889C3.89354 14 4.16597 14 4.71083 14H12.0028L11.0028 22L19.9093 11.3121C20.2581 10.8936 20.4325 10.6843 20.4352 10.5075C20.4375 10.3539 20.3691 10.2077 20.2495 10.1111C20.112 10 19.8396 10 19.2948 10H12.0028L13.0028 2Z"
                fill="none" 
                stroke={iconStyles.strokeColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                />
            </svg>
        </div>
    )
}