import { Header } from "./components/header";
import DefaultExport from "./DefaultExport";
import { NamedExport } from "./NamedExport";
import { Post } from "./Post";
import "./global.css";
import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header/>
      <DefaultExport/>
      <DefaultExport/>
      <NamedExport/>
      <NamedExport/>
      <Post
        author="Mateus Zuffo"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur in nemo voluptas ut eius laboriosam perspiciatis molestias repellendus inventore corrupti velit, nobis voluptates officia ipsam vero, expedita earum, qui culpa?"
      />
      <Post
        author="Mateus Zuffo"
        content="Teste ipsum dolor sit amet consectetur adipisicing elit. Pariatur in nemo voluptas ut eius laboriosam perspiciatis molestias repellendus inventore corrupti velit, nobis voluptates officia ipsam vero, expedita earum, qui culpa?"
      />
    </div>
  )
}

export default App
