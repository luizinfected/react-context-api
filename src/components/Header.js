import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header>
            <p>Luiz</p>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/empresa">Empresa</Link>
                <Link to="/produtos">Produtos</Link>
                <Link to="/contato">Contato</Link>
            </ul>
        </header>
    )
}

export default Header