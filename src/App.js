import { useEffect } from 'react';
import './App.css';
import Product from './Components/Product/Product';

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
      <p className='app-text'>DC Burger</p>
      <Product />
    </section>
  );
}

export default App;
