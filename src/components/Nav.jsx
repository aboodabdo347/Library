const Nav = ({ user, handleLogOut }) => {
  let profileLink = `/profile/${user?.id}`
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
      {user.role == 'author' || user ? (
        <div>
          <div className="nav-links">
            <a href="/addbook">Add book</a>
            <a href={profileLink}>Your Collections</a>
          </div>
          <div className="auth-links">
            <a href={profileLink}>Profile</a>
            <a href="/" className="login-button" onClick={handleLogOut}>
              SignOut
            </a>
          </div>
        </div>
      ) : (
        <div className="auth-links">
          <a href="/login" className="login-button">
            Log In
          </a>
          <button className="get-started-btn">Get Started</button>
        </div>
      )}
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
    <div className="auth-links">
      <a href="/login" className="login-button">
        Log In
      </a>
      <button className="get-started-btn">Get Started</button>
    </div>
    </>
  )
}
export default Nav
