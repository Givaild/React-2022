import styles from "./Sidebar.module.css"

export function Sidebar(){
    return(
            <aside className={styles.sidebar}>
                <img className={styles.cover} 
                src="https://media.istockphoto.com/photos/react-inscription-against-laptop-and-code-background-picture-id1389287506?s=612x612"
                 />
                    <div className={styles.profile}>
                        <strong>Givaildo de Andrade</strong>
                        <span>Web Desingner Intern</span>
                    </div>

                    <footer>
                        <a href="#">
                            Editar seu perfil
                        </a>
                    </footer>
            
            </aside>
    )
}