import { format, formatDistanceToNow } from 'date-fns';
import { Comment } from './comment';
import { Avatar } from './Avatar';
import styles from './Post.module.css';
import { ptBR } from 'date-fns/locale';

const tipoAvatar = 'Post';

export function Post({author, publishedAt, content}){
    const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm",{locale:ptBR});
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix:true });

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
            <form className={styles.commentForm}>
                <strong> Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário">
                    
                </textarea>
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment tipoAvatar='Comment' src="https://github.com/diego3g.png" nome='Diego Fernandes' comentario='Muito bom, parabéns!'/>
                <Comment tipoAvatar='Comment' src="https://github.com/jose.png" nome='Jose' comentario='Ta incrível, 10/10'/>
            </div>
        </article>
    )
}