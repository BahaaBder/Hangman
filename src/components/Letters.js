import { Component } from 'react';

class Letters extends Component{

    render(){
        const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    return (
        <div>
            <div>Available Letters</div>
        {
            alphabet.map(item=>{
              return (<span>{item}</span>)
            })
        }
    </div>)
    }
    
    
    }
    export default Letters;