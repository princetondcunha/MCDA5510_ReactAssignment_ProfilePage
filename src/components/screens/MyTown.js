import React, { useState, useEffect } from 'react';
import town_image from "../../images/kundapur.jpg";
import cold from "../../images/cold.png";
import mild from "../../images/mild.png";
import sunny from "../../images/sunny.png";

const Town = () => {
  const [temp, setTemp] = useState(0);
  const [imgname, setImgname] = useState('cold');
  const [varname, setVarname] = useState('Change to °F');
  const [tempunit, setTempUnit] = useState('°C');

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=13.62&lon=74.70&appid=e8284edf538fb97b5998ee1052537820', {}).then((res) => res.json()).then((result) => {
      setTemp(result.main.temp - 273.15);
      if (result.main.temp - 273.15 >= 20) {
        setImgname('sunny');
      }
      if (result.main.temp - 273.15 > 10 && result.main.temp - 273.15 <= 20) {
        setImgname('mild');
      }
      if (result.main.temp - 273.15 <= 10) {
        setImgname('cold');
      }
    });
  }, []);

  const changeTemp = () => {
    if (varname === 'Change to °F') {
      setVarname('Change to °C');
      setTemp(temp * 9 / 5 + 32);
      setTempUnit('°F');
    } else {
      setVarname('Change to °F');
      setTemp((temp - 32) * 5 / 9);
      setTempUnit('°C');
    }
  };

  return (
    <div className="town-container">
      <h3 className="blue-text">I am from Kundapur, India</h3>
      <h4>Kundapur is a coastal town in South India located on the west.</h4>
      <div className="orange-line"></div>
      <div className="row">
        <div className="col s10 offset-s1">
          <div className="card orange">
            <div className="card-image">
              <img className="town-image" src={town_image} alt="Kodi Beach" />
            </div>
            <div className="row">
              <div className="col s12">
                <div className="card-content white-text flow-text center-align">
                  <p>Current Temp: {temp.toFixed(2)} {tempunit}</p>
                </div>
              </div>
              <div className="col s12">
                <div className="card-content white-text flow-text center-align">
                  {imgname === 'cold' && (
                    <img
                      className="icon-image"
                      src={cold}
                      alt="temp_image"
                      style={{ objectFit: 'contain' }}
                    />
                  )}
                  {imgname === 'mild' && (
                    <img
                      className="icon-image"
                      src={mild}
                      alt="temp_image"
                      style={{ objectFit: 'contain' }}
                    />
                  )}
                  {imgname === 'sunny' && (
                    <img
                      className="icon-image"
                      src={sunny}
                      alt="temp_image"
                      style={{ objectFit: 'contain' }}
                    />
                  )}
                </div>
              </div>
              <div className="col s12">
                <div className="card-content teal-text text-accent-4 flow-text center-align">
                  <ul id="nav-mobile">
                    <li>
                      <button
                        onClick={() => changeTemp()}
                        className="temp-button waves-effect waves-light btn"
                      >
                        {varname}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Town;
