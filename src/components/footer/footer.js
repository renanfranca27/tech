import Image from "next/image";
import styld from "@/components/footer/footer.css"; 

export default function footer(){
    return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Coluna 1 */}
        <div className="footer-col">
            <div className="footer-logo-container">
            <Image src="/icone.svg" alt="Logo" width={150} height={50} />
          <h2 className="footer-logo">TECH ALT</h2>

            </div>
          <p className="TextoFooter">
            Soluções tecnológicas inovadoras para empresas de todos os portes. <br />
            Transforme seu negócio com a Tech MTG.
          </p>
          <div className="footer-policies">
            <a href="#">Política de Privacidade</a> | <a href="#">Termos de Uso</a>
          </div>
        </div>

        {/* Coluna 2 */}
        <div className="footer-col">
          <h3>SERVIÇOS</h3>
          <ul>
            <li><a href="#">Suporte em TI</a></li>
            <li><a href="#">Criação de Sites</a></li>
            <li><a href="#">Computação em Nuvem</a></li>
            <li><a href="#">Infraestrutura e Redes</a></li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div className="footer-col">
          <h3>EMPRESA</h3>
          <ul>
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="#">Clientes</a></li>
            <li><a href="#">Carreiras</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </div>

      {/* Parte inferior */}
      <div className="footer-bottom">
        <p>© 2025 Tech MTG. Todos os direitos reservados.</p>
        <div className="footer-socials">
          <a href="#">🐦</a>
          <a href="#">📸</a>
          <a href="#">💼</a>
        </div>
      </div>
    </footer>
  );
}