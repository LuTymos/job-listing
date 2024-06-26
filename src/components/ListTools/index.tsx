import { FilterContext } from "@/data/context/FilterContext";
import { useContext } from "react";
import styled from "styled-components";

interface ListContentProps {
  content: string[] | string;
  type: string;
}

const Content = styled.div`
  display: flex;
  gap: 16px;

  .aboutInfo {
    color: #5ca5a5;
    background-color: rgba(92, 165, 165, 0.1);
    font-family: "LeagueSpartanBold";
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    padding: 5px 8px 3px 8px;
    border-radius: 4px;
    &:hover {
      background-color: #5ca5a5;
      color: #fff;
      cursor: pointer;
    }
  }
`;

function ListContent({ content, type }: ListContentProps) {
  const { addFilter } = useContext(FilterContext);

  const handleItemClick = (value: string | string[]) => {
    addFilter(type, value);
  };
  return (
    <Content>
      {Array.isArray(content) ? (
        content.map((item, index) => (
          <span
            key={index}
            className="aboutInfo"
            onClick={() => handleItemClick(item)}
          >
            {item}
          </span>
        ))
      ) : (
        <span className="aboutInfo" onClick={() => handleItemClick(content)}>
          {content}
        </span>
      )}
    </Content>
  );
}

export default ListContent;
