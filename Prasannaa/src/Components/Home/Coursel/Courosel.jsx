import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Coursel.css'
import {list} from './Coursel.js'
function Courosel() {
  return (
    <div className="coursoel"> <Carousel data-bs-theme="dark">
  {list.map((x)=><Carousel.Item>
   <img
     className="d-block w-100"
     src={x}
     alt="First slide"
   />
 </Carousel.Item>)}
</Carousel>
</div>



  )
}
export default Courosel;