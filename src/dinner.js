import React from 'react'


function Dinner(props){
    return(
        <div>
            <h1>today we are serving {props.dish}</h1>
    <h1>today we are also serving {props.sweet} in sweet</h1>
        </div>

    );
}
export default Dinner;