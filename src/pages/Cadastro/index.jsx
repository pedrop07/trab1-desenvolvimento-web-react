import { useEffect } from 'react'
import { Header } from './components/Header'
import './styles.css'

export function Cadastro() {
    useEffect(() => {
        document.title = 'Spotify - Cadastro'
    }, [])

    return (
        <>
            <Header />
            
            <div className="container">

                <div className="title">Cadastro</div>
                <form action="#">
                    <div className="user__details">
                        <div className="input__box">
                            <span className="details">Nome completo</span>
                            <input type="text" placeholder="Insira seu nome completo" required />
                        </div>
                        <div className="input__box">
                            <span className="details">Nome do perfil</span>
                            <input type="text" placeholder="Insira seu nome de perfil" required />
                        </div>
                        <div className="input__box">
                            <span className="details">E-mail</span>
                            <input type="email" placeholder="Insira seu e-mail" required />
                        </div>
                        <div className="input__box">
                            <span className="details">Número de telefone</span>
                            <input type="tel" pattern="[0-9]{2}[0-9]{5}[0-9]{4}" placeholder="Número de celular com DDD" required />
                        </div>
                        <div className="input__box">
                            <span className="details">Senha</span>
                            <input type="password" placeholder="********" required />
                        </div>
                        <div className="input__box">
                            <span className="details">Confirmar senha</span>
                            <input type="password" placeholder="********" required />
                        </div>

                    </div>
                    <div className="gender__details">
                        <input type="radio" name="gender" id="dot-1" />
                        <input type="radio" name="gender" id="dot-2" />
                        <input type="radio" name="gender" id="dot-3" />
                        <span className="gender__title">Gênero</span>
                        <div className="category">
                            <label htmlFor="dot-1">
                                <span className="dot one"></span>
                                <span>Masculino</span>
                            </label>
                            <label htmlFor="dot-2">
                                <span className="dot two"></span>
                                <span>Feminino</span>
                            </label>
                            <label htmlFor="dot-3">
                                <span className="dot three"></span>
                                <span>Outros</span>
                            </label>
                        </div>
                    </div>
                    <div className="checkbox__details">
                        <input type="checkbox" id="check-1" name="check-1" value="news" />
                        <label htmlFor="news"> Eu quero receber novidades por e-mail</label><br />
                        <input type="checkbox" id="check-2" name="check-2" value="termos" />
                        <label htmlFor="termos"> Eu concordo com os termos e condições de uso</label><br />
                    </div>
                    <div className="button">
                        <input type="submit" value="Registrar-se" />
                    </div>
                </form>

            </div>
        </>
    )
}