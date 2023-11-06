import React,{useState, useReducer} from 'react'
import {connect} from "react-redux";
// function reducer(state, action){
//     switch(action.type){
//         case "increment":
//             return state + 1;
//         case "decrement":
//             return state - 1;
//         default:
//             console.log("Wrong Type");
//     }
// }

function Ball(props) {
    // let [balls, setBalls] = useState(10);
    // const increment = () => {
    //     setBalls(balls + 1);
    // }
    // const decrement = () => {
    //     setBalls(balls - 1);
    // }

    // const [balls, dispatch] = useReducer(reducer, 10);
    console.log(props);
    return (
        
        <>
            <h1>Balls</h1>
            <h2>No. of Balls: {props.balls}</h2>
            <button
            onClick={props.buyBall}
            >+</button>
            <button
            onClick={props.sellBall}
            >-</button>
        </>
    )
}

// to get your state variable from redux store dispatch funtion bhi provide krta hai.
const mapStateToProps = (store)=>{
    return store;
} 

const mapDispatchtoProps = (dispatch) =>{
    return {
        sellBall: ()=>{
            dispatch({
                type:"decrement"
            })
        },
        sellBall: ()=>{
            dispatch({
                type:"increment"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(Ball);