import { Link } from 'react-router-dom';
import React from 'react';
import './../CSS/HomePage.css'; // Import the CSS file for styling
import masksOnImages from '../images/masksOnImages'; // Check the correct path
import masksOffImages from '../images/masksOffImages'; // Check the correct path

export default function HomePage() {
  return (
    <div className="homepage-container">
      <Link to="/" className="back-button">
        Back to Main Page
      </Link>
      <div className="homepage-header">
        <h1>What is this Machine?</h1>
      </div>
      <div className="homepage-content">
        <p>
        This endeavor centers on the creation and execution of a Face Mask Detection system that harnesses Convolutional Neural Networks (CNNs) and Python's deep learning methods. Its central objective lies in crafting an astute computer vision solution with the capacity to independently identify the presence or absence of facial masks in images. This undertaking demanded our immersion into the captivating domain of deep learning, particularly CNNs, celebrated for their extraordinary image processing prowess. Guided by coding, extensive experimentation, and meticulous testing, our aspiration was to establish a resilient and dependable system proficient in real-time detection.
        </p>
      </div>
      <h3 className="image-text">Dataset with Masks On</h3> {/* Move the header here */}
      <div className="image-grid">
        <div className="grid">
          {chunkArray(masksOnImages, 4).map((imageSet, setIndex) => (
            <div key={setIndex} className="image-set">
              {imageSet.map((image, index) => (
                <img key={index} src={image} alt={`Mask On ${setIndex * 4 + index}`} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <h3 className="image-text">Dataset with Masks Off</h3> {/* Move the header here */}
      <div className="image-grid">
        <div className="grid">
          {chunkArray(masksOffImages, 4).map((imageSet, setIndex) => (
            <div key={setIndex} className="image-set">
              {imageSet.map((image, index) => (
                <img key={index} src={image} alt={`Mask Off ${setIndex * 4 + index}`} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="explained-set">
        <p>Our dataset was created using thousands of images like the ones shown above.
        We utilized these images to train our model, allowing it to recognize face masks accurately.
        To achieve this level of accuracy, we harnessed the power of machine learning techniques, leveraging platforms like Kaggle to access diverse and extensive datasets.
        This rigorous process ensured that our system could deliver precise and reliable results, making it a formidable tool in the realm of face mask detection.
        </p>
      </div>
    </div>
  );
}

// Function to chunk the array into sets of a specific size
function chunkArray(array, size) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
}
