import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { setDarkMode, setLightMode } from './features/modeSlice';

function App() {

  const mode = useSelector(state => state)
  const dispatcher = useDispatch()

  const onToggleModeClick = e => {
    const actionCreator = mode.darkMode ? setLightMode : setDarkMode
    dispatcher(actionCreator())
  }
  return (
    <div style={{ backgroundColor: mode.color2, color: mode.textColor }} className="App">
      <button type = "button" onClick={onToggleModeClick}>{mode.darkMode ? ' Set Light Mode' : 'Set Dark Mode'}</button>
      <Nav />
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
