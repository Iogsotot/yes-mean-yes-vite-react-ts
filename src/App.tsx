import './App.css'
import Buttons from './components/buttons'

const adventure = {
  name: 'гулять',
  place: 'парк',
  time: 'вечером'
}

function App() {

  return (
    <main>
      
      <div className="emotion-avatar">

      </div>
      <div>
        <p>Привет, Лёха!</p>
        <p>Пойдём сегодня {adventure.name} в {adventure.place}?</p>
      </div>
      <Buttons />
    </main>
  )
}

export default App
