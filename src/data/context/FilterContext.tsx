import React, { createContext, ReactNode, useState } from "react";

export const FilterContext = createContext({
  tools: [] as string[], // Defina o tipo de tools como um array de strings
  role: "",
  level: "",
  languages: [] as string[], // Defina o tipo de languages como um array de strings
  setTools: (value: string[]) => {},
  setRole: (value: string) => {},
  setLevel: (value: string) => {},
  setLanguages: (value: string[]) => {},
  addFilter: (type: string, value: string | string[]) => {},
});

interface ProviderProps {
  children: ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [tools, setTools] = useState<string[]>([]); // Defina o tipo de tools como um array de strings
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("");
  const [languages, setLanguages] = useState<string[]>([]); // Defina o tipo de languages como um array de strings

  const addFilter = (type: string, value: string | string[]) => {
    switch (type) {
      case "tools":
        setTools((prevTools) => [
          ...prevTools,
          ...(Array.isArray(value) ? value : [value]),
        ]);
        break;
      case "role":
        setRole(value as string);
        break;
      case "level":
        setLevel(value as string);
        break;
      case "languages":
        setLanguages((prevLanguages) => [
          ...prevLanguages,
          ...(Array.isArray(value) ? value : [value]),
        ]);
        break;
      default:
        break;
    }
  };
  return (
    <FilterContext.Provider
      value={{
        tools,
        role,
        level,
        languages,
        setTools,
        setRole,
        setLevel,
        setLanguages,
        addFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
