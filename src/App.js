import React from 'react';
import Header from './components/Header';
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
      <section id="inicio">
        <h2>Bem-vindo à LePetit Manutenções</h2>
        <p>Sua parceira confiável em manutenção de máquinas de solda, corte e plasma!</p>
      </section>
      <p>
        Na <strong>LePetit</strong>, nos dedicamos a oferecer soluções completas e de qualidade para garantir o funcionamento ideal de suas máquinas. Com anos de experiência no mercado, somos especializados em serviços de manutenção preventiva e corretiva, proporcionando tranquilidade e eficiência para o seu negócio.
      </p>
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
      <div>
        <h1>Sobre nós</h1>
        <p>Conheça a nossa história e experiência no mercado de manutenção de máquinas de solda, corte e plasma.</p>
      </div>
      
      <div className="section">
        <h2>História da LePetit Manutenções</h2>
        <p>
          A LePetit Manutenções foi fundada com o objetivo de fornecer soluções de alta qualidade e confiança no mercado de manutenção de máquinas de solda, corte e plasma. Com anos de experiência no setor, nossa missão sempre foi oferecer serviços especializados, com foco na eficiência e no compromisso com nossos clientes.
        </p>
        <p>
          Desde o início, buscamos estabelecer uma relação de confiança e transparência, sendo reconhecidos pela nossa capacidade de diagnosticar e resolver problemas de maneira ágil e eficaz. Nossa equipe de técnicos altamente capacitados está sempre atualizada com as mais recentes inovações e tecnologias, garantindo que os equipamentos de nossos clientes operem com o máximo de desempenho e segurança.
        </p>
      </div>
      
      <div className="section">
        <h2>Nosso Compromisso</h2>
        <p>
          Ao longo dos anos, a LePetit Manutenções tem se consolidado como referência no setor, oferecendo manutenção preventiva e corretiva para uma ampla gama de máquinas e equipamentos, sempre com a preocupação de atender às necessidades específicas de cada cliente.
        </p>
        <p>
          Estamos comprometidos em continuar a evolução do mercado, com soluções que atendem a todos os tipos de necessidade, com a qualidade que nossos clientes esperam e merecem.
        </p>
      </div>
      <section id="servicos">
        <h2>Serviços</h2>
        <p>Detalhes sobre os serviços que oferecemos.</p>
      </section>
      {/* conteudo sobre serviços */}
      <div>
        <h1>Serviços</h1>
        <p>Conheça os serviços especializados que oferecemos para a manutenção de máquinas de solda, corte e plasma.</p>
      </div>

      <div className="section">
        <h2>Detalhamento dos Serviços</h2>
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
        <h2>Benefícios de Escolher a LePetit Manutenções</h2>
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
          <li><strong>Equipe Especializada:</strong> Contamos com técnicos altamente qualificados e em constante atualização, com experiência no mercado e em diversas marcas e modelos de máquinas.</li>
          <li><strong>Tecnologia de Ponta:</strong> Utilizamos equipamentos e ferramentas de última geração para garantir a melhor qualidade e precisão nos serviços prestados.</li>
          <li><strong>Atendimento Ágil e Eficiente:</strong> Sabemos o quanto a sua produção é importante. Por isso, priorizamos um atendimento rápido e eficaz, com mínimo tempo de inatividade.</li>
          <li><strong>Compromisso com a Qualidade:</strong> Todos os nossos serviços são realizados com o máximo de cuidado e atenção aos detalhes, para garantir que suas máquinas operem da melhor forma possível.</li>
        </ul>
      </div>


       {/* Seção de localização */}
       <section id="localizacao">
        <h2>Localização</h2>
        <p>Veja onde estamos localizados:</p>
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