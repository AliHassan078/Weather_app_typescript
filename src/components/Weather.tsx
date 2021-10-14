import React, { FC } from "react";
import { WeatherData } from "../store/types";

interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
  console.log(data.current, "weather");
  return (
    <section className="section">
      <div className="container ">
        <div className="level" style={{ alignItems: "flex-start" }}>
          <div className="level-item has-text-centered">
            <div className="box" style={{ width: "200px", height: "100px" }}>
              <p className="title" style={{ marginTop: "-10px" }}>
                <img src={data.current.condition.icon} alt="" />
              </p>
              <p className="heading">{data.current.condition.text}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div className="box" style={{ width: "200px", height: "100px" }}>
              <p className="heading">temp</p>
              <div className="title">
                <p className="mb-2">{data.current.temp_c}</p>
              </div>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div className="box" style={{ width: "200px", height: "100px" }}>
              <p className="heading">humidity</p>
              <p className="title">{data.current.humidity}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div className="box" style={{ width: "200px", height: "100px" }}>
              <p className="heading">pressure</p>
              <p className="title">{data.current.pressure_in}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div className="box" style={{ width: "200px", height: "100px" }}>
              <p className="heading">wind</p>
              <p className="title">{data.current.wind_kph} kph</p>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Weather;
