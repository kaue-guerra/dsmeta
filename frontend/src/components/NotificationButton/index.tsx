import './styles.css';

import NotificationIcon from "../../assets/img/notification-icon.svg";

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={NotificationIcon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;