import Layout from "../../components/Layouts"

const contact = () => {
    return(
        <Layout>
            <p className='info-text'>Earn #100 airtime when you refer people 
                in Ibadan only</p>            
            
            <div className="display-flex">
                <div className="display-flex">
                    <p>12 of 320 selected</p>
                    <p>Clear</p>
                </div>
                <p>Select</p>
            </div>

            <div className="display-flex contact-section">
                    <div className="display-flex">
                        <p>Johnson Jackson</p>
                        <p>08192838394</p>
                    </div>
                    <input type={'checkbox'} />
            </div>
        </Layout>
    )
}

export default contact