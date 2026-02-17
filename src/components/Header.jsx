function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-content">
          {/* Logo */}
          <div className="logo-section">
            <div className="logo-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <div className="logo-text">
              <h1>NC News</h1>
              <p>Your trusted source</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="header-nav">
            <button
              className="nav-button active"
              onClick={() => onNavigate("home")}
            >
              Home
            </button>
            <button className="nav-button" onClick={() => onNavigate("users")}>
              Users
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
