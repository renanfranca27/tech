import Image from "next/image";
import styles from "./page.module.css";
import Main from "@/components/main/Main.js";
import Sobre from "@/components/sobre/Sobre.js";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Menu com estrutura correta */}
      <div className={styles.menu}>
        <section className={styles.navbar}>
          <Image src="/icone.svg" alt="Descrição da imagem" width={60} height={40} />
           <h4>TECH SOLUTIONS </h4>
        </section>
        <ul className={styles.menubar}>
          <li>Inicio</li>
          <li>Serviços</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </div>

      <div className={styles.head}>
        <div className={styles.heroContent}>
          {/* Texto */}
          <section className={styles.texto}>
            <h1>        
              Soluções de TI para <br /> impulsionar seu negócio
            </h1>
            <p>
              Transforme sua empresa com tecnologia de ponta e suporte <br /> especializado
            </p>
            <div className={styles.botoes}>
              <button className={styles.botao1}>Fale Conosco</button>
              <button className={styles.botao2}>Nossos Serviços</button>
            </div>
          </section>

          {/* Imagem */}
          <section className={styles.heroImage}>
            <Image src="/programming-amico.svg" alt="Descrição da imagem" width={700} height={540} />
          </section>
        </div>
      </div>

      {/* Componente Main */}
      <Main />
      <Sobre />
    </div>
  );
}
