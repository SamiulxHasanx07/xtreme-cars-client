import { Container } from 'react-bootstrap';
import CountUp from 'react-countup';
const InfoCount = () => {
    return (
        <div style={{ backgroundImage: `url('https://raw.githubusercontent.com/SamiulxHasanx07/xtreme-cars-images/main/other/car-warehouse.jpg')`, padding: '150px 0' }}>
            <Container>
                <div className='infoNumber d-flex align-items-center justify-content-between text-white text-center'>
                    <div>
                        <h2 className='m-0 info-num'><CountUp end={85000} /></h2>
                        <h6 className='m-0 info-title '>Car Deliverd</h6>
                    </div>
                    <div>
                        <h2 className='m-0 info-num'><CountUp end={5000} /></h2>
                        <h6 className='m-0 info-title '>In Stock</h6>
                    </div>
                    <div>
                        <h2 className='m-0 info-num'><CountUp end={150} /></h2>
                        <h6 className='m-0 info-title '>Total Awards</h6>
                    </div>
                    <div>
                        <h2 className='m-0 info-num'><CountUp end={200} /></h2>
                        <h6 className='m-0 info-title'>Trusted Partner</h6>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default InfoCount;