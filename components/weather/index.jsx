import SUN from '../../assets/images/sun.svg'
import CLOUD from '../../assets/images/cloud.svg'
import Image from 'next/image';
const weather = (props) => (
    <div className="container" >
        <div className="flex flex-row items-center" style={{ width: '26rem' }}>
            <div className='w-32'>
                <Image src={props.weather == 'Clear' ? SUN : CLOUD} width="100" height="100" />
            </div>
            <div className='w-64'>
                <h2 className='text-2xl'> {props.temperature} C</h2>
                <h5 className='text-sm'>Humidity:{props.humidity} / Wind:{props.wind} </h5>
            </div>
        </div>
    </div >
)
export default weather;