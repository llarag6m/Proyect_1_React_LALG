import './style/QuoteBox.css'
const QuoteBox = ({handleChangeDato, dato}) => {

                

  console.log(dato)

  return (
    <section className='title'>
      <h1>Discover the galaxy</h1>
      <section>
        <button className='btn' onClick={handleChangeDato}>Next phrase</button>
        <article className='text'>
          <p>
            {dato.phrase}
          </p>
        </article>
      </section>
      <footer><h4>Copyright: {dato.author}</h4></footer>
    </section>
  )
}

export default QuoteBox

