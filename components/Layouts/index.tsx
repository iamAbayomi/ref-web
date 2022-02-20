import Image from 'next/image'
import { ReactNode } from 'react'
import logo from '../../assets/images/sendme-primary-logo.svg'

type props = {
    children? : ReactNode
}

const Layout = ({children}: props) =>{
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
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout