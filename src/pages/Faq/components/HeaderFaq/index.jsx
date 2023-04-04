import { NavLink } from 'react-router-dom';
import { Logo } from '../../../../components/Logo';
export function HeaderFaq() {
    return (
        <div class="wrapper">
            <header class="header">
                <Logo />


                <nav class="nav">

                    <NavLink to='/'>
                        <a href="" class="nav-link">Ínicio</a>
                    </NavLink>

                    <NavLink to='/cadastro'>
                        <a href="" class="nav-link">Cadastro</a>
                    </NavLink>
                </nav>
            </header>
        </div>

    )
}