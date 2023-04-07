import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatar_url: 'https://github.com/mateus-zuffo.png',
      name: 'Mateus Zuffo',
      role: 'Full Stack Developer',
    },
    content: [
      {type:'paragraph', content:'Oi Pessoal'},
      {type:'paragraph', content:'Esse é mais um projeto do meu portifólio, aqui estou praticando um pouco de react junto ao curso da rocketseat.'},
      {type:'link', content: '#NovoProjeto #ConstruindoPortfolio #ReactJS'},
    ],
    publishedAt: new Date('2023-04-04 08:00:00'),
  },
  {
    id: 2,
    author: {
      avatar_url: 'https://github.com/mateus-zuffo.png',
      name: 'Mateus Zuffo',
      role: 'Full Stack Developer',
    },
    content: [
      {type:'paragraph', content:'Esse é um segundo post apenas para praticar a iteração.'},
    ],
    publishedAt: new Date('2023-04-03 20:01:00'),
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
