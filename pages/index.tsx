import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layouts'
import Primary from '../components/ui/Button/Primary'
import callLogo from '../assets/images/call.svg'

const IndexPage = () => (
  <Layout>
      <p className='header-text'>Refer & Earn</p>
      <p className='info-text'>Earn #100 airtime when you refer people 
        in Ibadan only</p>
      <p className='highlight-text'>Enter your phone number to receive airtime</p>
      <div className='display-flex input-field-container'>
          <div className='call-container'>
              <Image src={callLogo} />
          </div>
          <p>(+234)</p>
          <div className='horizontal-line' />
          <input className='input-field'  type={"number"} placeholder='' />
      </div>
      
      <Primary buttonTitle={'Share Referral Link'} nextPage='/accesscontact'/>
  </Layout>
)

export default IndexPage
