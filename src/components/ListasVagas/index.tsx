import { iVagas } from "@/data/@types/iVagas";
import styled from "styled-components";
import VagaCard from "@/components/VagaCard";
import { useContext } from "react";
import { FilterContext } from "@/data/context/FilterContext";

const ContainerVagas = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 76px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (max-width: 840px) {
    gap: 48px;
  }
`;

interface ListaVagasProps {
  vagas: iVagas[];
}

function ListaVagas({ vagas }: ListaVagasProps) {
  const { tools, role, level, languages } = useContext(FilterContext);

  // Função para verificar se algum filtro está aplicado
  const isFilterApplied =
    tools.length > 0 || role || level || languages.length > 0;

  // Função para filtrar as vagas com base nos critérios
  const filterVagas = (vaga: iVagas) => {
    if (isFilterApplied) {
      return (
        (!tools.length || tools.every((tool) => vaga.tools.includes(tool))) &&
        (!role || vaga.role === role) &&
        (!level || vaga.level === level) &&
        (!languages.length ||
          languages.every((language) => vaga.languages.includes(language)))
      );
    }
    return true; // Se nenhum filtro estiver aplicado, exibir todas as vagas
  };

  // Aplicar filtros e renderizar a lista
  const filteredVagas = vagas.filter(filterVagas);
  return (
    <ContainerVagas>
      {filteredVagas.map((vaga) => (
        <VagaCard
          key={vaga.id}
          company={vaga.company}
          logo={vaga.logo}
          novo={vaga.novo}
          featured={vaga.featured}
          position={vaga.position}
          role={vaga.role}
          level={vaga.level}
          postedAt={vaga.postedAt}
          contract={vaga.contract}
          location={vaga.location}
          languages={vaga.languages}
          tools={vaga.tools}
        />
      ))}
    </ContainerVagas>
  );
}

export default ListaVagas;
