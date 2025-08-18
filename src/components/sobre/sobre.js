import Image from "next/image";
import styld from "@/components/sobre/sobre.css";
export default function sobre(){

    return(
        <body>
    <section class="about">
        <div class="about-content">
            <h2>Sobre a TechSolutions</h2>
            <p>Na TechSolutions, oferecemos soluções tecnológicas personalizadas.<br/> Nossa missão é ajudar empresas de todos os portes a transformar <br/> desafios em oportunidades, com atendimento ágil e eficiente.</p>
            <ul>
                <li><span class="check">✔</span> Equipe altamente qualificada e certificada</li>
                <li><span class="check">✔</span> Atendimento ágil e personalizado</li>
                <li><span class="check">✔</span> Soluções tecnológicas de ponta</li>
                <li><span class="check">✔</span> Compromisso com resultados</li>
            </ul>
            <section className="bottao">
                 <a href="#equipe" class="btn">Conheça Nossa Equipe</a>
            </section>
        </div>
        <div class="ceo-info">
            
            <div class="ceo-details">
                <section className="ceo-img">
                    <Image src="/renan.JPEG" alt="CEO da TechSolutions" width={150} height={150} className="ceo-photo" />  
                </section>
                <h3> Renan França</h3>
                <p><strong>CEO & Fundador</strong></p>
                <blockquote>&quot;Nossa missão é fornecer soluções tecnológicas que realmente façam <br/> a diferença no crescimento e na eficiência dos nossos clientes.&quot;</blockquote>
            </div>
        </div>
        {/* <a href="#equipe" class="btn">Conheça Nossa Equipe</a> */} 
    </section>
</body>




    );
}