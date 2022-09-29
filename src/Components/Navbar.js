//importar react
import React from 'react';

const Navbar = ({brand}) => {
return (
    <nav className="navbar navbar bg-primary">
       <div className='container'>
        <a href="#!" className='navbar-brand'>{brand}</a>
       </div>
    </nav>
   );
}

export default Navbar;
