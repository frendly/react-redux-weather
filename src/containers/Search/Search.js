import React from "react";
import { connect } from "react-redux";
import Geosuggest from "react-geosuggest";
import weather from "openweather-apis";
import { addWeather } from "../../actions";
import "./Search.css";

let Search = ({ dispatch }) => {
  let geosuggestInput;

  const onSuggestSelect = suggest => {
    const city = {
      label: suggest.label.split(",")[0],
      location: suggest.location
    };

    weather.setAPPID("cdebb59cb18b8c03fb165de97778a25b");
    weather.setLang("ru");
    weather.setCoordinate(city.location.lat, city.location.lng);
    weather.getAllWeather(function(err, JSONObj) {
      city.temperature = Math.round(JSONObj.main.temp);
      city.wind = Math.round(JSONObj.wind.speed);
      city.pressure = Math.round(JSONObj.main.pressure);
      city.icon = JSONObj.weather[0].icon;
      city.id = JSONObj.id;

      dispatch(addWeather(city));
      // console.log(city);
      geosuggestInput.clear();
    });
  };

  const getSuggestLabel = suggest => {
    return suggest.description;
  };

  return (
    <section className="Search">
      <form className="Search-form">
        <Geosuggest
          ref={el => geosuggestInput = el}
          placeholder="Укажите город"
          country="ru"
          types={["(cities)"]}
          onSuggestSelect={onSuggestSelect}
          getSuggestLabel={getSuggestLabel}
        />
      </form>
    </section>
  );
};

Search = connect()(Search);
export default Search;
