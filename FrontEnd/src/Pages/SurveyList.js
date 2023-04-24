import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import '../styles/surveylist.css'
import Cookies from'universal-cookie'
//import axios from 'axios'
import Survey from './Survey'
import '../styles/header.css'
import { createRoutesFromChildren, useNavigate } from "react-router-dom";
import Header from './Header'

const config = require('../config/config')


const user = [{
    name: "Sanket",
    description: "ANC",
    type: "Q",
    startDate: "2023",
    endDate: "2023" 
},
{
    name: "Sanket",
    description: "ANC",
    type: "Q",
    startDate: "2023",
    endDate: "2023" 
},
{
    name: "Sanket",
    description: "ANC",
    type: "Q",
    startDate: "2023",
    endDate: "2023" 
}]

export default function SurveyList() 
{
    const navigate = useNavigate();

    const cookies=new Cookies()

    let token=cookies.get("uid")
        if(!token)
        {
            navigate('/')
        }
        
    
    let [tmp_token,updateToken]=useState({
        token:cookies.get("uid")
    })
    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     axios.get(config.backEndUrl)
    //     .then((data)=>{
    //         setData(data)
    //     })
    // })

    const [data,setData]=useState([]);

    useEffect(()=>{
            fetch("http://localhost:8000/get-surveys",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(tmp_token),
            })
           .then((data)=>data.json())
           .then((responce)=>{
                setData(responce)
                // console.log(responce[0])
           })
           .catch(()=>console.log("servey fetching error"))
        //    const cookies=new Cookies()
    },[])
    
    return <>
        <div className='container'>
            <Header/>
            <Sidebar />
            <div className='list-container'>
                <header className='list-header'>
                    <div id='searchform'>
                        <form>
                            <label>Survey List</label>
                            <input type='text' placeholder='Search' />
                        </form>
                    </div>
                    <div className='util'>
                        <div id='sort'></div>
                        <div id='filter'></div>
                        <div id='create-btn'>
                            <button onClick={()=>{
                                let token=cookies.get("uid")
                                if(!token)
                                {
                                    navigate('/')
                                }
                               else( navigate('/list-survey/create'))
                            }}>Create</button>
                        </div>
                    </div>
                </header>
                <div className='survey-list'>
                    <table>
                        <thead>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {data && data.map(item=>{
                                return <Survey data={item} key={item.id}/>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    </>
}