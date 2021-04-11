import React, { useState, useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { SearchRest } from "../servicws/locationContext";

export const Search = ({ tog, toggled }) => {
  const { searchRest, loading, error, searching, keyword } = useContext(
    SearchRest
  );
  const [keywordS, setKeyword] = useState(keyword);
  useEffect(() => {
    setKeyword(keyword);
  }, [keyword]);
  return (
    <Searchbar
      icon={toggled ? "heart" : "heart-outline"}
      onIconPress={tog}
      placeholder="Search"
      value={keywordS}
      onChangeText={(text) => setKeyword(text)}
      onSubmitEditing={() => searching(keywordS)}
    />
  );
};
