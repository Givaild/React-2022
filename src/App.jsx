import React from 'react'
import {Post} from './Post'


export function App() {
  

  return (
    <div>
    <Post 
      author="Givaildo de Andrade" 
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptates sequi nam atque cumque, provident delectus. Amet fugit sint perferendis doloribus, cumque libero, quis porro, tenetur sed quisquam voluptatem dolor."
      />
      <Post
        author="Gustavo"
        content= "Tenho 7 anos" 
      />
      <Post
        author="Henrique"
        content= "Tenho 7 anos" 
      />
   
    </div>
  )
}

