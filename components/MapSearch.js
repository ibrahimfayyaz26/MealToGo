import React, { useState, useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { SearchRest } from "../servicws/locationContext";

export const MapSearch = () => {
  const { searching, keyword } = useContext(SearchRest);
  const [keywordS, setKeyword] = useState(keyword);
  useEffect(() => {
    setKeyword(keyword);
  }, [keyword]);

  return (
    <Searchbar
      placeholder="Search"
      value={keywordS}
      icon="map"
      onChangeText={(text) => setKeyword(text)}
      onSubmitEditing={() => searching(keywordS)}
    />
  );
};
