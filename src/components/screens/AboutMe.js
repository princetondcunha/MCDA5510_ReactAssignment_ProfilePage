import React from 'react';
import myPhoto from '../../images/profile.jpg';

const About = () => {
  return (
    <div className="about-container">
      <h3 className="blue-text">Princeton Hilary Dcunha</h3>
      <div className="blue-line"></div>

      <div className="container">
        <div className="row">
          <div className="col s12 m10">
            <div className="card blue lighten-2">
              <div className="card-content white-text left-align">
                <img src={myPhoto} alt="Profile" className="my-photo" />

                <p className="flow-text">
                  I am an API Developer with 6 years of Industry Experience. I graduated with a degree in Mechatronics Engineering in 2017. My passion for programming began in high school, and I've always enjoyed learning new programming languages. I also have experience in DevOps and hold the Google Cloud Professional Cloud DevOps Engineer Certification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col s12 m10 offset-m2">
            <div className="card blue lighten-2">
              <div className="card-content white-text left-align">
                <p className="flow-text">
                  The reason I chose the MCDA program is because I wanted to enhance my skills in DevOps and also want to enter into the field of Data Analytics and Science. I always liked maths and stats. So I find Data Analytics and Science fascinating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
