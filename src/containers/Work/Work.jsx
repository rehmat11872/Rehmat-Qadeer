import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor } from "../../client";
import "./Work.scss";
import flight from "../../assets/flight.png";
import track from "../../assets/track.png";
import pak from "../../assets/pak.png";
import poly from "../../assets/poly.png";
import workout from "../../assets/workout.png";


const Work = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [touched, setTouched] = useState(null);

  // Dummy data for projects
  useEffect(() => {
    const dummyWorks = [
      {
        title: "Sastaticket.pk Flights, Bus",
        description: "A feature-rich Flutter application enabling users to book flights and buses. It includes seamless API integration and a user-friendly interface. Designed for both local and international travel bookings.",
        imgUrl: flight,
        projectLink: "https://play.google.com/store/apps/details?id=com.pk.sastaticket&hl=en&gl=US",
        codeLink: "NA",
        tags: ["Flutter App"]
      },
      {
        title: "Track Library",
        description: "A Flutter-based app that helps users manage and track their library books. Integrates external APIs for book data retrieval. Designed with intuitive UI for students and librarians.",
        imgUrl: track,
        projectLink: "https://play.google.com/store/apps/details?id=com.library.track&hl=en-US",
        codeLink: "NA",
        tags: ["Flutter App"]
      },
      {
        title: "PSM App",
        description: "A complete Flutter app with Firebase for managing solar panel market data. It includes features like real-time updates, user authentication, and data analytics. Ideal for solar business tracking.",
        imgUrl: pak,
        projectLink: "https://play.google.com/store/apps/details?id=com.psmapp.opalaxis",
        codeLink: "https://github.com/rehmat11872/psm_new_solar_market",
        tags: ["Flutter App"]
      },
      {
        title: "Polify Rider App",
        description: "A Flutter-based delivery rider app integrated with Firebase. It supports live location tracking, order management, and rider performance metrics. Built to streamline delivery operations.",
        imgUrl: poly,
        projectLink: "NA",
        codeLink: "https://github.com/rehmat11872/Polify_RiderApp",
        tags: ["Flutter App"]
      },
      {
        title: "Workout Women App",
        description: "Fitness app developed in Flutter with Firebase support, targeting women's workout routines. Includes guided exercises, timer, and daily progress tracking. Sleek UI and personalized plans.",
        imgUrl: workout,
        projectLink: "NA",
        codeLink: "https://github.com/rehmat11872/Fitness_App",
        tags: ["Flutter App"]
      }
      
      
    ];
    setWorks(dummyWorks);
  }, []);
  
  return (
    <>
      <h2 className="head-text">
        My creative <span>Portfolio</span> section
      </h2>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
        onClick={() => setTouched(null)}
      >
        {works.map((work, index) => (
          <motion.div
            className={`app__work-item app__flex ${
              touched === index ? "app__work-touched-nowrap" : ""
            }`}
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setTouched(index);
            }}
            onTouchStart={() => setTouched(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className={`app__work-hover app__flex ${
                  touched === index ? "app__work-touched" : ""
                }`}
              >
                {work.projectLink.toLowerCase() !== "na" && (
                  <a
                    href={work.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="app__flex"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                      title="Play Store"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
                      </svg>
                    </motion.div>
                  </a>
                )}
                <a
                  href={work.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="app__flex"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                    title="GitHub"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
        
            <div className="app__work-content app__flex">
              <h4 className="bold-text" title={work.title}>
                {work.title}
              </h4>
              <p
                className="p-text"
                style={{ marginTop: 10 }}
                title={work.description}
              >
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);