import React from 'react';

const Form = ({book, setBook}) => {

    const handleChange = e => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    let{Nombre, Apellido, CedulaIdentidad, Domicilio} = book

    const handleSubmit = () => {
        CedulaIdentidad = parseInt(CedulaIdentidad, 10)
        //validación de los datos
        if (Nombre === '' || Apellido === '' || CedulaIdentidad <= 0  || Domicilio === '') {
            alert('Todos los campos son obligatorios')
            return
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(book)
        }
        fetch('http://localhost:9000/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setBook({
            Nombre: '',
            Apellido: '',
            CedulaIdentidad: 0,
            Domicilio: ''
        })
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombr" className="form-label">Nombre</label>
                <input value={Nombre} name="Nombre" onChange={handleChange} type="text" id="nombr" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <input value={Apellido} name="Apellido" onChange={handleChange} type="text" id="apellido" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="cedu" className="form-label">CedulaIdentidad</label>
                <input value={CedulaIdentidad}  name="CedulaIdentidad" onChange={handleChange} type="number" id="cedu" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="domi" className="form-label">Domicilio</label>
                <input value={Domicilio} name="Domicilio" onChange={handleChange} type="text" id="domi" className="form-control"/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
 
export default Form;