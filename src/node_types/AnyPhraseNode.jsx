import icon from '../assets/node_icon.svg';
import chevron from '../assets/chevron.svg';

export default function ClientDropdown() {
    return (
        <div className="client-dropdown">
            <img src={icon} />
            <div className="drop-down-header">
                <p>Любая фраза</p>
            </div>
        </div>
    )
}