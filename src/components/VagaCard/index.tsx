import { iVagas } from "@/data/@types/iVagas";
import styled from "styled-components";
import ListTools from "../ListTools";

const Card = styled.div<{ $featured?: boolean }>`
  max-width: 100%;
  justify-content: space-between;
  border-radius: 5px;
  flex-direction: row;
  background-color: #ffffff;
  min-width: 154px;
  border-left: ${(props) => (props.$featured ? "5px solid #5CA5A5" : "")};
  padding: 32px 40px;
  display: flex;
  align-items: center;
  gap: 24px;
  -webkit-box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
  -moz-box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
  box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
  @media screen and (max-width: 840px) {
    position: relative;
    flex-direction: column;
    padding: 24px;
    padding-top: 32px;
    align-items: flex-start;
    gap: 16px;
  }
  .CardWrapper {
    display: flex;
    gap: 24px;
  }
`;

const Image = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  @media screen and (max-width: 840px) {
    position: absolute;
    top: -24px;
    height: 48px;
    left: 24px;
    width: 48px;
  }
`;

const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .position {
    color: #2b3939;
    font-size: 22px;
    font-weight: bold;
    width: fit-content;
    font-family: "LeagueSpartanBold";
    &:hover {
      color: #5ca5a5;
      cursor: pointer;
    }
    @media screen and (max-width: 840px) {
      font-size: 15px;
    }
  }

  .bulletDivider {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #b7c4c4;
  }
`;

const ContentTools = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  @media screen and (max-width: 840px) {
    width: 100%;
  }
`;

const LineInfoTop = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  align-items: center;
  @media screen and (max-width: 840px) {
    gap: 32px;
  }
  .company {
    color: #5ca5a5;
    font-weight: 700;
    font-size: 18px;
    @media screen and (max-width: 840px) {
      font-size: 13px;
    }
  }
  .New {
    padding: 7px 9px;
    padding-bottom: 4px;
    background-color: #5ca5a5;
    border-radius: 12px;
    color: #fff;
    line-height: normal;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    text-align: center;
    font-family: "LeagueSpartanBold";
  }
  .Featured {
    padding: 7px 9px;
    padding-bottom: 4px;
    background-color: #2b3939;
    border-radius: 12px;
    color: #fff;
    line-height: normal;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    text-align: center;
    font-family: "LeagueSpartanBold";
  }
  .new-info {
    display: flex;
    gap: 8px;
  }
`;

const Divider = styled.div`
  width: 100%;
  background-color: #b7c4c4;
  height: 1px;
  display: none;
  @media screen and (max-width: 840px) {
    display: block;
  }
`;

const LineInfo = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  align-items: center;
  @media screen and (max-width: 840px) {
    gap: 10px;
  }
  .bottomInfo {
    font-family: "LeagueSpartanMedium";
    font-size: 18px;
    font-weight: 500;
    color: #7c8f8f;
    line-height: 24px;
    @media screen and (max-width: 840px) {
      font-size: 16px;
    }
  }
`;

function VagaCard({
  company,
  logo,
  novo,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}: iVagas) {
  return (
    <Card $featured={featured}>
      <div className="CardWrapper">
        <Image src={logo} alt={company} />
        <ContentInfo>
          <LineInfoTop>
            <span className="company">{company}</span>
            <div className="new-info">
              {novo && <span className="New">New!</span>}
              {featured && <span className="Featured">Featured</span>}
            </div>
          </LineInfoTop>
          <span className="position">{position}</span>
          <LineInfo>
            <span className="bottomInfo">{postedAt}</span>
            <div className="bulletDivider"></div>
            <span className="bottomInfo">{contract}</span>
            <div className="bulletDivider"></div>
            <span className="bottomInfo">{location}</span>
          </LineInfo>
        </ContentInfo>
      </div>
      <Divider></Divider>
      <ContentTools>
        <ListTools content={role} type="role" />
        <ListTools content={level} type="level" />
        <ListTools content={languages} type="languages" />
        <ListTools content={tools} type="tools" />
      </ContentTools>
    </Card>
  );
}

export default VagaCard;
