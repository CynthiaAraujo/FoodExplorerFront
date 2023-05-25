import { useState } from "react";
import { FiSearch } from "react-icons/fi";

import { Input } from "../Input";

export function SearchInput({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Input
      placeholder="Busque por pratos ou ingredientes"
      type="text"
      icon={FiSearch}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyPress={async (e) => {
        if (e.key === "Enter") {
          handleSearch(searchTerm);
        }
      }}
    />
  );
}
