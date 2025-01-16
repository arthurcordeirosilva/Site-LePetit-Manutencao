import React from 'react';
import Header from './components/Header';
import Contact from './components/contact';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './App.css';

const location ={
  lat: -22.892812525408765,
  lng: -47.12060735099715,
};

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};
function App() {
  return (
    <div className="App">
      <Header />
      <section id="inicio" className="welcome-section">
  <div className="content-box">
    <h2>Bem-vindo à LePetit Manutenções</h2>
    <p>Sua parceira confiável em manutenção de máquinas de solda, corte e plasma!</p>
    <p>
      Na <strong>LePetit</strong>, nos dedicamos a oferecer soluções completas e de qualidade para garantir o funcionamento ideal de suas máquinas. Com anos de experiência no mercado, somos especializados em serviços de manutenção preventiva e corretiva, proporcionando tranquilidade e eficiência para o seu negócio.
    </p>
  </div>
</section>
      <h3>Nossos serviços incluem:</h3>
      <ul>
        <li><strong>Manutenção de Máquinas de Solda:</strong> Garantimos o perfeito funcionamento das suas máquinas, realizando ajustes e reparos para que seus processos de soldagem sejam sempre seguros e eficientes.</li>
        <li><strong>Manutenção de Máquinas de Corte:</strong> Com a nossa manutenção especializada, suas máquinas de corte estarão sempre afiadas e prontas para realizar cortes de precisão.</li>
        <li><strong>Manutenção de Máquinas de Plasma:</strong> Consertamos e realizamos manutenção em máquinas de plasma, com foco em prolongar a vida útil e melhorar o desempenho do equipamento.</li>
      </ul>

      <h3>Por que escolher a <strong>LePetit</strong>?</h3>
      <ul>
        <li><strong>Experiência e Qualidade:</strong> Profissionais qualificados e experientes para atender suas necessidades de manutenção.</li>
        <li><strong>Atendimento Personalizado:</strong> Oferecemos soluções sob medida, com foco na sua total satisfação.</li>
        <li><strong>Rapidez e Eficiência:</strong> Trabalhamos com prazos justos e serviços rápidos, sem perder a qualidade.</li>
      </ul>

      <p>
        Entre em contato conosco e descubra como podemos ajudar sua empresa a operar com mais segurança e eficiência!
      </p>
      <section id="sobre-nos">
        <h2>Sobre Nós</h2>
        <p>Informações sobre a empresa e sua história.</p>
      </section>
      {/* conteudo sobre nós */}
      
      
      <div className="section">
        <h2>História da LePetit Manutenção</h2>
        <p>
          Fundada em abril de 2022, a Le Petit Manutenção oferece serviços especializados de consultoria e manutenção em equipamentos de solda, corte a plasma e robôs industriais. Somos uma assistência técnica multimarcas, comprometida com a excelência.
          À frente da empresa está Tiago Le Petit, Tecnólogo em Automação Industrial e profissional com mais de 16 anos de experiência no reparo e manutenção industrial. Treinado por grandes fabricantes, como Miller, Hypertherm, ESAB, SUMIG e GULLCO (no Canadá), Tiago traz credenciais sólidas e vivência em duas das maiores assistências técnicas autorizadas de Campinas-SP.
        </p>
        <p>
        Entre nossos principais clientes estão grandes nomes como AQUAGEL, ARTINOX, COOPERATIVA HOLAMBRA, CCL – CAMPINAS CORTE LASER, EXCEED, KREITON, KROHNE, KSPG, STUCKI, NITROTEC, PARASON, SOLUFIL e SULCORTE, além de diversas empresas de médio e pequeno porte.
        Oferecemos serviços de manutenção preditiva, preventiva e corretiva, sempre priorizando soluções personalizadas para atender às necessidades específicas de cada cliente.
        </p>
      </div>
      
      <div className="section">
        <h2>Nosso Compromisso</h2>
        <p>
          Ao longo dos anos, a LePetit Manutenção tem se consolidado como referência no setor, oferecendo manutenção preventiva e corretiva para uma ampla gama de máquinas e equipamentos, sempre com a preocupação de atender às necessidades específicas de cada cliente.
        </p>
        <p>
          Estamos comprometidos em continuar a evolução do mercado, com soluções que atendem a todos os tipos de necessidade, com a qualidade que nossos clientes esperam e merecem.
        </p>
      </div>
      <section id="servicos">
        <h2>Serviços e Especialidades</h2>
      </section>
      {/* conteudo sobre serviços */}
      <div className="section">
       
        <ul>
          <li>
            <h3>Manutenção Preventiva</h3>
            <p>
              Realizamos inspeções regulares e ajustes em suas máquinas para evitar falhas inesperadas, aumentando a vida útil e a eficiência dos equipamentos.
            </p>
          </li>
          <li>
            <h3>Manutenção Corretiva</h3>
            <p>
              Em caso de falhas ou defeitos, nossa equipe está pronta para diagnosticar rapidamente o problema e realizar os reparos necessários para minimizar o tempo de inatividade e garantir que sua produção seja retomada sem demora.
            </p>
          </li>
          <li>
            <h3>Instalação de Sistemas de Corte e Plasma</h3>
            <p>
              Se você está adquirindo novas máquinas ou precisa de uma atualização em seu sistema de corte ou plasma, realizamos a instalação com precisão e expertise.
            </p>
          </li>
          <li>
            <h3>Consultoria Técnica</h3>
            <p>
              Oferecemos consultoria especializada para otimização dos processos de solda e corte, ajudando nossos clientes a melhorar a produtividade e reduzir custos.
            </p>
          </li>
        </ul>
      </div>

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
        <ul>
          Nosso diferencial está na combinação de qualidade, agilidade e eficiência. Estamos sempre prontos para resolver ocorrências que impactem a produtividade da sua empresa, estabelecendo uma relação de confiança e parceria.
          Além disso, oferecemos suporte via WhatsApp, otimizando o tempo de resposta e agilizando soluções para os seus problemas.
        </ul>
      </div>


       {/* Seção de localização */}
       <section id="localizacao">
        <h2>Localização</h2>
        <p>Veja onde estamos localizados:</p>
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