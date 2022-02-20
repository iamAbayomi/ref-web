import Image from 'next/image'
import logo from '../../assets/images/sendme-primary-logo.svg'
const Layout = () =>{
    return(
        <div className='main'>
            <div className='image-container'>
                <Image
                    className='app-logo'
                    src={logo}
                    alt="Picture of the author"
                    width="50"
                    height="39"
                    layout="responsive" 
                />
            </div>
        </div>
    )
}

export default Layout