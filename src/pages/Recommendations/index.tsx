import React from 'react';

import { Container, PageTitle, Topic, TopicTitle, Description } from './styles';

const Recommendations: React.FC = () => {
  return (
    <Container>
      <PageTitle>Recomendações</PageTitle>
      <Description>
        O bem-estar da comunidade é nossa prioridade, e com o advento da
        pandemia de COVID-19 devemos seguir as devidas recomendações para nós
        proteger e evitar o agravamento da pandemia.
      </Description>
      <TopicTitle>Compradores:</TopicTitle>
      <Topic>• Ao sair de casa utilize máscara.</Topic>
      <Topic>
        • Lembre-se sempre de respeitar o distanciamento social, o recomendado
        são 2 metros de distância.
      </Topic>
      <Topic>• Verifique o horário de funcionamento do estabelecimento.</Topic>
      <Topic>
        • Informe ao vendedor o que irá comprar, para obter informações de
        disponibilidade, e para que seja feita a organização e higienização da
        encomenda.
      </Topic>
      <Topic>
        • Caso necessite de troco informe ao vendedor a devida quantidade.
      </Topic>
      <TopicTitle>Vendedores:</TopicTitle>
      <Topic>• O uso de máscara é essencial.</Topic>
      <Topic>• Disponibilize álcool em gel 70% para os clientes.</Topic>
      <Topic>
        • Tome os devidos cuidados ao realizar o transporte dos produtos.
      </Topic>
      <Topic>• Higienize as máquinas de cartão de crédtio.</Topic>
      <Topic>
        • Condicione os alimentos em embalagens adequadas e higienizadas.
      </Topic>
      <Topic>
        • Preferencialmente combine horários com os compradores para evitar
        aglomerações.
      </Topic>
      <Topic>• Disponibilize um ambiente adequado e arejado.</Topic>
    </Container>
  );
};

export default Recommendations;
