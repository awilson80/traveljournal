import Header from './components/Header';
import Card from './components/Card';
import data from './data';

export default function App() {
  const cards = data.map((entry) => {
    return <Card key={entry.id} entry={entry} />;
  });

  return (
    <div>
      <Header />
      <div className='cards'>{cards}</div>
    </div>
  );
}
