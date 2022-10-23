import {NavLink} from "react-router-dom";
const Footer =()=>{
    return(
        <>
        <div className="footer">
        <nav >
     <NavLink to="/cmn" className='footer-item'>Tesla &copy; 2022</NavLink>
     <NavLink to="/cmn" className='footer-item'>Privacy & Legal</NavLink>
     <NavLink to="/cmn" className='footer-item'>Vehicle Recalls</NavLink>
     <NavLink to="/cmn" className='footer-item'>Contact</NavLink>
     <NavLink to="/cmn" className='footer-item'>Careers</NavLink>
     <NavLink to="/cmn" className='footer-item'>News</NavLink>
     <NavLink to="/cmn" className='footer-item'>Engage</NavLink>
     <NavLink to="/cmn" className='footer-item'>Locations</NavLink>
        </nav>
     </div>
        </>
    );
}
export default Footer;