import React, { useEffect, useState } from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import MicSharpIcon from "@mui/icons-material/MicSharp";
import Button from "@mui/material/Button";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchItems } from "../Redux/Action";
// import useGoogleSearch from "../useGoogleSearch";

const Search = ({ hidebuttons }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { data } = useGoogleSearch(input);
  const search = (e) => {
    e.preventDefault();
    navigate("/search");
    dispatch(searchItems(input));
  };

  return (
    <>
      <form action="" className="search">
        <div className="search-input">
          <SearchSharpIcon className="search-icon" />
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <MicSharpIcon />
        </div>
        {!hidebuttons && (
          <div className="search-buttons">
            <Button variant="text" onClick={search}>
              Llamma Search
            </Button>
            <Button variant="text">I Am Feeling Lucky</Button>
          </div>
        )}
      </form>
    </>
  );
};

export default Search;
