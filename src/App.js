import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/HomePage/HomePage";
import "./App.scss";

function App() {
  const [isModeLight, setIsModeLight] = useState(false);
  const [countriesData, setCountriesData] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [filteredCountriesData, setFilteredCountriesData] = useState([]);
  const [filters, setFilters] = useState();
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    setFilteredCountriesData(
      calculateDropdownFilterResult(
        selectedFilter,
        calculateSearchFilterResult(searchInputValue, countriesData)
      )
    );
  }, [selectedFilter]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setCountriesData(data.countries);
        setFilteredCountriesData(data.countries);
        setFilters(getFilters(data.countries));
      });
  }, []);

  const getFilters = (data) => {
    return [
      "All",
      ...new Set(data.map((country) => country.region)),
      "Oceania",
    ];
  };

  const calculateDropdownFilterResult = (selectedFilter, initialData) => {
    return selectedFilter !== "All"
      ? initialData.filter((item) => item.region === selectedFilter)
      : initialData;
  };

  const calculateSearchFilterResult = (searchedFilter, initialData) => {
    return searchedFilter !== ""
      ? initialData.filter((item) =>
          item.name.toLowerCase().includes(searchedFilter)
        )
      : initialData;
  };

  const handleInputChange = (e) => {
    let value = e.target.value;
    let initialFilteredData = calculateDropdownFilterResult(
      selectedFilter,
      countriesData
    );
    setSearchInputValue(value);
    setFilteredCountriesData(
      calculateSearchFilterResult(value, initialFilteredData)
    );
  };

  const handleSelectedFilterChange = (e, item) => {
    setSelectedFilter(item);
  };

  return (
    <div className="App">
      <div className={isModeLight ? "light" : "dark"}>
        <Navigation
          mode={isModeLight}
          onModeClick={() => setIsModeLight(!isModeLight)}
        />
        <HomePage
          data={filteredCountriesData}
          filters={filters}
          selectedFilter={selectedFilter}
          searchInputValue={searchInputValue}
          changeSelectedFilter={handleSelectedFilterChange}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default App;
