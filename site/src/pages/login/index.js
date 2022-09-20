import './index.scss'
export default function Login() {
    return (
        <main className="login-main">
            <div className="left">
                <h1 className="login-title">Faça Seu Login</h1>

                <p className="login-text">Faça o seu login para ter acesso a suas
                 informações, fazer posts, e ajudar as pessoas</p>

                <div className="inputs">
                    <input className="email" type="text" placeholder="EMAIL" />
                    <input className="senha"type="text" placeholder="SENHA" />
                    <a>Esqueceu sua senha?</a>
                </div>

                <button className="login-button">ENTRAR</button>
                
                <p className="crie-sua-conta">Não tem uma conta? <a href="">Cadastre-se</a></p>

            </div>

            <div className="right">
                <button className="botao-direita">Pagina Inicial</button>
                <div className="imagem"><img src="/assets/images/login-image.png" alt="" /></div>
            </div>
        </main>


    );

}