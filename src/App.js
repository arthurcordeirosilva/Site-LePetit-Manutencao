import React from 'react';
import Header from './components/Header';
import Contact from './components/contact';
import Servicos from './components/Servicos';
import Info from './components/info';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './App.css';

const location ={
  lat: -22.892812525408765,
  lng: -47.12060735099715,
};

const mapContainerStyle = {
  width: "100%", // O mapa ocupará 100% da largura do contêiner pai
  height: "50vh", // A altura será 50% da altura da janela de visualização
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" // Sombra leve
};
function App() {
  return (
    <div className="App">
      <Header />
      <section id="inicio" className="welcome-section">
  <div className="content-box">
 <h2>Manutenção Especializada com Segurança e Qualidade</h2>
<p>
  Na <strong>LePetit</strong>, cuidamos da manutenção das suas máquinas de solda, corte e plasma com expertise e compromisso. Evitamos paradas inesperadas e garantimos eficiência para o seu negócio.
</p>
<p>
  Conte com nossos serviços de <strong>manutenção preventiva e corretiva</strong> para manter suas máquinas sempre em perfeito funcionamento.
</p>
  </div>
</section>
  <div className='levemente-pro-lado'> 
<h3>Por que escolher a <strong>LePetit</strong>?</h3>
<ul>
  <li><strong>Experiência e Qualidade:</strong> Profissionais qualificados e experientes para atender suas necessidades de manutenção.</li>
  <li><strong>Atendimento Personalizado:</strong> Soluções sob medida, focadas na sua total satisfação.</li>
  <li><strong>Rapidez e Eficiência:</strong> Prazos justos e serviços ágeis, sem perder a qualidade.</li>
</ul>
<p>
  Entre em contato conosco e descubra como podemos ajudar sua empresa a operar com mais segurança e eficiência!
</p>
</div>  
      <section id="sobre-nos">
        <div className='levemente-pro-lado'>
  <h2>Sobre Nós</h2>
  <p>
    Fundada em abril de 2022, a <strong>LePetit Manutenção</strong> é especializada em consultoria e manutenção de equipamentos de solda, corte a plasma e robôs industriais. Somos uma assistência técnica multimarcas, comprometida com a excelência.
  </p>
  <p>
    À frente da empresa está <strong>Tiago Le Petit</strong>, Tecnólogo em Automação Industrial com mais de 16 anos de experiência. Treinado por grandes fabricantes como Miller, Hypertherm, ESAB, SUMIG e GULLCO (no Canadá), Tiago traz credenciais sólidas e vivência em duas das maiores assistências técnicas autorizadas de Campinas-SP.
  </p>
  <p>
    Entre nossos principais clientes estão grandes nomes como <strong>AQUAGEL, ARTINOX, COOPERATIVA HOLAMBRA, CCL – CAMPINAS CORTE LASER, EXCEED, KREITON, KROHNE, KSPG, STUCKI, NITROTEC, PARASON, SOLUFIL e SULCORTE</strong>, além de diversas empresas de médio e pequeno porte.
  </p>
  </div>
</section>
      <Info/>

     <div className="section">
  <h2>Nosso Compromisso</h2>
  <p>
    Na <strong>LePetit Manutenção</strong>, estamos comprometidos em oferecer soluções que atendam às necessidades específicas de cada cliente. Com manutenção preventiva e corretiva, garantimos o funcionamento ideal das suas máquinas, evitando paradas inesperadas e aumentando a produtividade.
  </p>
  <p>
    Nossa missão é continuar evoluindo no mercado, proporcionando serviços de alta qualidade e mantendo a confiança dos nossos clientes.
  </p>
</div>
      <section id="servicos">
        <h2>Serviços e Especialidades</h2>

        <Servicos />
        <div className='levemente-pro-lado'>
        <h3>Nossos serviços incluem:</h3>
      <ul>
        <li><strong>Manutenção de Máquinas de Solda:</strong> Garantimos o perfeito funcionamento das suas máquinas, realizando ajustes e reparos para que seus processos de soldagem sejam sempre seguros e eficientes.</li>
        <li><strong>Manutenção de Máquinas de Corte:</strong> Com a nossa manutenção especializada, suas máquinas de corte estarão sempre afiadas e prontas para realizar cortes de precisão.</li>
        <li><strong>Manutenção de Máquinas de Plasma:</strong> Consertamos e realizamos manutenção em máquinas de plasma, com foco em prolongar a vida útil e melhorar o desempenho do equipamento.</li>
      </ul>
      </div>
      </section>
      {/* conteudo sobre serviços */}

            <div className="section">
        <h2>Benefícios de Escolher a LePetit Manutenção</h2>
        <ul>
          <li><strong>Maior Eficiência:</strong> Com a nossa manutenção preventiva, sua máquina terá um desempenho otimizado, com menos paradas e maior produção.</li>
          <li><strong>Redução de Custos:</strong> Evite gastos inesperados com manutenções corretivas. Com nossos serviços preventivos, você minimiza os custos com reparos urgentes e danos graves.</li>
          <li><strong>Segurança:</strong> Garantimos que suas máquinas estejam em conformidade com as normas de segurança, evitando acidentes e riscos de operação.</li>
          <li><strong>Atendimento Personalizado:</strong> Nossos serviços são adaptados às necessidades específicas de cada cliente, garantindo soluções sob medida para o seu negócio.</li>
        </ul>
      </div>

      <div className="section">
        <h2>Diferenciais da LePetit Manutenções</h2>
        <p>
          Nosso diferencial está na combinação de <strong>qualidade, agilidade e eficiência</strong>. Estamos sempre prontos para resolver ocorrências que impactem a produtividade da sua empresa, estabelecendo uma relação de confiança e parceria.
        </p>
        <p>
          Além disso, oferecemos suporte via <strong>WhatsApp</strong>, otimizando o tempo de resposta e agilizando soluções para os seus problemas.
        </p>
      </div>


       {/* Seção de localização */}
        <section id="localizacao">
          <Contact />
          <LoadScript googleMapsApiKey="AIzaSyAUoWSFjsCgwS5zHTM-Cp1-Ngy6fXnuJoE">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={location}
              zoom={17}
              options={{
                mapId: 'MAP_ID_PERSONALIZADO', // Substitua pelo seu Map ID no Google Cloud Console
              }}
            >
              <Marker position={location} />
            </GoogleMap>
          </LoadScript>
        </section>
      {/* rodapé */}
      <div className="footer">
        <p>LePetit Manutenções | Todos os direitos reservados</p>
      </div>
    </div>
    
  );
}

export default App;