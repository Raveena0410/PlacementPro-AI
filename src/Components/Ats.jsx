import React, { useState } from "react";
import axios from "axios";
import "./Ats.css";


const ATSChecker = () => {

    const [resume, setResume] = useState(null);

    const [jobDescription, setJobDescription] = useState("");
    const [result, setResult] = useState("");


    const check = async (e) => {

        e.preventDefault();


        // Check resume
        if (!resume) {

            alert("Please upload your resume in this");

            return;

        }


        // Check job description
        if (!jobDescription.trim()) {

            alert("Please enter the job description");

            return;

        }


        // Create FormData
        const formData = new FormData();


        // Add PDF
        formData.append(
            "resume",
            resume
        );


        // Add job description
        formData.append(
            "jobDescription",
            jobDescription
        );


        try {

            const res = await axios.post(
                "http://localhost:5000/api/ats",
                formData
            );


            console.log("ATS RESULT:");
console.log(res.data);

setResult(res.data.result);


        } catch (err) {

            console.log(err);

        }

    };


    return (

        <>

            <div className="h">

                <h2>
                    ATS Resume Checker
                </h2>

                <h2>
                    Analyze your resume against a job
                </h2>

                <h2>
                    description and improve your chances.
                </h2>


                <form
                    className="fo"
                    onSubmit={check}
                >


                    <h2>
                        📄 Upload Resume
                    </h2>


                    <div className="f">

                        <label>
                            Upload your PDF resume
                        </label>


                        <input
                            type="file"
                            accept=".pdf"
                            onChange={(e) =>
                                setResume(
                                    e.target.files[0]
                                )
                            }
                        />

                    </div>


                    <div className="job">

                        <label>
                            Job Description
                        </label>


                        <textarea
                            value={jobDescription}
                            onChange={(e) =>
                                setJobDescription(
                                    e.target.value
                                )
                            }
                            placeholder="Paste the job description here..."
                        />

                    </div>


                    <button type="submit">
                        Check Resume
                    </button>


                </form>
                {result && (
    <div>
        <h2>ATS Result</h2>
        <pre>{result}</pre>
    </div>
)}

            </div>

        </>

    );
};


export default ATSChecker;