import { format, formatDistanceToNow } from 'date-fns';
import { Comment } from './comment';
import { Avatar } from './Avatar';
import styles from './Post.module.css';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';

const tipoAvatar = 'Post';


export function Post({author, publishedAt, content}){
    const [comments, setComments] = useState([
        {   
            id: 1,
            name: 'Diego Fernandes',
            url_avatar: 'https://github.com/diego3g.png',
            comment: 'Muito bom, parabens!',
        },
        {   
            id: 2,
            name: 'Jose',
            url_avatar: 'https://github.com/jose.png',
            comment: 'Ta incrível, 10/10',
        },
    ]);
    const [newCommentText, setNewCommentText] = useState('');

    function handleNewCommentChange(){
        setNewCommentText(event.target.value);
    }
    const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm",{locale:ptBR});
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix:true });
    function handleCreateNewComment(){
        event.preventDefault();
        const newComment = {
            id: comments.length+1,
            name: 'Desconhecido',
            url_avatar: 'https://st2.depositphotos.com/1007566/11569/v/950/depositphotos_115690172-stock-illustration-businessman-profile-colorful-avatar-over.jpg',
            comment: newCommentText,
        }

        setComments([...comments, newComment]);
        setNewCommentText('');
    } 

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar tipoAvatar={tipoAvatar} src={author.avatar_url}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if(line.type == 'paragraph'){
                        return <p>{line.content}</p>;
                    } else if (line.type == 'link'){
                        return <p><a href="#">{line.content}</a></p>;
                    }
                })} 
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong> Deixe seu feedback</strong>
                <textarea 
                    name="comment" 
                    placeholder="Deixe um comentário"
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                />
                    
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(each=>{
                    return <Comment tipoAvatar='Comment' src={each.url_avatar} nome={each.name} comentario={each.comment}/>
                })}
            </div>
        </article>
    )
}