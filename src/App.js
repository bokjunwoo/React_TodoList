import ListContainer from './component/ListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

const Section = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid black;
  border-radius: 5px;
  max-width: 380px;
`

function App() {
  return (
    <div className="App">
      <Section className='container'>
        <ListContainer />
      </Section>
    </div>
  );
}

export default App;
