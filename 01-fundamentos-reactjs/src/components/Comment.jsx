import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { useState } from 'react';

export function Comment(props){
    const [likeCount, setLikeCount]= useState(0);

    function handleDeleteComment(){
        props.onDeleteComment(props.id);
    }
    
    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }
    
    return(
        <div className={styles.comment}>
            <Avatar avatarType={props.avatarType} src={props.src} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{props.name}</strong>
                            <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>                         
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{props.comment}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}