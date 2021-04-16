import React, { useEffect, useState } from 'react';
import { pokemonData } from '../pokemonData';
import { useParams } from 'react-router-dom';

const Pokemon:React.FC = () => {

  let { pokemonId } = useParams<{pokemonId: string}>();
  let [mon, setMon] = useState<{id: number, num: string, name: string, img: string}>({
    id: 0,
    num: '',
    name: '',
    img: '',
    // type: [''],
    // height: '',
    // weight: '',
    // candy: '',
    // candy_count: 0,
    // egg: '',
    // spawn_chance: 0,
    // avg_spawns: 0,
    // spawn_time: '',
    // multipliers: [],
    // weaknesses: [],
    // prev_evolution: [],
    // next_evolution: []
  });

  const [pokemon, setPokemon] = useState(pokemonData);

  useEffect(() => {
      let foundMon = pokemon.find(mon => mon.id === +pokemonId);
      if(foundMon){
          setMon(foundMon);
      }
  }, [mon, pokemonId]);

  return (
    <div id="dashboard">

      <div className="row text-center mt-3">
          <div className="col">
              <h2>{mon.name}</h2>
          </div>
      </div>

    </div>
  );
}

export default Pokemon;
