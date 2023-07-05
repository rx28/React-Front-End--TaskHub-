import {PropTypes} from 'prop-types'
import { useState } from 'react'

export default function CounterButton({by,incrementMethod}){
    
   // const [count,setCount]=useState(0);
    
    // function incrementCounterFunction(){
    //  //   setCount(count+by);
    //     incrementMethod(by);
        
        //console.log(count);
        //console.log('increment clicked');
    //};
    function decrementCounterFunction(){
       // setCount(count-by);
        incrementMethod(-by);
       // console.log(count);
        //console.log('increment clicked');
    };
    
    
    return (
    <div className="Counter">

       {/* <span className="count">{count}</span> */}
        <div>
        <button className="counterButton" 
        onClick={()=>incrementMethod(by)}
        
        >+{by}</button>

        <button className="counterButton" 
        onClick={decrementCounterFunction}
        
        >-{by}</button>              
        </div>
    </div>
    )
}

CounterButton.propType={
     by:PropTypes.number
}

CounterButton.defaultProps={
    by:1
}