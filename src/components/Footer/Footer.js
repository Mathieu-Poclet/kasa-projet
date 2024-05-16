import "./footer.scss"
import logo from '../../assets/logoFooter.png';

function Footer() {
    return (
        <div className='kasa-footer'>
            <img src={logo} alt='logo de Kasa' />
            <p><i class="fa-regular fa-copyright"></i> 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer