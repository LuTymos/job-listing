import { iVagas } from "@/data/@types/iVagas";

function VagaCard({
  id,
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
  return <h2>{level}</h2>;
}

export default VagaCard;
