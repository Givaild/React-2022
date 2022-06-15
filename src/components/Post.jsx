import styles from "./Post.module.css"


export function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img  className={styles.avatar} src="https://github.com/diegodossantos23.png" />
                    <div className={styles.authorInfo}>
                        <strong>Diego dos Santos</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="15 de Junho de às 12:00"  dateTime="2022-06-15 12:00:20">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
            
            <p> Fala galeraa 👋</p>

            <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p> 👉 <a href="#"> diego.design/doctorcare</a></p>

            <p> <a href=""> #novoprojeto #nlw #rocketseat</a></p>

            </div>


        </article>
    )
}