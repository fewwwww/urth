import Nav from '../src/components/Nav'
import Home from '../src/components/Home'
import Products from '../src/components/Products'
import Team from '../src/components/Team'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'
import {useState} from 'react'

function App() {
  const [route, setRoute] = useState('Home')

  const changeRoute = (route) => {
    setRoute(route)
  }

  let body = <Home />
  if (route === 'products') {
    body = <Products />
  }
  if (route === 'team') {
    body = <Team />
  }
  if (route === 'contact') {
    body = <Contact />
  }

  return (
    <div>
      <Nav changeRoute={changeRoute}/>
      {body}
      {route==='contact'?null:<Footer />}
    </div>
  );
}

export default App;
