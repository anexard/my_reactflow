export default function ClientInputIcon({ subType, changeNode }) {
    const iconStyles = subType === "textInputNode" ? {
        class: "control-icon control-icon-current",
        strokeColor: "rgba(255, 255, 255, 1)"
    } : {
        class: "control-icon",
        strokeColor: "rgba(70, 71, 73, 0.50)"
    }

    return (
        <div className="control-item" typetochange="textInputNode" onClick={changeNode} >
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="-2 -2 22 22"
                    
                    className={iconStyles.class}
                >
                    <path
                    d="M1 4C1 3.06812 1 2.60218 1.15224 2.23463C1.35523 1.74458 1.74458 1.35523 2.23463 1.15224C2.60218 1 3.06812 1 4 1H14C14.9319 1 15.3978 1 15.7654 1.15224C16.2554 1.35523 16.6448 1.74458 16.8478 2.23463C17 2.60218 17 3.06812 17 4M6 17H12M9 1V17"
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