import styled from "styled-components";
import GlobalStyles from "@/components/GlobalStyles";
import bgHeaderDesktop from "@/assets/images/bg-header-desktop.svg";
import bgHeaderMobile from "@/assets/images/bg-header-mobile.svg";
import vagas from "@/data/services/data.json";
import ListaVagas from "@/components/ListasVagas";

const HeaderBannerContainer = styled.div`
  width: 100%;
  height: 156px;
  background-color: #5ca5a5;
  background-image: url(${bgHeaderDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 768px) {
    background-image: url(${bgHeaderMobile});
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--LightGrayishCyan);
`;

function App() {
  return (
    <Background>
      <GlobalStyles />
      <HeaderBannerContainer />
      <ListaVagas vagas={vagas} />
    </Background>
  );
}

export default App;
