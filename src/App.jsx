import { useState } from 'react'
import './App.css'
import DataDb from "./db/quote.json"
import { getData } from './utils/random'
import QuoteBox from './components/QuoteBox'

const backgroundP = ["space1","space2","space3","space4"]

function App() {

//console.log(getDato(DatosDb))

const [data, setData] = useState(getData(DataDb))
const [background, setBackground] = useState(getData(backgroundP))


const handleChangeDato = () =>{
  setData(getData(DataDb))
  setBackground(getData(backgroundP))
}

  return (
    <main className={` FondsPosition ${background}`} >
      <QuoteBox handleChangeDato = {handleChangeDato} dato = {data}/>
    </main>
  )
}


export default App
