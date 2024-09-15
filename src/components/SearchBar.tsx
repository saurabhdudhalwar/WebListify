import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const SearchBar = ({ onSearch }: any) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: any) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };
  const handleBackClick = (e: any) => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <div style={styles.searchBar}>
      <ArrowBackIcon style={styles.backIcon} onClick={handleBackClick} />

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        style={styles.input}
      />
      <SearchIcon style={styles.searchIcon} />
    </div>
  );
};

const styles = {
  searchBar: {
    backgroundColor: "#171717",
    position: "fixed" as "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    zIndex: 1000,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    opacity: 0.9,
  },
  backIcon: {
    marginRight: "10px",
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
  },
  input: {
    flex: 0.9,
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    outline: "none",
    backgroundColor: "#171717",
    color: "white",
    width: "100px",
  },
  searchIcon: {
    marginLeft: "2px",
    color: "white",
    fontSize: "24px",
  },
};

export default SearchBar;
