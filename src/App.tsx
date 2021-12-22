import { FC, useEffect, useState } from "react";
import "./App.css";
import Test from "./Test";
import { user } from "./interfaces";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddRecord from './Components/AddRecord'

interface Props {
}

const App: FC<Props> = () => {
  const [users, setUsers] = useState<user[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUsers(res))
      .catch((err) => console.log(err));
  }, []);
  // const t = users.map((x) => <p>{x.name}</p>);
  return (
    <div className="App">
      {/* {t} */}
      {/* <Test users={users} /> */}
      <AddRecord />
    </div>
  );
};

export default App;
