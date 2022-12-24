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
      <p className='app-text'>Gm222 Maxsulotlari</p>
      <button className='app-btn' onClick={onChose}>Закрыть</button>
    </section>
  );
}

export default App;
