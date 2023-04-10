import React from 'react'
import { Card, CardBody } from 'reactstrap'

function Header() {
  return (
    <div className='display-4.5'>
    <div className='text-center'>
    <Card className='my-2 bg-primary'>
    <CardBody>
       <h1 className="my-2 ">Welcome to Course Application!</h1> 
   </CardBody> 
       </Card>  
    </div>
    </div>
    
  )
}

export default Header