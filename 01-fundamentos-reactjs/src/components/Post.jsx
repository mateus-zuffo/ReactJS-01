import { Comment } from './comment';
import { Avatar } from './Avatar';
import styles from './Post.module.css';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar tipoAvatar='Post' src="https://github.com/mateus-zuffo.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Mateus Zuffo</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Oi Recruiters</p>
                <p>Esse é mais um projeto do meu portifólio, aqui estou praticando um pouco de react junto ao curso da rocketseat.</p>
                <p>
                    <a href="">#NovoProjeto</a>{' '}
                    <a href="">#ConstruindoPortfolio</a>{' '}
                    <a href="">#ReactJS</a>  
                </p>
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