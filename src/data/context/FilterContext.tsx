import { validateHeaderValue } from "http";
import { createContext, ReactNode, useState } from "react";

interface FilterContextProps {
  tools: string[];
  role: string;
  level: string;
  languages: string[];
  setTools: (value: string[]) => void;
  setRole: (value: string) => void;
  setLevel: (value: string) => void;
  setLanguages: (value: string[]) => void;
  addFilter: (type: string, value: string | string[]) => void;
  removeFilter: (type: string, value: string | null) => void;
}

export const FilterContext = createContext<FilterContextProps>({
  tools: [] as string[],
  role: "",
  level: "",
  languages: [] as string[],
  setTools: () => {},
  setRole: () => {},
  setLevel: () => {},
  setLanguages: () => {},
  addFilter: () => {},
  removeFilter: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [tools, setTools] = useState<string[]>([]);
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);

  const addFilter = (type: string, value: string | string[]) => {
    switch (type) {
      case "tools":
        setTools((prevTools) => [
          ...new Set([
            ...prevTools,
            ...(Array.isArray(value) ? value : [value]),
          ]),
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
          ...new Set([
            ...prevLanguages,
            ...(Array.isArray(value) ? value : [value]),
          ]),
        ]);
        break;
      default:
        break;
    }
  };

  const removeFilter = (type: string, value: string | null) => {
    switch (type) {
      case "tools":
        let newTools = tools.filter((item) => item !== value);
        setTools(newTools);
        break;
      case "role":
        setRole("");
        break;
      case "level":
        setLevel("");
        break;
      case "languages":
        let newLanguages = languages.filter((item) => item !== value);
        setLanguages(newLanguages);
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
        removeFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
