import { FilterContext } from "@/data/context/FilterContext";
import { useContext } from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  max-width: 1148px;
  margin: 0 auto;
  padding: 0 24px;
  margin-top: -36px;
  box-sizing: border-box;
`;

const FilterContent = styled.div`
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #ffffff;
  min-width: 154px;
  padding: 20px 40px;
  display: flex;
  flex-wrap: wrap;
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
  border-radius: 0 4px 4px 0;
  &:hover {
    background-color: #2b3939;
    cursor: pointer;
  }
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
      <FilterContainer>
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
      </FilterContainer>
    );
  } else {
    return <></>;
  }
}

export default ListFilters;
