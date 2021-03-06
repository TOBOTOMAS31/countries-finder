import React from "react";

export default function Card({ country }) {
  const numberFormat = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  return (
    <div>
      <li className="card">
        <img src={country.flag} alt="image drapeau" />
        <div className="data-container">
          <ul>
            <li>{country.name}</li>
            <li>{country.capital}</li>
            <li>Pop. {numberFormat(country.population)}</li>
          </ul>
        </div>
      </li>
    </div>
  );
}
