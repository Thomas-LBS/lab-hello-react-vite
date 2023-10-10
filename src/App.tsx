
import IronLogo from './assets/ironhack-logo-xs.png';
import MenuXS from './assets/menu-top-xs.png';
import Icon1 from './assets/icon1.png';
import Icon2 from './assets/icon2.png';
import Icon3 from './assets/icon3.png';
import Icon4 from './assets/icon4.png';
import './App.css'



function App() {
  return (
    <div className="App">
      <header>
        <div className="logo"><img class="logo" src={IronLogo} alt='ironhack logo' /></div>
        <nav className="menu"><img src={MenuXS} alt='xs menu' /></nav>        
      </header>
      <main>
        <section className="principal">
        <h1>Say hello to <br />
        ReactJS</h1>
        <p>You will learn how to use
        the most popular frontend library, and become a super Ninja developper.</p>
        <button>Awesome!</button>
        </section>

        <section className="gallery">
          <div>
          <img src={Icon1} alt='icon 1' />
          <h2>Declarative</h2>
          <article>React makes it painless to create interactive UIs</article>
          </div>

          <div>
          <img src={Icon2} alt='icon 2' />
          <h2>Components</h2>
          <article>React makes it painless to create interactive UIs</article>
          </div>

          <div>
          <img src={Icon3} alt='icon 3' />
          <h2>Single-Way</h2>
          <article>React makes it painless to create interactive UIs</article>
          </div>

          <div>
          <img src={Icon4} alt='icon 4' />
          <h2>JSX</h2>
          <article>React makes it painless to create interactive UIs</article>
          </div>

        </section>
      </main>
      
     
    </div>
  )
}

export default App
