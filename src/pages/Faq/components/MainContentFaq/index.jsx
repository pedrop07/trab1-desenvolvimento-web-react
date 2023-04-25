import { MagnifyingGlass } from 'phosphor-react'

export function MainContentFaq() {
  return (
    <>
      <h1>ATENDIMENTO DO SPOTIFY</h1>

      <div className="search-box-container">
        <h2>Como podemos ajudar?</h2>
        <div className="search-box">
          <input type="text" name="" id="" placeholder="Qual a sua dúvida ?" />
          <a href="##" className="icon">
            <MagnifyingGlass size={22} />
          </a>
        </div>
      </div>

      <div className="main-content-container">
        <div className="card">
          <span>PAGAMENTOS</span>
        </div>
        <div className="card">
          <span>PRIVACIDADE</span>
        </div>
        <div className="card">
          <span>DISPOSITIVOS</span>
        </div>
      </div>

      <div className="faq-section">
        <header>
          <p>Tópicos mais frequentes</p>
        </header>

        <details>
          <summary>
            <span className="material-symbols-outlined">
              Assine ou entre num plano Premium Familia
            </span>
          </summary>
          <p>
            Acesse Premium Familia, você precisa entrar com sua conta no
            aplicativo, em seguida clique em começar, digite seu endereço e
            escolha a forma de pagamento odeal e siga as istruções na tela
          </p>
        </details>

        <hr />

        <details>
          <summary>
            <span className="material-symbols-outlined">
              Formas de pagamento
            </span>
          </summary>
          <p>
            Você pode pagar pela conta premium de muitas maneiras, dentra elas,
            cartões de crédito, cartões pré-pago, paypal, vales-presente e
            pagamento móvel
          </p>
        </details>

        <hr />

        <details>
          <summary>
            <span className="material-symbols-outlined">
              Não consigo redefinir minha senha
            </span>
          </summary>
          <p>
            Você precisa ter acesso ao endereço de e-mail cadastrado na sua
            conta do Spotify para abrir o link de redefinição de senha que nós
            enviamos.Caso você não tenha acesso, estas são algumas
            opções:Recupere o acesso ao endereço de e-mail, se possível.Crie uma
            nova conta e comece do zero.
          </p>
        </details>

        <hr />

        <details>
          <summary>
            <span className="material-symbols-outlined">
              Ajuda para entrar com facebook
            </span>
          </summary>
          <p>
            Para entrar no Spotify com sua conta do Facebook, use essa rede
            social na inscrição ou faça a vinculação. Também é possível exibir a
            foto e o nome do seu perfil do Facebook no app e encontrar seus
            amigos no Spotify com facilidade.
          </p>
        </details>

        <hr />

        <details>
          <summary>
            <span className="material-symbols-outlined">
              Não lembro minhas informações de login
            </span>
          </summary>
          <p>
            Se você não se lembrar da sua senha, use a página de redefinição de
            senha.Se não se lembrar do seu e-mail ou nome de usuário, acesse a
            página de redefinição de senha e insira os endereços de e-mail que
            você pode ter usado para criar uma conta. Quando o endereço
            registrado no Spotify for inserido, aparecerá uma mensagem dizendo
            que o e-mail de redefinição de senha foi enviado.
          </p>
        </details>
      </div>
    </>
  )
}
