import React from 'react';
import { Link } from 'react-router-dom';
import './../CSS/MachinePage.css'; // Import the CSS file for styling


import kaggleimage from "../images/kaggle.png"
import kagglephone from "../images/verifykagglenum.jpg"
import kaggleapi from "..//images/kaggleapi.jpg"
import googlecolab from "..//images/googlecolab.jpg"
import imageofchoice from "..//images/lebron.jpg"
import imagepath from "..//images/pathimage.jpg"
import results from "..//images/results.jpg"


export default function MachinePage() {
  return (
    <div>
      <Link to="/" className="back-button">
        Back to Main Page
      </Link>
      <h1 className="machine-h1">Steps to Make The Machine Work!</h1>

      <div className="step-container">
      {/* Step 1: Make a Kaggle Account */}
      <div className="step">
        <h2>Step 1: Make a Kaggle Account</h2>
        <span className="span-p">
        Kaggle also offers a wide range of machine learning challenges and competitions, allowing data scientists and machine learning practitioners to apply their skills to real-world problems and compete with others in the community. These competitions often feature substantial cash prizes and provide an opportunity to showcase one's expertise in developing predictive models and algorithms.
        </span>
        <div className="image-holder">
          {/* Add your image here */}
          <img src={kaggleimage} alt="Step 1" />
        </div>
      </div>

      {/* Repeat the above structure for each step */}
      {/* Step 2: Verify Phone Number */}
      <div className="step">
        <h2>Step 2: Verify Phone Number</h2>
        <div className="image-holder">
          {/* Add your image here */}
          <img src={kagglephone} alt="Step 2" />
        </div>
      </div>

      {/* Step 3: Create API Key Account */}
      <div className="step">
        <h2>Step 3: Create API Key Account</h2>
        <div className="image-holder">
          {/* Add your image here */}
          <img src={kaggleapi} alt="Step 3" />
        </div>
      </div>

      {/* Step 4: Drop into File with Colab */}
      <div className="step">
        <h2>Step 4: Drop into File with Colab</h2>
        <span className="span-p">
        Google Colab, short for Google Colaboratory, is an online platform that provides a cloud-based environment for running Jupyter notebooks. It has gained popularity among data scientists, machine learning engineers, and researchers as a powerful tool for collaborative and interactive coding.
        </span>
        <div className="image-holder">
          {/* Add your image here */}
          <img src={googlecolab} alt="Step 4" />
        </div>
      </div>

      {/* Step 5: Download Image of Choice */}
      <div className="step">
        <h2>Step 5: Download Image of Choice</h2>
        <div className="image-holder">
          {/* Add your image here */}
          <img src={imageofchoice} alt="Step 5" className="image-of-choice" />
        </div>
      </div>

      {/* Step 6: Copy Image Path */}
      <div className="step">
        <h2>Step 6: Copy Image Path</h2>
        <div className="image-holder">
          {/* Add your image here */}
          <img src={imagepath} alt="Step 6" />
        </div>
      </div>

      {/* Step 7: Get Results */}
      <div className="step">
        <h2>Step 7: Get Results</h2>
        <div className="image-holder">
          {/* Add your image here */}
          <img src={results} alt="Step 6" />
        </div>
      </div>
      </div>
      
    </div>
  );
}
