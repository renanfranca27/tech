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
          <ul className={styles.menubar}>
        <li>Inicio</li>
        <li>Serviços</li>
        <li>Sobre</li>
        <li>contato</li>

          </ul>
      </div>

    <div className={styles.head}>
  <div className={styles.heroContent}>
    {/* Texto */}
    <section className={styles.texto}>
      <h1>Soluções de TI para <br /> impulsionar seu negócio</h1>
      <p>Transforme sua empresa com tecnologia de ponta e suporte <br /> especializado</p>
      <div className={styles.botoes}>
        <button className={styles.botao1}>Fale Conosco</button>
        <button className={styles.botao2}>Nossos Serviços</button>
      </div>
    </section>

    {/* Imagem */}
    <section className={styles.heroImage}>
      <Image src="/3d-render.png" alt="Descrição da imagem" width={600} height={400} />
    </section>
  </div>
</div>
</div>



      
  );
}
