import styled from "styled-components";
import bgHeaderDesktop from "@/assets/images/bg-header-desktop.svg";
import bgHeaderMobile from "@/assets/images/bg-header-mobile.svg";

const BannerContainer = styled.div`
  width: 100%;
  height: 156px;
  background-color: #5ca5a5;
  background-image: ${bgHeaderDesktop};

  @media screen and (max-width: 768px) {
    background-image: ${bgHeaderMobile};
  }
`;

function Banner() {
  return <BannerContainer></BannerContainer>;
}

export default Banner;
