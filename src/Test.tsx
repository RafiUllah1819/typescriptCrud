import { FC } from "react";
import { user } from "./interfaces";
interface Props {
  users: user[];
}
const Test: FC<Props> = ({ users }) => {
  const t = users.map((x) => (
    <p>
      {x.name}
      {x.username}
      {x.address.street}
      {x.address.zipcode}
    </p>
  ));
  return <div>{t}</div>;
};
export default Test;
