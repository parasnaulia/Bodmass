import InputField from "components/fields/InputField";
import Button from "../Button/Buttton"
import React, { useState } from 'react';
import Inputbox from "layouts/auth/Inputbox";


const Index = () => {
    const [tog,setTog]=useState(false);

    const handleButton=()=>{
        setTog(!tog);
       
     
    }
    const [packageName,setPackageName]=useState("");
    const [startDate,setStartDate]=useState("");
    const [endDate,setEndDate]=useState("");
    const [startTime,setStartTime]=useState("");
    const [endTime,setEndTime]=useState("");
    const [projects,setProjects]=useState("");
    const [users,setUsers]=useState("");



    const setDataPackageName=(e)=>{
        console.log("name"+e.target.value)
        setPackageName(e.target.value);
    }
    const dataStartDate=(e)=>{
        console.log("date "+e.target.values)
        setStartDate(e.target.value);
    }
    const dataEndDate=(e)=>{
        setEndDate(e.target.value);
    }
    const dataStartTime=(e)=>{
        console.log("Time"+e.target.value)
        setStartTime(e.target.value);
    }
    const dataEndTime=(e)=>{
        setEndTime(e.target.value)
    }
    const dataSetProjects=(e)=>{
        setProjects(e.target.value);
    }
    const dataUsers=(e)=>{
        setUsers(e.target.value);
    }




const SubmitPackage=()=>{
    // alert("Hello");
    const packageDataSubmit=async()=>{

        try{
            const data=await fetch("http://localhost:8000/api/package",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({name:"Paras"})
            });
            const resData=await data.json();
            
            console.log(resData);

        }
        catch(e)
        {
            console.log("This is Sending package Error "+e);

        }
        

    }
    packageDataSubmit()
}


  return (
    <div className='flex justify-center flex-col items-center mt-4'>
      <div className='flex justify-between items-center gap-10'>
        <div className='font-bold text-2xl'>
          Add package
        </div>
        <div onClick={handleButton}>
          <Button name="Package" />
        </div>
      </div>
      {tog===true&&<div className="mt-5 border-gray-200 border-2 p-3 px-8 w-[40vw] ">
        
      <div>
     <Inputbox place="Package Name" label=" Package name" type="text" setData1={setDataPackageName}/>
     <div className="flex justify-around">
     <Inputbox place="start Date" label="Start Date" type="date" setData1={dataStartDate}/>
     <Inputbox place="end Date" label="End Date" type="date"/>

     </div>
     <div className="flex justify-around">
     <Inputbox place="start Time" label="Start Time" type="time"/>
     <Inputbox place="end Time" label="End Time" type="time"/>
     </div>
     <Inputbox place="Number Of users" label="Users" type="number"/>
     <Inputbox place="Number Of Project" label="Project" type="number"/>
     <div  onClick={SubmitPackage}>
     <Button name="Add"/>

        </div>
    


      </div>


        
      </div>}


    </div>
  );
}

export default Index;
