import styld from "@/components/main/main.css"
import Image from "next/image";
export default function Main(){

    return(
        <div className="main">
  <div className="TextoMain">
      <h3>
        Nosso Serviços
      </h3>
      <p>
        Oferecemos soluções completas para atender todas as necessidades <br/> de TI da sua empresa.
      </p>
  </div>
  <div className="container">   
  <div className="conteudo">
    <div className="consultoria">

<div className="texto1"> 
  <div className="icone">

   <Image src="/consutoria.png" alt="Descrição da imagem" width={30} height={30} />

  </div>
  <div className="conteudo">
  <h3>
    consultoria em TI
  </h3>
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
            src="/seguranca.png"
            alt="Meu GIF"
            width={40}
            height={40}
          />
        </div>
        <div className="conteudo">
          <h3>
            Segurança da Informação
          </h3>
          <p>
            Proteção completa contra ameaças cibernéticas, incluindo firewall, antivírus e treinamento de equipe.</p>
        </div>

      </div>

    </div>
    <div className="infraestrutura"> 
      <div className="texto3">
        <div className="icone">
          <Image
            src="/nuvem.png"
            alt="Meu GIF"
            width={40}
            height={40}
          />
        </div>
        <div className="conteudo">
          <h3>
            Infraestrutura de TI
          </h3>
          <p>
           Migração e gerenciamento de serviços em nuvem para maior flexibilidade, segurança e redução de custos. </p>
        </div>

      </div>

    </div>
    </div>
    <div className="container2">
      <div className="suporte-tecnico ">   

      
      <div className="texto4">
        <div className="icone">
          <Image
            src="/suporte.png"
            alt="Meu GIF"
            width={40}
            height={40}
          />
        </div>
        <div className="conteudo">
          <h3>
            Suporte Técnico
          </h3>
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
            src="/gestao.png"
            alt="Meu GIF"
            width={40}
            height={40}
          />
        </div>
        <div className="conteudo">
          <h3>
            Gestão de Redes
          </h3>
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