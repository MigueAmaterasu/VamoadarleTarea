import React, {Component}from 'react';
import AddFruit from './components/AddFruit/AddFruit';

class Header extends Component {
	render(){
			return <header className='Header'>

			<nav>
		<ul className="navBarContainer">
			<li className="navBarItem ">
				<a href="#perfil">Perfil</a>
			</li>
			<li className="navBarItem active">
				<a href="#home">Proteco store</a>
			</li>
			<li className ="navBarItem active">
			<a href="#AddFruit">Agregar Fruta</a>
			</li>
		</ul>
		</nav>
		</header>	
	

	}
}
export default Header;