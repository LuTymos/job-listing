import { iVagas } from "@/data/@types/iVagas";
import styled from "styled-components";
import VagaCard from "@/components/VagaCard";

const ContainerVagas = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 76px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

interface ListaVagasProps {
  vagas: iVagas[];
}

function ListaVagas({ vagas }: ListaVagasProps) {
  return (
    <ContainerVagas>
      {vagas.map((vaga) => (
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
