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
  <div className="container">   
  <div className="conteudo">
    <div className="consultoria">

<div className="texto1"> 
  <div className="icone">
    
   <Image
         src="/consultoria.svg"
         alt="Meu GIF"
         width={30}
         height={40}
       />
  </div>
  <div className="conteudo">

  <h2>
    consultoria em TI
  </h2>
<p>
  Análise completa da infraestrutura<br/> tecnológica da sua empresa com <br/> recomendações estratégicas para<br/> otimização.
</p>
  </div>

</div>
    </div>

    
  </div>
    <div className="suporte">
      <div className="texto2">
        <div className="icone">
          <Image
            src="/suporte.svg"
            alt="Meu GIF"
            width={30}
            height={40}
          />
        </div>
        <div className="conteudo">
          <h2>
            Segurança da Informação
          </h2>
          <p>
            Proteção completa contra ameaças cibernéticas, incluindo firewall, antivírus e treinamento de equipe.         </p>
        </div>

      </div>

    </div>
    <div className="infraestrutura"> 
      <div className="texto3">
        <div className="icone">
          <Image
            src="/infraestrutura.svg"
            alt="Meu GIF"
            width={30}
            height={40}
          />
        </div>
        <div className="conteudo">
          <h2>
            Infraestrutura de TI
          </h2>
          <p>
           Migração e gerenciamento de serviços em nuvem para maior flexibilidade, segurança e redução de custos.          </p>
        </div>

      </div>


    </div>
    </div>
    <div className="container2">
      <div className="suporte-tecnico ">   

      
      <div className="texto4">
        <div className="icone">
          <Image
            src="/suporte-tecnico.svg"
            alt="Meu GIF"
            width={30}
            height={40}
          />
        </div>
        <div className="conteudo">
          <h2>
            Suporte Técnico
          </h2>
          <p>
           Atendimento rápido e eficiente para resolver problemas técnicos e manter sua operação funcionando.
          </p>
        </div>
      </div>
 
</div>
    <div className="GestaodeRedes">
      <div className="texto5">
        <div className="icone">
          <Image
            src="/gestao-de-redes.svg"
            alt="Meu GIF"
            width={30}
            height={40}
          />
        </div>
        <div className="conteudo">
          <h2>
            Gestão de Redes
          </h2>
          <p>
           Implementação e manutenção de redes corporativas seguras, estáveis e de alto desempenho.
          </p>
        </div>
      </div>

    </div>

    </div>

</div> 
    );
}