import {useState,React }from 'react'
import axios from "axios";
import  "./Ats.css"


const ATSChecker = () => {
    const [resume, setResume] = useState(null);
    const [jobDescription, setJobDescription] = useState("");
    
      const check=async function(e){
        e.preventDefault();

    const formData = new FormData();

    formData.append("resume", resume);
    formData.append("jobDescription", jobDescription);
    try{
        const res=await axios.post("http://localhost:5000/api/ats",
        formData
        )

      }
      catch(err){

      }
    }




    
  return (
    <>
    <div className="h">
    <h2> ATS Resume Checker</h2>
    <h2> Analyze your resume against a job </h2>
    <h2> description and improve your chances.</h2>
     <form className="fo" onSubmit={check}>
      <h2> 📄 Upload Resume  </h2> 
      <div className="f">
        <label> Upload your PDF resume  </label>
        <input  type="file" onChange={(e) => setResume(e.target.files[0])}
      accept=".pdf" placeholder='Enter Your Pdf'/>
        </div> 
     
     <div className="job">
  <label>Job Description</label>

  <textarea
    value={jobDescription}
    onChange={(e) => setJobDescription(e.target.value)}
    placeholder="Paste the job description here..."
  />
  </div>
  <button type="submit">Check Resume</button>

</form>
    </div>
    
    </>
  )
}

export default ATSChecker
