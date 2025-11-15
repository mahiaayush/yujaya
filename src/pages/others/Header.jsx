export default function Header() {
    return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
            <div className="container">
            <a className="navbar-brand" href="./index.html">
                <img src="./../../../public/yujaya/image/logo-yujaya.png" alt="Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/about-us">About Us</a></li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="solutionsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Solutions
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="solutionsDropdown">
                    <li><a className="dropdown-item" href="/studio-or-academy">Studio or Academy</a></li>
                    <li><a className="dropdown-item" href="/individual-teachers">Individual Teachers </a></li>

                    </ul>
                </li>

                <li className="nav-item"><a className="nav-link" href="/case-study">Case Study</a></li>
                <li className="nav-item"><a className="nav-link" href="/pricing">Pricing</a></li>
                <li className="nav-item"><a className="nav-link" href="/contact-us">Contact</a></li>
                </ul>

                <div className="d-flex align-items-center ">
                <a href="book-demo.html" className="btn btn-demo">Book Demo</a>
                <a href="login.html" className="btn btn-login">Login / Sign Up</a>

                <div className="dropdown ms-3">
                    <button className="btn btn-light dropdown-toggle d-flex align-items-center" type="button" id="langDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://flagcdn.com/gb.svg" alt="ENG" className="flag-icon" />
                    ENG
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="langDropdown">
                    <li><a className="dropdown-item d-flex align-items-center" href="#"><img src="https://flagcdn.com/jp.svg" className="flag-icon" /> Japanese</a></li>
                    <li><a className="dropdown-item d-flex align-items-center" href="#"><img src="https://flagcdn.com/cn.svg" className="flag-icon" /> Chinese</a></li>
                    <li><a className="dropdown-item d-flex align-items-center" href="#"><img src="https://flagcdn.com/es.svg" className="flag-icon" /> Spanish</a></li>
                    <li><a className="dropdown-item d-flex align-items-center" href="#"><img src="https://flagcdn.com/de.svg" className="flag-icon" /> German</a></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </nav>
      </header>
    </>
    );
}