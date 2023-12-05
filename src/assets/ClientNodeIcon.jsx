export default function ClientNodeIcon({ mainType, changeNode }) {
    const iconStyles = (mainType === "clientNode") ? {
        class: "control-icon control-icon-current",
        strokeColor: "rgba(255, 255, 255, 1)"
    } : {
        class: "control-icon",
        strokeColor: "rgba(70, 71, 73, 0.50)"
    }

    return (
        <div className="control-item" typetochange="clientNode" onClick={changeNode}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="1 0 30 30"
                
                className={iconStyles.class}
            >
                <path
                d="M4 26.6667C7.11439 23.3634 11.3427 21.3333 16 21.3333C20.6573 21.3333 24.8856 23.3634 28 26.6667M22 10C22 13.3137 19.3137 16 16 16C12.6863 16 10 13.3137 10 10C10 6.68629 12.6863 4 16 4C19.3137 4 22 6.68629 22 10Z"
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