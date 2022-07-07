import React from "react";
import { motion } from "framer-motion";
import './Portfolio.css';

const boxVariants = {
  hover: {
    scale: 1.02,
    transition: {
    type: "spring",
    },
  },
};

const Portfolio = () => {
  return (
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <div class="container">
       </div>
      <div className="projects-container">
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >

<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-3">
      <img src="/images/1.jpg" class="img-fluid rounded-start" alt="..."></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <p class="card-text">This is a book.</p>
        <a class="btn btn-primary" href="https://sublimelife.goswirl.live/index.php/nIIvZG3W6V9CVkD018TUC5DGn01028019MjnPjrRb9qe01bw" role="button">Buy</a>
        <button type="button" class="btn btn-info">Details</button>
      </div>
    </div>
  </div>


  <div class="row g-0">
    <div class="col-md-3">
      <img src="/images/1.jpg" class="img-fluid rounded-start" alt="..."></img>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <p class="card-text">This is a book.</p>
        <a class="btn btn-primary" href="https://sublimelife.goswirl.live/index.php/nIIvZG3W6V9CVkD018TUC5DGn01028019MjnPjrRb9qe01bw" role="button">Buy</a>
        <button type="button" class="btn btn-info">Details</button>
      </div>
    </div>
  </div>

  </div>
        </motion.div>

        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >

        <div class="card">
        <video class="videoClass" src="/images/video.mp4" controls></video>

        </div>
        </motion.div>
   



        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >


<div class="mb-12">
  <label for="exampleFormControlTextarea1" class="form-label">Comments</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
          
        </motion.div>
      </div>
    
    </section>
  );
};

export default Portfolio;
