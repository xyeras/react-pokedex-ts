import React, { useEffect, useState } from 'react';
import { pokemonData } from '../pokemonData';
import { useParams } from 'react-router-dom';

const Pokemon:React.FC = () => {

  let { pokemonId } = useParams<{pokemonId: string}>();
  let [mon, setMon] = useState<{
    id: number,
    num: string,
    name: string,
    img: string,
    type: Array<string>,
    height: string,
    weight: string,
    candy: string,
    candy_count?: number,
    egg: string,
    spawn_chance: number,
    avg_spawns: number,
    spawn_time: string,
    multipliers: Array<number> | null,
    weaknesses: Array<string>,
    prev_evolution?: Array<{num:string, name:string}>,
    next_evolution?: Array<{num:string, name:string}>
    }>
    
    ({
      id: 0,
      num: '',
      name: '',
      img: '',
      type: [''],
      height: '',
      weight: '',
      candy: '',
      candy_count: 0,
      egg: '',
      spawn_chance: 0,
      avg_spawns: 0,
      spawn_time: '',
      multipliers: [], // FIXME
      weaknesses: [''],
      prev_evolution: [{num: '', name: ''}],
      next_evolution: [{num: '', name: ''}]
  });

  const [pokemon, setPokemon] = useState(pokemonData);

  useEffect(() => {
      let foundMon = pokemon.find(mon => mon.id === +pokemonId);
      if(foundMon){
          setMon(foundMon);
      }
  }, [mon, pokemonId]);

  return (
    <div id="pokemon">

      <div className="row text-center mt-3">
          <div className="col">
              <h2>{mon.name}</h2>
          </div>
      </div>

      <div className="row text-center mt-3">
          <div className="col">
              <img src={mon.img} alt={mon.name}/>
          </div>
      </div>

    </div>
  );
}

export default Pokemon;
