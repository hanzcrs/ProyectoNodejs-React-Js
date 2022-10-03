//USESSTATE es un hook para ocupar componentes
import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Components/Navbar'
import BookList from './Components/BookList'
import Form from './Components/Form'

function App() {
 //crear un estado de profesor sin parametros.
  const [book, setBook] = useState({
    Nombre: '',
    Apellido: '',
    CedulaIdentidad: 0,
    Domicilio: ''
  })
  const [books, setBooks] = useState([])
  const [listUpdated, setListUpdated] = useState(false)

    useEffect(() => {
      const getBooks = () => {
          fetch('http://localhost:9000/api')
          .then(res => res.json())
          .then(res => setBooks(res))
        }
    getBooks()
    setListUpdated(false)
    }, [listUpdated])

  return (
    <Fragment>
      <Navbar brand='Ingreso profesores'/>
        <div className="container">
          <div className="row">
          <div className="col-7">
            <h2 style={{textAlign: 'center'}}>Lista profesores</h2>
            <BookList book={book} setBook={setBook} books={books} setListUpdated={setListUpdated}/>
          </div>
          <div className="col-5">
            <h2 style={{textAlign: 'center'}}>Formulario ingreso profesor</h2>
            <Form book={book} setBook={setBook}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
// npm start para iniciar
export default App;