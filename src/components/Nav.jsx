const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">
          <img
            className="logo"
            src="https://i.ibb.co/S6Z6y68/logo-fotor-bg-remover-20240323171046.png"
            alt="Quili Logo"
          />
        </a>
      </div>
      <div className="nav-links">
        <a href="/how-it-works">How It Works</a>
        <a href="/subscription">Subscription</a>
        <a href="/faq">FAQ</a>
      </div>
      <div className="auth-links">
        <a href="/login" className="login-button">Log In</a>
        <button className="get-started-btn">Get Started</button>
      </div>
    </nav>
  )
}
export default Nav
