import React, { useEffect, useState } from 'react';
import { pokemonData } from '../pokemonData';
import { useParams } from 'react-router-dom';

const Pokemon:React.FC = () => {

  // let { pokemonId } = useParams();
  // let [mon, setMon] = useState({
  //   id: '',
  //   num: '',
  //   name: '',
  //   img: '',
  //   type: Array<string>,
  //   height: '',
  //   weight: '',
  //   candy: '',
  //   candy_count?: 0,
  //   egg: '',
  //   spawn_chance: 0,
  //   avg_spawns: 0,
  //   spawn_time: '',
  //   multipliers: Array<number> | null,
  //   weaknesses: Array<string>,
  //   prev_evolution?: Array<{num:string, name:string}>,
  //   next_evolution?: Array<{num:string, name:string}>;
  // });

  return (
    <div id="dashboard">

      <div className="row text-center mt-3">
          <div className="col">
              <h2>Pokemon</h2>
          </div>
      </div>

    </div>
  );
}

export default Pokemon;
