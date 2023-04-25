import { NavLink } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { CheckboxContainer, Form, LoginContainer } from "./styles";

export function Login() {
    return (
        <LoginContainer>
            <Logo />
            <Form>
                <input type="text" placeholder="Usuário" />
                <input type="password" placeholder="Senha" />
                <CheckboxContainer>
                    <label>
                        <input type="checkbox" />
                        Continuar logado
                    </label>
                </CheckboxContainer>
                <button>Logar</button>
            </Form>
            <NavLink to={'/register'}>
                Cadastrar-se
            </NavLink>
        </LoginContainer>
    )
}