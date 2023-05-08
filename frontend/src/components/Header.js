import headerLogo from'../images/header.svg'

function Header() {
    return (
        <header className="header">
            <a className="header__link" href="#"><img className="header__logo" src={headerLogo}
                alt="Логотип" /></a>
        </header>
    )
}

export default Header;