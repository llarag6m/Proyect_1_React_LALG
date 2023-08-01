import './style/QuoteBox.css'
const QuoteBox = ({handleChangeDato, dato}) => {

  console.log(dato)

  return (
    <section className='title'>
      <h1>Frases del Universo</h1>
      <section>
        <button className='btn' onClick={handleChangeDato}>HERE CLICK</button>
        <article className='text'>
          <p>
            {dato.phrase}
          </p>
        </article>
      </section>
      <footer><h4>Derechos de Autor: {dato.author}</h4></footer>
    </section>
  )
}

export default QuoteBox

