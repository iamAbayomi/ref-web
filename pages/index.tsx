import Link from 'next/link'
import Layout from '../components/Layouts'
import Primary from '../components/ui/Button/Primary'

const IndexPage = () => (
  <Layout>
      <p className='header-text'>Refer & Earn</p>
      <p className='info-text'>Earn #100 airtime when you refer people 
        in Ibadan only</p>
      <p className='highlight-text'>Enter your phone number to receive airtime</p>
      <input  type={"name"} placeholder='' />
      <Primary buttonTitle={'Share Referral Link'} nextPage='/accesscontact'/>
  </Layout>
)

export default IndexPage
