import './App.css'
import colors from './data/data'
import ColorBoxContainer from './Components/ColourBoxesContainer'

function App() {
  return (
    <>
      <ColorBoxContainer colors={colors} />
    </>
  )
}

export default App