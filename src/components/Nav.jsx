const Nav = ({ user, handleLogOut }) => {
  let profileLink = `/profile/${user?.id}`
  console.log(user?.role)
  return user ? (
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
      <div className="auth-links">
        <a href={profileLink}>Profile</a>
        {user.role === 'author' && (
          <a href="/addbook" className="login-button">
            Add book
          </a>
        )}
        <a href="/" className="login-button" onClick={handleLogOut}>
          Sign Out
        </a>
      </div>
    </nav>
  ) : (
    <>
      <div className="navbar-brand">
        <a href="/">
          <img
            className="logo"
            src="https://i.ibb.co/S6Z6y68/logo-fotor-bg-remover-20240323171046.png"
            alt="Quili Logo"
          />
        </a>
      </div>
      <div className="auth-links-notloggedin">
        <a href="/login" className="login-button">
          Log In
        </a>
        <button className="get-started-btn">Get Started</button>
      </div>
    </>
  )
}

export default Nav
