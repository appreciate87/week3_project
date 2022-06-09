import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import Styled from "styled-components";


const Detail = (props) => {

    const Circle = [1,2,3,4,5];
    console.log(Circle);

    
    // let day_name = useParams();
    console.log(props);
    console.log(props.match);
    console.log(props.match.params);

    const day2 = Object.values(props.match.params);


    console.log(day2);

    
    const [index , setIndex] = useState();
    


    return (
        <Wrap>
            <h2><Day>{day2}요일</Day> 평점 남기기</h2>
            <Ddd> 
                {Circle.map((item, i)=>{    
                    console.log(i);                
                    return <Xstyle style={{backgroundColor: i <= index ? ("Gold"):("#BDBDBD")}} onClick={()=>{setIndex(i)}} key={i}></Xstyle>
                })} 
            </Ddd>

            <div style={{marginTop: "30px"}}>
                <Btn2 onClick = {() => {
                    props.history.push("/");
                }}>평점 남기기</Btn2>
            </div>
            
            
        </Wrap>
    );
};


const Wrap = Styled.div`
    max-width: 300px;
    width: 200vw;
    height: 70vh;
    background-color: #fff;
    margin: auto;
    border-radius: 5px;
    border: 1px solid #ddd;
    align-items: center;
    
`;

const Day = Styled.span`
    background-color: #FF9800;
    width: 200px;
    height: 150px;
    border-radius: 10px;
    color: white;
    font-size: 30px;
    padding: 8px 8px 8px;
`;


const Ddd = Styled.div`
    display: flex;
    width: 100%;

`;

const Xstyle = Styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background-color: #BDBDBD;
    margin: auto;    
    justify-content: center;
    
`;

// const Ostyle = Styled.div`
//     width: 30px;
//     height: 30px;
//     border-radius: 30px;
//     // background-color: Gold;
//     margin: auto;    
//     justify-content: center;
    
// `;

const Btn2 = Styled.div`
    width: 200px;
    height: 50px;
    background-color: purple;
    border-radius: 6px;
    textAlign: center;
    margin: auto;
    color: white;
    text-align: center;
    font-size: 15px;
    padding: 20px 0px 0px ;
`;

export default Detail;