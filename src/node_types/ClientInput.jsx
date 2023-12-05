import icon from '../assets/node_icon.svg';
import chevron from '../assets/chevron.svg';

export default function ClientDropdown() {
    return (
        <div className="clientInput">
            <img src={icon} />
            <input type="text" />
        </div>
    )
}