export default function RobotNodeIcon({ mainType, changeNode }) {
    const iconStyles = mainType === "robotNode" ? {
        class: "control-icon control-icon-current",
        strokeColor: "rgba(255, 255, 255, 1)",
        backgroundColor: "rgba(12, 190, 144, 1)"
    } : {
        class: "control-icon",
        strokeColor: "rgba(70, 71, 73, 0.50)"
    }

    return (
        <div className="control-item" typetochange="robotNode" onClick={changeNode} style={{backgroundColor: iconStyles.backgroundColor}}>
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    
                    className={iconStyles.class}
                >
                    <path
                    d="M6 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V6M6 19H5.8C4.11984 19 3.27976 19 2.63803 18.673C2.07354 18.3854 1.6146 17.9265 1.32698 17.362C1 16.7202 1 15.8802 1 14.2V14M19 6V5.8C19 4.11984 19 3.27976 18.673 2.63803C18.3854 2.07354 17.9265 1.6146 17.362 1.32698C16.7202 1 15.8802 1 14.2 1H14M19 14V14.2C19 15.8802 19 16.7202 18.673 17.362C18.3854 17.9265 17.9265 18.3854 17.362 18.673C16.7202 19 15.8802 19 14.2 19H14M5.5 6V7.5M14.5 6V7.5M9 10.6001C9.8 10.6001 10.5 9.9001 10.5 9.1001V6M13.2002 13.2C11.4002 15 8.5002 15 6.7002 13.2"
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