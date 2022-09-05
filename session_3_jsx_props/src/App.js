import NameCard from "./NameCard";
import Card from "./Card";

function App() {
  return (
    <div>
      <Card>
        <NameCard name='Alice' age='20'>
          <div>This is my inner Namecard</div>
        </NameCard>
        <NameCard name='Bob' age='21' />
        <NameCard name='Cris' age='22' />
      </Card>
    </div>
  );
}

export default App;
