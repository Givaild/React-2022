import React from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
    <Sidebar />
      <main>
        <Post
          author="Givaildo de Andrade"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptates sequi nam atque cumque, provident delectus. Amet fugit sint perferendis doloribus, cumque libero, quis porro, tenetur sed quisquam voluptatem dolor."
        />
        <Post author="Gustavo" content="Tenho 7 anos" />
        <Post author="Henrique" content="Tenho 7 anos" />
      </main>
    </div>
    </div>
  );
}
