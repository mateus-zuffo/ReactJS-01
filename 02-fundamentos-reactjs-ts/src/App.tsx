import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post,PostProps, Content } from "./components/Post";
import "./global.css";
import styles from './App.module.css'

 
const posts: PostProps[] = [
  {
    id: 1,
    author: {
      name: 'Mateus Zuffo',
      role: 'Full Stack Developer',
      avatar_url: 'https://github.com/mateus-zuffo.png',
    },
    publishedAt: new Date('2023-04-04 08:00:00'),
    content: [
      {type:'paragraph', content:'Oi Pessoal'},
      {type:'paragraph', content:'Esse é mais um projeto do meu portifólio, aqui estou praticando um pouco de react junto ao curso da rocketseat.'},
      {type:'link', content: '#NovoProjeto #ConstruindoPortfolio #ReactJS'},
    ],
  },
  {
    id: 2,
    author: {
      name: 'Mateus Zuffo',
      role: 'Full Stack Developer',
      avatar_url: 'https://github.com/mateus-zuffo.png',
    },
    publishedAt: new Date('2023-04-03 20:01:00'),
    content: [
      {type:'paragraph', content:'Esse é um segundo post apenas para praticar a iteração.'},
    ],
  },
];

function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>

      <Sidebar/>
      <main>
        {posts.map(post=>{
          return (
            <Post
              key= {post.id}
              id={post.id}
              author= {post.author}
              content= {post.content}
              publishedAt= {post.publishedAt}
            />
          )
        })}
      </main>  
      </div>
    </div>
  )
}

export default App
