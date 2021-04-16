import { type } from 'node:os';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { pokemonData } from '../pokemonData';

const Dashboard:React.FC = () => {

    const [pokemon, setPokemon] = useState(pokemonData);

    const [searchTerm, setSearchTerm] = useState('');
    
    useEffect(() => {

        const foundPokemon = pokemon.filter(mon => {
            return (
                mon.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });

        searchTerm === '' ? setPokemon(pokemonData) : setPokemon(foundPokemon);
    }, [searchTerm]);

    // const handleChange = event => {
    //   console.log(event.target.value);
    //   setSearchTerm(event.target.value);
    // }

    return (
    <div id="dashboard">

        <div className="row text-center mt-3">
            <div className="col">
                <h2>Dashboard</h2>
            </div>
        </div>

        {/* <div className="row d-flex">
            <div className="col text-center">
                <div className="content" form='group'>

                    <input
                        type="text"
                        className="form-control"
                        id="pokemon-search"
                        placeholder="Search for a Pokemon"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div> */}

        <div className="row mt-3">
            {pokemon.map(mon => {
                return (
                        
                  <div className="card mb-3" style={{minWidth: "540px"}} key={mon.id}>
                      <div className="row no-gutters">
                          <div className="col-md-4 d-flex align-items-center justify-content-center">
                              <img src={mon.img} alt={mon.name}/>
                          </div>
                          <div className="col-md-8">
                              <div className="card-body">
                                  <h5 className="card-title">{mon.name}</h5>
                                  <p className="card-text">
                                    <span className="font-weight-bold">Type: </span>
                                    {mon.type.map((t, i) => {
                                      return (
                                        <div>{t}{i === mon.type.length - 1 ? '': ', '}</div>
                                      );
                                    })}
                                    <span className="font-weight-bold">Weaknesses: </span>
                                    {mon.weaknesses.map( (w, i) => {
                                      return (
                                        <div>{w}{i === mon.weaknesses.length - 1 ? '': ', '}</div>
                                      );
                                    })}
                                  </p>
                                  <p className="card-text">
                                    <small className="text-muted">
                                    <Link to={`/pokemon/${mon.id}`} className="card-link">View Details</Link>
                                    </small>
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>

                );
            })}
        </div>

    </div>
    );

}

export default Dashboard;