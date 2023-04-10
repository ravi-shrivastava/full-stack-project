import {React , useEffect} from 'react';
import { Jumbotron, Button } from 'reactstrap';


const Jumbo = (props) => {

  
  return(
    <div className="text-center">
    <div className="jumbotron">
  <h1>Hello, world!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4" />
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a className="btn btn-primary btn-m" href="#" role="button">Learn more</a>
</div>
</div>

  );
};

export default Jumbo;