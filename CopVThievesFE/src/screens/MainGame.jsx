import React, { useEffect, useState } from "react";
import "../CSS/cityselection.css";
import { useNavigate, Link } from "react-router-dom";
import ResultPage from "./ResultPage";

const Dropdown = ({ label, value, onChange, options }) => (
  <div>
    <h3>{label}</h3>
    <select value={value} onChange={onChange}>
      {options.map((option, idx) => (
        <option key={idx}>{option}</option>
      ))}
    </select>
  </div>
);

const CitySelection = () => {
  const baseurl = "http://localhost:3000/";
  const [cities, setCities] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [result, setResult] = useState({}) 

  const navigate = useNavigate();
  const [cop1, setCop1] = useState({ name: "cop1", city: "", vehicle: "" });
  const [cop2, setCop2] = useState({ name: "cop2", city: "", vehicle: "" });
  const [cop3, setCop3] = useState({ name: "cop3", city: "", vehicle: "" });

  const fetchData = async (url, setter) => {
    try {
      const response = await fetch(baseurl + url);
      const jsondata = await response.json();
      setter(jsondata);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData("cities", setCities);
    fetchData("vehicles/getVehicles", setVehicles);
  }, []);

  const handleCityChange = (e, setter) => {
    setter((prev) => ({ ...prev, city: e.target.value }));
  };

  const handleVehicleChange = (e, setter) => {
    setter((prev) => ({ ...prev, vehicle: e.target.value }));
  };

  const handleResult = async () => {
    const postData = [cop1, cop2, cop3]
    try {
      const response = await fetch(baseurl + "game/capture", {
        method: "POST",
        body: JSON.stringify(postData)
      });
      const data = await response.json()
      setResult(data)
    } catch(error) {
        alert(error)
    }
  };

  useEffect(() => {
    if (result && Object.keys(result).length > 0) {
      let prop = JSON.stringify(result)
      alert(result.message)
      // navigate('/result', { state:{message: result.message}});
    }
  }, [result]);

  return (
    <div className="screen">
      {/* for city selection */}
      <div className="selection">
        <h2>select cities for cop</h2>
        <div className="dropdowns">
          <Dropdown
            label="Cop 1"
            value={cop1.city}
            onChange={(e) => handleCityChange(e, setCop1)}
            options={cities.map((city) => city.name)}
          />
          <Dropdown
            label="Cop 2"
            value={cop2.city}
            onChange={(e) => handleCityChange(e, setCop2)}
            options={cities.map((city) => city.name)}
          />
          <Dropdown
            label="Cop 3"
            value={cop3.city}
            onChange={(e) => handleCityChange(e, setCop3)}
            options={cities.map((city) => city.name)}
          />
        </div>
      </div>

      {/* for vehicle selection */}
      <div className="selection">
        <h2>select vehicles for cop</h2>
        <div className="dropdowns">
          <Dropdown
            label="Cop 1"
            value={cop1.vehicle}
            onChange={(e) => handleVehicleChange(e, setCop1)}
            options={vehicles.map((vehicle) => vehicle.kind)}
          />
          <Dropdown
            label="Cop 2"
            value={cop2.vehicle}
            onChange={(e) => handleVehicleChange(e, setCop2)}
            options={vehicles.map((vehicle) => vehicle.kind)}
          />
          <Dropdown
            label="Cop 3"
            value={cop3.vehicle}
            onChange={(e) => handleVehicleChange(e, setCop3)}
            options={vehicles.map((vehicle) => vehicle.kind)}
          />
        </div>
      </div>
      <button id="btn" onClick={handleResult} className="button">
        result
      </button>
      <Link to={"/"} className="button">Quit</Link>
    </div>
  );
};

export default CitySelection;
