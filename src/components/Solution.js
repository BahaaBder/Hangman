import { Component } from 'react';
class Solution extends Component{

  
    render(){
        let arrayOfUnderScore=[]
        for(let i=0;i<4;i++){
            arrayOfUnderScore.push(" _ ")
        }
    return(
    <div>
        {
            arrayOfUnderScore.map(item=>
                {
                    return (<span>{item}</span>)
                })
        }
        <div>Your ideal mood when coding</div>
    </div>
        )
    }
    
    }
    export default Solution;