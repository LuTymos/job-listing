import { FilterContext } from "@/data/context/FilterContext";
import { useContext } from "react";

function ListFilters() {
  const { tools, role, level, languages } = useContext(FilterContext);
  return (
    <div>
      {role}
      {level}
      {languages.map((language) => (
        <span>{language}</span>
      ))}
      {tools.map((tool) => (
        <span>{tool}</span>
      ))}
    </div>
  );
}

export default ListFilters;
