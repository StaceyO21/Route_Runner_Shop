function Header() {
    return (
        <header id="top-header">
            <h1 id="site-title">
                <u>Route Runner Apparel</u>
            </h1>

            <img
            id="logo-image"
            src="/route_runner_img.png"
            alt="Route Runner Apparel Logo"
            />

            <form classname="search-form">
                <input
                id="search-box"
                type="search"
                placeholder="Search apparel..."
            />
            <button className="search-button" type="submit">
                Search
            </button>
            </form>

            <hr className="header-line" /> 
        </header>
    );
}

export default Header;