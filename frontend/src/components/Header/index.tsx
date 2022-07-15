import logo from '../../assets/img/logo_svg.svg'
import "./styles.css"



function Header() {
    return (
        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />

            <h1>DSMeta</h1>
            <p>
            <p>Desenvolvido por:
                <a href="http://ch-coder.ddns.net:3000/" target="_blank">Clinihard Sistemas</a>.
            </p>
            </p>
        </div>

    </header>

    )
}

export default Header