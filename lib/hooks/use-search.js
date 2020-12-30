import {useEffect, useState} from "react";
import {searchByTerm} from "../search";

export function useSearch({ searchIndex }) {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    if (search.trim().length === 0) {
      return setResults([])
    }
    if (search.trim().length > 0) {
      return setResults(searchByTerm(search, searchIndex))
    }
  }, [search])

  return { search: setSearch, results, searchText: search  }
}
