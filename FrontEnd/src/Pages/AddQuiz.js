import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import left_arrow from "../images/left-arrow.jpg"

import '../styles/addQuiz.css'
import { useNavigate } from "react-router-dom";

import Theme from "./Theme";
import Question from "./Question";


// let questions1 = [{
//     qno: 1,
//     question: "Your name?",
//     choices: "op1"
// },
// {
//     qno: 1,
//     question: "Your name?",
//     choices: "op1"
// },
// {
//     qno: 1,
//     question: "Your name?",
//     choices: "op1"
// },
// {
//     qno: 1,
//     question: "Your name?",
//     choices: "op1"
// }]


function AddQuiz() {
    const [themeToggle, setThemeToggle] = useState(false)
    const [questions, setQuestions] = useState([{
        qno: 1,
        question: "Your name?",
        choices: "op1"
    },
    {
        qno: 1,
        question: "Your name?",
        choices: "op1"
    },
    {
        qno: 1,
        question: "Your name?",
        choices: "op1"
    },
    {
        qno: 1,
        question: "Your name?",
        choices: "op1"
    }])
    // const toggleTh=()=>{
    //     setThemeToggle(false)
    // }
    // function PopUp() {
    //     return <>
    //         <Theme></Theme>
    //     </>
    // }
    //opacity: 0.1;
    const setQ=()=>{
        setQuestions(prevq=>([
            ...prevq,
            {
                qno: 1,
                question: "Your name?",
                choices: "op1"
            }
        ]))
    }
    const navigate = useNavigate();
    console.log("render");
    return <>
        <Header></Header>
        <Sidebar></Sidebar>
        
            
           <div className="create-question">
            <div>
           <div className="s_parent1">
                <div className="s_child1">
                    <div className="rec1">
                        <img onClick={() => {
                            navigate('/list-survey/create')
                        }} src={left_arrow} alt="arrow" className="arrow lift" />
                        <p className="create">Create Questions</p>
                    </div>
                    <div className="rec2">
                        <button className="theme_btn" onClick={() =>{setThemeToggle(true)}}>Theme Setting</button>
                        <button onClick={() => {
                            navigate('/list-survey/create/questions/preview')
                        }} className="preview">Preview</button>
                        <button onClick={() => {
                            navigate('/list-survey/create/questions/preview')
                        }} className="save">Save</button>
                    </div>

                </div>
            </div>
            </div>
            
                {questions.map(item => {
                    return <Question data={item} />
                })}
                <button onClick={setQ} className="add_que">Add question</button>
            
           </div>
            
           <div style={{ position: "fixed", bottom: "100px", left: "500px" }}>
                {themeToggle &&
                    <div className="popup">
                        <Theme></Theme>
                    </div>
                }
            </div>
            
            
    </>
}

export default AddQuiz;