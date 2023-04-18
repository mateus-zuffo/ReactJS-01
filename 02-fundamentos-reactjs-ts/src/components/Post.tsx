import { format, formatDistanceToNow } from 'date-fns';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import styles from './Post.module.css';
import { ptBR } from 'date-fns/locale';
import { FormEvent, ChangeEvent, InvalidEvent, useState } from 'react';

const avatarTypePost = 'Post';
const avatarTypeComment = 'Comment';

export interface PostProps {
    id: number,
    author: {
        name: string,
        role: string,
        avatar_url: string,
    },
    publishedAt: Date,
    content: Content[],
}

export interface Content {    
    type: 'paragraph' | 'link',
    content: string,    
}


export function Post({author, publishedAt, content}: PostProps){
    const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm",{locale:ptBR});
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix:true }); 
    const [newCommentText, setNewCommentText] = useState('');
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

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Este campo e obrigatório!');
    }

    function handleCreateNewComment(event: FormEvent){
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

    function deleteComment(commentId: number) {
        const commentsWithoutDeletedOne = comments.filter(comment=>{
            return comment.id != commentId;
        })
        setComments(commentsWithoutDeletedOne);  
    }
    const isNewCommentEmpty = newCommentText.length == 0;
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar avatarType={avatarTypePost} src={author.avatar_url}/>
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
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type == 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })} 
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong> Deixe seu feedback</strong>
                <textarea 
                    name="comment" 
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                    
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Comentar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(each=>{
                    return( 
                        <Comment 
                            key={each.comment + (each.id * Math.random() * (1000 - 1) + 1)} 
                            id={each.id} 
                            avatarType={avatarTypeComment} 
                            src={each.url_avatar} 
                            name={each.name} 
                            comment={each.comment} 
                            onDeleteComment={deleteComment}
                        />)
                })}
            </div>
        </article>
    )
}