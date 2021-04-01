import React, { useState, useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { SearchRest } from "../servicws/locationContext";

export const Search = () => {
  const [keywordS, setKeyword] = useState(keyword);
  const { searchRest, loading, error, searching, keyword } = useContext(
    SearchRest
  );

  return (
    <Searchbar
      placeholder="Search"
      value={keywordS}
      onChangeText={(text) => setKeyword(text)}
      onSubmitEditing={() => searching(keywordS)}
    />
  );
};