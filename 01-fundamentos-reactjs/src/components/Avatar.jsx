import styles from './Avatar.module.css';

export function Avatar(props){
    return(
        <img 
            className={avatarType(props.avatarType)} 
            src={props.src} 
        /> 
    );
}

function avatarType(props){
    switch(props){
        case 'Sidebar':
            return styles.avatarSidebar;
        case 'Post':
            return styles.avatarPost;
        case 'Comment':
            return styles.avatarComment;
    }
}