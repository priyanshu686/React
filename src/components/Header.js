import logo from '../../Image/Logo.png';

const Header = () =>{
    return (
        <div className="header">
            <div >
                <img className="logo" src={logo} alt="Logo"/>
            </div>
            <div className="nav-items">
                <ul className="list">
                    <li id="n1">Home</li>
                    <li id="n2">About Us</li>
                    <li id="n3">Contect Us</li>
                    <li id="n4">Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;