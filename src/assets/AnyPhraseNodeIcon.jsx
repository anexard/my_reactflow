export default function ClientNodeIcon({ subType, changeNode }) {
    const iconStyles = subType === "anyphraseNode" ? {
        class: "control-icon control-icon-current",
        strokeColor: "rgba(255, 255, 255, 1)"
    } : {
        class: "control-icon",
        strokeColor: "rgba(70, 71, 73, 0.50)"
    }

    return (
        <div className="control-item" typetochange="anyphraseNode" onClick={changeNode}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 30 30"
                
                className={iconStyles.class}
            >
                <path
                d="M17.3307 9.33333H6.93073C5.43726 9.33333 4.69052 9.33333 4.12009 9.62398C3.61832 9.87964 3.21037 10.2876 2.95471 10.7894C2.66406 11.3598 2.66406 12.1065 2.66406 13.6V18.4C2.66406 19.8935 2.66406 20.6402 2.95471 21.2106C3.21037 21.7124 3.61832 22.1204 4.12009 22.376C4.69052 22.6667 5.43726 22.6667 6.93073 22.6667H17.3307M22.6641 9.33333H25.0641C26.5575 9.33333 27.3043 9.33333 27.8747 9.62398C28.3765 9.87964 28.7844 10.2876 29.0401 10.7894C29.3307 11.3598 29.3307 12.1065 29.3307 13.6V18.4C29.3307 19.8935 29.3307 20.6402 29.0401 21.2106C28.7844 21.7124 28.3765 22.1204 27.8747 22.376C27.3043 22.6667 26.5575 22.6667 25.0641 22.6667H22.6641M22.6641 28L22.6641 4M25.9974 4.00001L19.3307 4M25.9974 28L19.3307 28"
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