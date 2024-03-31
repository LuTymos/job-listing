import { FilterContext } from "@/data/context/FilterContext";
import { useContext } from "react";
import styled from "styled-components";

const FilterContent = styled.div`
  max-width: 100%;
  border-radius: 5px;
  background-color: #ffffff;
  min-width: 154px;
  padding: 32px 40px;
  display: flex;
  align-items: center;
  gap: 24px;
  -webkit-box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
  -moz-box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
  box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
`;

const ItemFilter = styled.span`
  color: #5ca5a5;
  background-color: rgba(92, 165, 165, 0.1);
  font-family: "LeagueSpartanBold";
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  padding: 0px 0px 0px 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 8px;
`;

const CloseButton = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5ca5a5;
  color: #fff;
`;

function ListFilters() {
  const { tools, role, level, languages, removeFilter } =
    useContext(FilterContext);

  let isEmpty =
    tools.length > 0 || role != "" || level != "" || languages.length > 0;

  const handleItemClick = (type: string, value: string | null) => {
    removeFilter(type, value);
  };

  if (isEmpty) {
    return (
      <FilterContent>
        {role != "" && (
          <ItemFilter>
            {role}
            <CloseButton onClick={() => handleItemClick("role", null)}>
              X
            </CloseButton>
          </ItemFilter>
        )}

        {level != "" && (
          <ItemFilter>
            {level}
            <CloseButton onClick={() => handleItemClick("level", null)}>
              X
            </CloseButton>
          </ItemFilter>
        )}

        {languages.length > 0 &&
          languages.map((language) => (
            <ItemFilter>
              {language}
              <CloseButton
                onClick={() => handleItemClick("languages", language)}
              >
                X
              </CloseButton>
            </ItemFilter>
          ))}

        {tools.length > 0 &&
          tools.map((tool) => (
            <ItemFilter>
              {tool}
              <CloseButton onClick={() => handleItemClick("tools", tool)}>
                X
              </CloseButton>
            </ItemFilter>
          ))}
      </FilterContent>
    );
  } else {
    return <></>;
  }
}

export default ListFilters;
