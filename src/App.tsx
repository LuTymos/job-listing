import styled from "styled-components";
import GlobalStyles from "@/components/GlobalStyles";
import vagas from "@/data/services/data.json";
import ListaVagas from "@/components/ListasVagas";
import { FilterContextProvider } from "./data/context/FilterContext";
import ListFilters from "./components/ListFilters/index.";

const HeaderBannerContainer = styled.div`
  width: 100%;
  height: 156px;
  background-color: #5ca5a5;
  background-image: url(https://job-listing-fawn.vercel.app/images/bg-header-desktop.svg);
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 768px) {
    background-image: url(https://job-listing-fawn.vercel.app/images/bg-header-mobile.svg);
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: var(--LightGrayishCyan);
`;

function App() {
  return (
    <Background>
      <GlobalStyles />
      <FilterContextProvider>
        <HeaderBannerContainer />
        <ListFilters />
        <ListaVagas vagas={vagas} />
      </FilterContextProvider>
    </Background>
  );
}

export default App;
