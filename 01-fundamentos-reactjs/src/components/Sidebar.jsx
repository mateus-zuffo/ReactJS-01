import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';

export function Sidebar(){
    return (
    <aside className={styles.sidebar}>
        <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"  
        />
        <div className={styles.profile}>
            <Avatar src="https://github.com/mateus-zuffo.png"/>
            <strong>Mateus Zuffo</strong>
            <span>Web Developer</span>
        </div>
        <footer>
            <a href="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60">
                <PencilLine size="21"/>
                Editar perfil
            </a>
        </footer>
    </aside>
    );
}