import { useState } from 'react';
import { Container, Diagramm } from 'components';

const initialInputData = [
  { name: 'Landing Page', time: 7.4 },
  { name: 'Configurator', time: 0.2 },
  { name: 'Check-out', time: 7.0 },
  { name: 'Deal', time: 3.8 },
];

export const App = () => {
  const [data, setData] = useState(initialInputData);

  const changeTimeInputData = () => {
    const newData = data.map((item) => ({
      name: item.name,
      time: +(Math.random() * 10 + 1).toFixed(1),
    }));

    setData(newData);
  };

  return (
    <Container>
      <Diagramm
        title="SPENT TIME (SECONDS)"
        initialInputData={data}
        updateTime={changeTimeInputData}
      ></Diagramm>
    </Container>
  );
};
