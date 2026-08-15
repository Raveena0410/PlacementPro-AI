import {useState,React }from 'react'


const ATSChecker = () => {
    const [resume, setResume] = useState(null);
    const [jobDescription, setJobDescription] = useState("");
  return (
    <>
    <div className="h">
    <h2> ATS Resume Checker</h2>
    <h2> Analyze your resume against a job </h2>
    <h2> description and improve your chances.</h2>
     <form className="fo">
      <h2> 📄 Upload Resume  </h2> 
      <div className="f">
        <label> Upload your PDF resume  </label>
        <input  type="file" onChange={(e) => setResume(e.target.files[0])}
      accept=".pdf" placeholder='Enter Your Pdf'/>
        </div> 
     </form>
     <div className="job">
  <label>Job Description</label>

  <textarea
    value={jobDescription}
    onChange={(e) => setJobDescription(e.target.value)}
    placeholder="Paste the job description here..."
  />
</div>

    </div>
    </>
  )
}

export default ATSChecker
