import Header from "./components/Header";
import './global.css';
import styles from  './App.module.css/';
import { Sidebar } from "./components/Sideba";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar/>
        </aside>
        <main>
          Lorem, ipsum dolor sit amet consectetur adipisicing 
          elit. Corrupti quisquam expedita amet magni adipisci 
          laborum ratione veniam modi sit maiores, 
          architecto quaerat. Quod amet incidunt
          accusantium, expedita explicabo omnis cupiditate.
        </main>
      </div>
    </>
  )
}

