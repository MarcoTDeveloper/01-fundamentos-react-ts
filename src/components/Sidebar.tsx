import { PencilLine } from '@phosphor-icons/react';
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://c8.alamy.com/zooms/9/863d6569c8954e0aad8b0f8828db8a37/2d8kp6a.jpg"
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/MarcosDevPF.png" />

                <strong>Marco Túlio</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}