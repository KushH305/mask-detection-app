import React from "react";
import "./../CSS/WelcomePage.css"; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import demovid from "..//images/maskdemovid.mp4"

import kushavatar from "..//images/kush.jpg"
import sidavatar from "..//images/sid.jpg"
import abheeshavatar from "..//images/abheesh.jpg"
import badriavatar from "..//images/badri.jpg"



export default function WelcomePage() {
  return (
    <div>
        <div className="welcome-header">
        <h1>Welcome to Mask Detection Inc!</h1>
        <p>We are excited to introduce our cutting-edge machine learning algorithm designed to analyze images with people wearing or not
            wearing masks. Our algorithm can accurately determine whether the
            person in the picture has a mask on or off, contributing to a safer
            environment for everyone.</p>
        <div className="button-container">
            <Link to="/homepage">
              <button className="button">What is the Machine?</button>
            </Link>
        </div>
        <div className="button-container">
            <Link to="/machinepage">
              <button className="button">Explore the Machine!</button>
            </Link>
        </div>
      </div>

      <div className="how-it-works">
        <h2>What is Mask Detection Inc?</h2>
        <div className="steps">
          <h3>What is this project about?</h3>
          <div className="step-content">
            <p className="step-description">This project revolves around the development and implementation of a Face Mask Detection system utilizing Convolutional Neural Networks (CNNs) and deep learning techniques in Python. Its primary goal is to create an intelligent computer vision solution that can autonomously recognize whether individuals in images are wearing face masks or not. The project required us to delve into the fascinating field of deep learning, specifically CNNs, which are renowned for their exceptional image processing capabilities. Through coding, experimentation, and rigorous testing, we aimed to create a robust and reliable system capable of real-time detection.</p>
          </div>
        </div>
        <div className="steps">
          <h3>How does it work?</h3>
          <div className="step-content">
            <p className="step-description">
            The Face Mask Detection system operates by analyzing facial images using a Convolutional Neural Network (CNN). The process begins by inputting an image into the CNN, which then applies a series of convolutional and pooling layers to extract intricate features from the image. These features help the network distinguish between masked and unmasked faces. Following the feature extraction process, the CNN passes the data through fully connected layers, which make the final decision about whether a face in the image is masked or unmasked. The CNN is trained on a diverse dataset containing images of individuals with and without masks, enabling it to learn the distinctive patterns associated with each scenario. Once trained, the system can process new images and provide accurate predictions regarding mask usage, making it a valuable tool for enforcing safety measures.</p>
          </div>
        </div>
        <div className="steps">
          <h3>Why is it useful?</h3>
          <div className="step-content">
            <p className="step-description">The Face Mask Detection system holds immense practical utility in today's world, particularly in the context of public health and safety. In the midst of global health challenges such as the COVID-19 pandemic, ensuring compliance with face mask mandates is crucial for reducing the spread of the virus. Our project addresses this need by providing an automated means to monitor and enforce mask-wearing in various settings, from public transportation to healthcare facilities. Moreover, the system's real-time detection capabilities make it valuable for security and surveillance applications. Beyond pandemic-related use cases, our Face Mask Detection system contributes to the broader field of computer vision and deep learning, demonstrating the potential of AI technology to address critical societal issues.</p>
          </div>
        </div>
      </div>
      
      {/* Demo Video */}
      <div className="demovid">
      <h2 className="demo-vid-h2">Demo Video:</h2>
        <div className="video-container">
          <video width="960" height="720" autoPlay loop muted>
          <source src={demovid} type="video/mp4" />
          Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="social-media">
        <h2 className="social-h2">Creators:</h2>
          <div className="creator-avatars">
            <div className="creator-avatar">
              <img src={kushavatar} alt="Kush Avatar" />
              <h3>Kush</h3>
              <a href="https://www.linkedin.com/in/kush-havinal-196a8422a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="creator-avatar">
              <img src={sidavatar} alt="Sid Avatar" />
              <h3>Sid</h3>
              <a href="https://www.linkedin.com/in/siddhant-srivastava8285/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>  
            <div className="creator-avatar">
              <img src={abheeshavatar} alt= "Abheesh Avatar" />
              <h3>Abheesh</h3>
              <a href="http://www.linkedin.com/in/abheesh-gupta" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>  
            <div className="creator-avatar">
              <img src={badriavatar} alt="Badri Avatar" />
              <h3>Badri</h3>
              <a href="https://www.linkedin.com/in/badri-pratti-b50862228" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>  
        </div>
      </div>
    </div>
  );
}
