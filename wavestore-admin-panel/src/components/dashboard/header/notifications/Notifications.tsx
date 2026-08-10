import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import style from './Notifications.module.scss';

export const Notifications = () => {
  const [isHovered, setIsHovered] = useState(false);

    const notifications = [
        { id: 1, message: "Nueva cita registrada", time: "Hace 5 min" },
        { id: 2, message: "Paciente Juan Pérez confirmado", time: "Hace 1 h" },
        { id: 3, message: "Recordatorio de reunión médica", time: "Ayer" },
    ];

    return (
        <div
            className={style.notification_container}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={style.bell_icon}>
                <FontAwesomeIcon icon={faBell} />
                <span>{notifications.length}</span>
            </div>

            {isHovered && (
                <div className={style.notification_box}>
                    <h4>Notificaciones</h4>
                    <ul>
                        {notifications.map((n) => (
                            <li key={n.id}>
                                <p>{n.message}</p>
                                <span>{n.time}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
