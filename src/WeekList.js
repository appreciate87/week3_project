import React, { useState } from "react";
import Styled from "styled-components";
import { useHistory } from "react-router-dom";



const WeekList = (props) => {

    const history = useHistory();


    const Circle = [1,2,3,4,5];


    const Array = ["월","화","수","목","금","토","일"];

    console.log(Array);

    let Rate_sum = 0;

    const day_rate = Array.map((d,index) => {
        const random = 
        Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) + Math.ceil(1);
        Rate_sum += random;

        return {
            day: d,
            rate: random,
        };

    });

    console.log(day_rate);
    console.log(day_rate[0].rate);

    const avgRate = (Rate_sum / day_rate.length).toFixed(1);
        // 평점   = //평점합계 / 요일의 rate값의 index길이 (7)  // toFixed 소수점 1자리 만큼 반환해준다.

    console.log(avgRate);

    const [Rate, setRate] = React.useState(avgRate);
        // console.log(setRate);


    const zero = parseInt(0).toFixed(1);

    console.log(zero);



    return (
        <Wrap className="wrap">
            <h3 style = {{textAlign: "center"}}>내 일주일은?</h3>
                        
            <Days>                
                <Span>{Array[0]}</Span>
                {Circle.map((item,index)=>{
                return  day_rate[0].rate > index ? <Ostyle key={index}></Ostyle> : <Xstyle key={index}></Xstyle>;
            })}
                <TriAngle onClick={()=>{history.push("/detail/월")}}></TriAngle>
            </Days>
            <Days>
                <Span>{Array[1]}</Span>
                {Circle.map((item,index)=>{
                return   day_rate[1].rate > index ? <Ostyle key={index}></Ostyle> : <Xstyle key={index}></Xstyle>;
            })}
                <TriAngle onClick={()=>{history.push("/detail/화")}}></TriAngle>
            </Days>
            <Days>
                <Span>{Array[2]}</Span>
                {Circle.map((item,index)=>{
                return   day_rate[2].rate > index ? <Ostyle key={index}></Ostyle> : <Xstyle key={index}></Xstyle>;
            })}
                <TriAngle onClick={()=>{history.push("/detail/수")}}></TriAngle>
            </Days>
            <Days>
                <Span>{Array[3]}</Span>
                {Circle.map((item,index)=>{
                return   day_rate[3].rate > index ? <Ostyle key={index}></Ostyle> : <Xstyle key={index}></Xstyle>;
            })}
                <TriAngle onClick={()=>{history.push("/detail/목")}}></TriAngle>
            </Days>
            <Days>
                <Span>{Array[4]}</Span>
                {Circle.map((item,index)=>{
                return   day_rate[4].rate > index ? <Ostyle key={index}></Ostyle> : <Xstyle key={index}></Xstyle>;
            })}
                <TriAngle onClick={()=>{history.push("/detail/금")}}></TriAngle>
            </Days>
            <Days>
                <Span>{Array[5]}</Span>
                {Circle.map((item,index)=>{
                return   day_rate[5].rate > index ? <Ostyle key={index}></Ostyle> : <Xstyle key={index}></Xstyle>;
            })}
                <TriAngle onClick={()=>{history.push("/detail/토")}}></TriAngle>
            </Days>
            <Days>
                <Span>{Array[6]}</Span>
                {Circle.map((item,index)=>{
                return   day_rate[6].rate > index ? <Ostyle key={index}></Ostyle> : <Xstyle key={index}></Xstyle>;
            })}
                <TriAngle onClick={()=>{history.push("/detail/일")}}></TriAngle>
            </Days>

                <div>
                    <p style={{color: "blue" , fontSize: "30px", fontWeight: "bold"}}>평균 평점</p>
                    <p style={{color: "blue" , fontSize: "30px", fontWeight: "bold"}}>{Rate}</p>                    
                    <div style={{
                        width: "150px",
                        height: "50px",
                        backgroundColor: "dodgerblue",
                        borderRadius: "6px",
                        textAlign: "center",
                        margin: "auto"              
                    }} onClick={()=>{setRate(zero)}}>                    
                        <p style={{color: "white", fontSize: "30px" }}>Reset</p>
                </div>
            </div>
        </Wrap>
    );
};


const Wrap = Styled.div`
    max-width: 300px;
    width: 300vw;
    height: 70vh;
    background-color: #fff;
    margin: auto;
    border-radius: 5px;
    border: 1px solid #ddd;
    align-items: center;
    
`;

const Days = Styled.div`
    width: 300px;
    display: flex;
    margin: auto;

`;

const Span = Styled.span`
    font-size: 25px;
    padding: 5px;
    margin: auto;
`;

const Ostyle = Styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background-color: Gold;
    margin: auto;
`;

const Xstyle = Styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background-color: #BDBDBD;
    margin: auto;
`;

const TriAngle = Styled.div`
    width: 0;
    height: 0;
    border-bottom: 20px solid transparent;
    border-top: 20px solid transparent;
    border-left: 20px solid purple;
    border-right: 20px solid transparent;
    float: right;
    padding-right: 5px;
`;
export default WeekList;