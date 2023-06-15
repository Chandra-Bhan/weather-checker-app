import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Whether() {
  const [whether, setWhether] = useState(null);
  const [location, setLocation] = useState("atarra");

  async function whetherCheck() {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=0a78534c66ee4cacad9125058231506&q=${location}`
      );
      console.log(response.data);
      console.log("hellp", response.data.current);
      setWhether(response.data);
    } catch (error) {
      console.log(error);
      setWhether(null);
    }
  }
  console.log(location);
  useEffect(() => {
    whetherCheck();
  }, []);

  return (
    <div
      className="border p-5"
      style={{
        width: "50rem",
        margin: "auto",
        marginTop: "1rem",
        textAlign: "Center",
        backgroundColor: "#EFF1F3",
      }}
    >
      <h1 className="text-primary">Wheather App</h1>
      <input
        placeholder="Enter the city"
        style={{ width: "30rem", fontSize: "23px", margin: "auto" }}
        className="form-control mt-4 p-2 ps-4"
        type="text"
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="btn btn-primary ps-5 pe-5 mt-3"
        style={{ fontWeight: "bold" }}
        onClick={whetherCheck}
      >
        CHECK
      </button>

      {whether && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "4rem",
            backgroundColor: "#2B3D50",
            color: "white",
            borderRadius: "1rem",
          }}
          className="border p-5"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: "100%",
              padding: "2rem",
              paddingTop: "3rem",
              paddingBottom: "3rem",
            }}
            className="border "
          >
            <img
              src={whether.current.condition.icon}
              width={100}
              height={100}
            />
            <div>
              <p>
                {whether.current.temp_c}
                <sup>o</sup>C
              </p>
              <p>
                {whether.current.temp_f}
                <sup>o</sup>f
              </p>
            </div>
          </div>

          <div style={{ textAlign: "start", marginLeft: "4rem" }}>
            <p>Precipitation:&nbsp;&nbsp; {whether.current.precip_mm}%</p>
            <p>Humidity:&nbsp;&nbsp; {whether.current.humidity}</p>
            <p>Wind Direction:&nbsp;&nbsp; {whether.current.wind_dir}</p>
            <p>Wind:&nbsp;&nbsp; {whether.current.wind_kph} KMPH</p>
            <p>
              Location:&nbsp;&nbsp; {whether.location.name}{" "}
              {whether.location.region} ({whether.location.tz_id})
            </p>
            <p>Update Time:&nbsp;&nbsp; {whether.location.localtime}</p>
          </div>
        </div>
      )}
    </div>
  );
}
