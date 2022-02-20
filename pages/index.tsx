import Link from 'next/link'
import Layout from '../components/Layouts'
import Primary from '../components/ui/Button/Primary'

const IndexPage = () => (
  <Layout>
      <p>Refer & Earn</p>
      <p>Earn #100 airtime when you refer people 
        in Ibadan only</p>
      <p>Enter your phone number to receive airtime</p>
      <Primary buttonTitle={'Share Referral Link'} nextPage='/accesscontact'/>
  </Layout>
)

export default IndexPage
