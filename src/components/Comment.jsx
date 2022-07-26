import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"

export function  Comment ({content}) {
    return (
        <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/Givaild.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Givaildo de Andrade</strong>
                            <time title="15 de Junho de às 12:00"  dateTime="2022-06-15 12:00:20">Cerca de 1h atrás </time>                           
                        </div>
                        
                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p> {content} </p> 
                </div>
                
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
        
    )
}