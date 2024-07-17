import image from '../../assets/Logo.png'
import './header.css'

export function Header() {
    return(

        <div className='headerStyle'>
            
            <img src={image} alt="Logo" />
            
        </div>
    )
}