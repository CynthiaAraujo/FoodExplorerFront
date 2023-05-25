import { useState } from "react";

import { getPlates } from "../services/api";

export function useSearch() {
  const [plates, setPlates] = useState([]);

  async function handleSearch(searchTerm) {
    const allPlates = await getPlates(searchTerm);
    setPlates(allPlates);
  }

  return { plates, handleSearch };
}
