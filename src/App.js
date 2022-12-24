import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready()
  })

  const onChose = () => {
    tg.close()
  }

  return (
    <section className='app'>
      ISHLADI
      <button onClick={onChose}>Закрыть</button>
    </section>
  );
}

export default App;
