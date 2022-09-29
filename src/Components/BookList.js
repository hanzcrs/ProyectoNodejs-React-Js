import React from 'react';

const BookList = ({book, setBook, books, setListUpdated}) => {


    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    }

    let{Nombre, Apellido, CedulaIdentidad, Domicilio} = book
    const handleUpdate = id => {
        CedulaIdentidad = parseInt(CedulaIdentidad, 10)
        //validación de los datos
        if (Nombre === '' || Apellido === '' || CedulaIdentidad <= 0  || Domicilio === '') {
            alert('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(book)
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setBook({
            Nombre: '',
            Apellido: '',
            CedulaIdentidad: 0,
            Domicilio: ''
        })

        setListUpdated(true)
    }


    return ( 
        <table className="table table-striped">
            <thead>
                <tr className='table-info'>
                <th>id</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Cedula Identidad</th>
                <th>Domicilio</th>
                <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                {books.map(book => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.Nombre}</td>
                        <td>{book.Apellido}</td>
                        <td>{book.CedulaIdentidad}</td>
                        <td>{book.Domicilio}</td>

                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(book.id)} className="btn btn-danger">Delete</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={() => handleUpdate(book.id)} className="btn btn-dark">Update</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default BookList;