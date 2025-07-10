import styld from "@/components/main/main.css"
import Image from "next/image";
export default function Main(){

    return(
        <div className="main">
  <div className="TextoMain">
      <h2>
        Nosso Serviços
      </h2>
      <p>
        Oferecemos soluções completas para atender todas as necessidades <br/> de TI da sua empresa.
      </p>
  </div>
  <div className="conteudo">
    <div className="consultoria">

<section className="texto1"> 
  <section>
   <Image
         src="/consultoria.svg"
         alt="Meu GIF"
         width={30}
         height={40}
       />
  </section>
  <h2>
    consultoria em TI
  </h2>
<p>
  Análise completa da infraestrutura<br/> tecnológica da sua empresa com <br/> recomendações estratégicas para<br/> otimização.
</p>
</section>
    </div>
  </div>
    
</div>
    );
}