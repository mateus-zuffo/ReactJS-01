import styles from './Avatar.module.css';

export function Avatar(props){
    return(
        <img 
            className={tipoAvatar(props.tipoAvatar)} 
            src={props.src} 
        /> 
    );
}

function tipoAvatar(props){
    switch(props){
        case 'Sidebar':
            return styles.avatarSidebar;
        case 'Post':
            return styles.avatarPost;
        case 'Comment':
            return styles.avatarComment;
    }
}