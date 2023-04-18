import styles from './Avatar.module.css';

interface AvatarProps{
    avatarType: string,
    src: string,
}

export function Avatar(props: AvatarProps){
    return(
        <img 
            className={avatarType(props.avatarType)} 
            src={props.src} 
        /> 
    );
}

function avatarType(props: string){
    switch(props){
        case 'Sidebar':
            return styles.avatarSidebar;
        case 'Post':
            return styles.avatarPost;
        case 'Comment':
            return styles.avatarComment;
    }
}