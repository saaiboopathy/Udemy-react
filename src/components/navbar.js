function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__section1">
                <h1 className="navbar-section1__title">Udemy</h1>
            </div>

            <div className="navbar__section2">
                <i className="fa-solid fa-magnifying-glass" style={{ color: '#000000' }}></i>
                <input placeholder="Search for anything here"></input>
            </div>

            <div className="navbar__section3">
                <p>Courses</p>
                <div className="mylearning">
                    <p>My Learning</p>
                    <div className="mylearning__popup">
                        <p>You haven't purchased anything yet</p>
                    </div>
                </div>
                <i className="fa-solid fa-cart-shopping" style={{ color: '#000000' }}></i>
                <i className="fa-solid fa-bell" style={{ color: '#000000' }}></i>
                <i className="fa-solid fa-user" style={{ color: '#000000' }}></i>
            </div>

            <div className="navbar__section4">
                <i className="fa-solid fa-bars" style={{ color: '#9f43d7' }}></i>
            </div>
        </div>
    )
}

export default Navbar;