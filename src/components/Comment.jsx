import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"

export function  Comment () {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/Givaild.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}></div>
                        <strong>Gil Andrade</strong>
                        <time title="15 de Junho de às 12:00"  dateTime="2022-06-15 12:00:20">Cerda de 1h atás </time>

                    </header>
                        <p>Muito bom Devon, parabéns </p>
                        

                </div>
                <button title="Deletar comentário">
                    <Trash size={20}/>
                </button>

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