import React, { useState } from "react";
import axios from "axios";
import "./Ats.css";

const ATSChecker = () => {

    const [resume, setResume] = useState(null);
    const [jobDescription, setJobDescription] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);


    const check = async (e) => {

        e.preventDefault();

        // -------------------------
        // CHECK RESUME
        // -------------------------

        if (!resume) {

            alert("Please upload your PDF resume");

            return;
        }


        // -------------------------
        // CHECK JOB DESCRIPTION
        // -------------------------

        if (!jobDescription.trim()) {

            alert("Please enter the job description");

            return;
        }


        // -------------------------
        // CREATE FORMDATA
        // -------------------------

        const formData = new FormData();


        // Add resume
        formData.append(
            "resume",
            resume
        );


        // Add job description
        formData.append(
            "jobDescription",
            jobDescription
        );


        // -------------------------
        // CHECK WHAT IS BEING SENT
        // -------------------------

        console.log("========== ATS REQUEST ==========");

        console.log("Resume:");
        console.log(resume);

        console.log("Job Description:");
        console.log(jobDescription);


        // Check FormData
        console.log("========== FORMDATA ==========");

        for (let [key, value] of formData.entries()) {

            console.log(key, value);

        }


        // -------------------------
        // SEND TO BACKEND
        // -------------------------

        try {

            setLoading(true);

            setResult("");


            const res = await axios.post(
                "http://localhost:5000/api/ats",
                formData
            );


            // -------------------------
            // BACKEND RESPONSE
            // -------------------------

            console.log("========== ATS RESPONSE ==========");

            console.log(res.data);


            setResult(res.data.result);


        } catch (err) {

            console.log("========== ATS ERROR ==========");

            console.log(err);

            if (err.response) {

                console.log("Server response:");
                console.log(err.response.data);

                alert(
                    err.response.data.message ||
                    "ATS analysis failed"
                );

            } else {

                alert(
                    "Could not connect to the server"
                );

            }

        } finally {

            setLoading(false);

        }

    };


    return (

        <div className="h">

            <h1>
                ATS Resume Checker
            </h1>

            <p>
                Analyze your resume against a job
                description and improve your chances.
            </p>


            <form
                className="fo"
                onSubmit={check}
            >

                {/* -------------------------
                    RESUME
                ------------------------- */}

                <h2>
                    📄 Upload Resume
                </h2>


                <div className="f">

                    <label>
                        Upload your PDF resume
                    </label>


                    <input
                        type="file"
                        accept="application/pdf,.pdf"
                        onChange={(e) => {

                            const file =
                                e.target.files[0];

                            setResume(file);

                            console.log(
                                "Selected Resume:",
                                file
                            );

                        }}
                    />

                </div>


                {/* -------------------------
                    JOB DESCRIPTION
                ------------------------- */}

                <div className="job">

                    <label>
                        Job Description
                    </label>


                    <textarea
                        value={jobDescription}
                        onChange={(e) => {

                            setJobDescription(
                                e.target.value
                            );

                        }}
                        placeholder="Paste the job description here..."
                        rows="10"
                    />

                </div>


                {/* -------------------------
                    BUTTON
                ------------------------- */}

                <button
                    type="submit"
                    disabled={loading}
                >

                    {loading
                        ? "Analyzing..."
                        : "Check Resume"
                    }

                </button>

            </form>


            {/* -------------------------
                RESULT
            ------------------------- */}

            {result && (

                <div className="result">

                    <h2>
                        ATS Result
                    </h2>

                    <pre>
                        {result}
                    </pre>

                </div>

            )}

        </div>

    );

};


export default ATSChecker;