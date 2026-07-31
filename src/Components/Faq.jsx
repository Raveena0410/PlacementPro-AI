import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
    const faq=[
       {
    question: "What is an ATS Resume Checker?",
    answer: "An ATS Resume Checker analyzes your resume to see how well it matches Applicant Tracking Systems used by recruiters."
  },
  {
    question: "Is this platform free to use?",
    answer: "Yes. You can use the basic features for free, with premium features available in the future."
  },
  {
    question: "Can beginners use this platform?",
    answer: "Absolutely! Our platform is designed for students, freshers, and professionals preparing for placements."
  },
  {
    question: "How does the AI Assistant help me?",
    answer: "The AI Assistant provides resume suggestions, interview tips, career guidance, and placement preparation support."
  },
  {
    question: "Do I need an account to use the ATS Checker?",
    answer: "Some basic features are available without an account, but creating an account lets you save reports and track your progress."
  }
    ]
    const[open,openindex]=useState(null)
    function toggle(index){
        if (open===index){
            openindex(null)
        } else{
            openindex(index)
        }
        
    }
  

  return (
    <>
   <div className="faq-container">
    <h1>Frequently Asked Questions
Find answers to common questions about our ATS platform.</h1>
  {faq.map((faqItem, index) => (
    <div
      className="faq-item"
      key={index}
      onClick={() => toggle(index)}
    >
      <div className="faq-question">
        <h3>{faqItem.question}</h3>
        <span>{open === index ? "-" : "+"}</span>
      </div>

      {open === index && (
        <div className="faq-answer">
          <p>{faqItem.answer}</p>
        </div>
      )}
    </div>
  ))}
</div>
    </>
  )
}

export default Faq