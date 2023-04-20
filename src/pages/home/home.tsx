import { useEffect, useState } from "react";
import { getPlayers } from "../../service/players/player.service";
import { formCreatedDto } from "../../service/players/player.interfase";
import { Header } from "./component/header";
import { Footer } from "./component/footer";

export const Home = () => {
  const [players, setPlayers] = useState<formCreatedDto[]>([]);
  useEffect(() => {
    fecthPlayers();
  }, []);

  const fecthPlayers = async () => {
    try {
      const playersData = await getPlayers();
      setPlayers(playersData);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div>
      <Header />
        <div>
        <h1>Home</h1>
        {players && players.map((player: any) => {
            const { nombre, apellido, No, celular, direccion, fecha } = player;
            return<h5 key={player._id} >{nombre} {apellido} {No} {celular} {direccion} </h5>
        })}
        </div>
        <Footer />
    </div>
  );
};
