import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>

      <Sidebar/>
      <main>
        <Post
          author="Mateus Zuffo"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur in nemo voluptas ut eius laboriosam perspiciatis molestias repellendus inventore corrupti velit, nobis voluptates officia ipsam vero, expedita earum, qui culpa?"
        />
      </main>  
      </div>
    </div>
  )
}

export default App
