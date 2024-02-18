import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function HomeDivisionSection() {
    return(
        <section className="home-div-section">
            <div className='home-div-section-container'>
                <div className='card-box-anim'>
                    <div className='home-div-card-box' data-aos="flip-left">
                        <Card style={{ width: '18rem'}} border="light">
                            <Card.Img variant="top" src="./images/sales_div.png" />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "bold"}}>Sales Division</Card.Title>
                                <Card.Text style={{ fontSize: '14px' }}>
                                    In sales division vertex provides the most comprehensive and innovative Medical Equipment 
                                    and Technology that will meet every customer and facility's high-standard requirement.
                                </Card.Text>
                                <Button variant="primary" style={{ fontSize: '15px' }}>Sales Division</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                
                <div className='card-box-anim'>
                    <div className='home-div-card-box' data-aos="flip-left" data-aos-delay="300">
                        <Card style={{ width: '18rem' }} border="light">
                            <Card.Img variant="top" src="./images/engine_div.png" />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "bold"}}>Engineer Division</Card.Title>
                                <Card.Text style={{ fontSize: '14px' }}>
                                Vertex provides a full complement of repair, maintenace & life-scycle Management Services 
                                for most medical equipment located throughout hospitals and ancillary healthcare facilities.
                                </Card.Text>
                                <Button variant="primary" style={{ fontSize: '15px' }}>Engineer Division</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                 
                <div className='card-box-anim'>
                    <div className='home-div-card-box' data-aos="flip-left" data-aos-delay="600">
                        <Card style={{ width: '18rem' }} border="light">
                            <Card.Img variant="top" src="./images/proj_div.png" />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "bold"}}>Project Division</Card.Title>
                                <Card.Text style={{ fontSize: '14px' }}>
                                Vertex has carried out unique and different project for our client in the industry. 
                                Many of them have trusted in the experience of Vertex Medical Equipment Maintenance and Services.
                                </Card.Text>
                                <Button variant="primary" style={{ fontSize: '15px' }}>Project Division</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}