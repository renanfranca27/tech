import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (

    <div className={styles.container}>
      {/* Menu com estrutura correta */}
      <div className={styles.menu}>
          <section>
             TECH SOLUTIONS
          </section>
        <li>Inicio</li>
        <li>Serviços</li>
        <li>Sobre</li>
        <li>contato</li>
      </div>

    <div className={styles.head}>
      <section id={styles.texto}>
          <h1>
            Soluções de TI para <br></br>impulsionar seu negócio
          </h1>
          <section>
            <p>
              Transforme sua empresa com tecnologia de ponta e suporte <br></br> especializado
            </p>
          </section>

          <section className={styles.boto}>
              <button className={styles.botao1}>
                Fale Conosco
              </button>

            <section className={styles.botao2}>
                          <button>Nossos Serviços</button>
            </section>
          </section>
      </section>
    </div>

    </div>




      
  );
}
