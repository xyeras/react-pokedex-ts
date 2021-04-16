import { type } from 'node:os';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { pokemonData } from '../pokemonData';

const Dashboard:React.FC = () => {

    const [pokemon, setPokemon] = useState(pokemonData);

    return (
    <div id="dashboard">

        <div className="row text-center mt-3">
            <div className="col">
                <h2>Dashboard</h2>
            </div>
        </div>

        <div className="row mt-3">
            {pokemon.map(mon => {
                return (
                        
                  <div className="card mb-3" style={{maxWidth: "540px"}} key={mon.id}>
                      <div className="row no-gutters">
                          <div className="col-md-4">
                              <img src={mon.img} alt={mon.name}/>
                          </div>
                          <div className="col-md-8">
                              <div className="card-body">
                                  <h5 className="card-title">{mon.name}</h5>
                                  <p className="card-text">
                                    Type: {mon.type.map( (t, i) => {
                                      return (
                                        <div>{t}{i === mon.type.length - 1 ? '': ', '}</div>
                                      );
                                    })}
                                    Weaknesses: {mon.weaknesses.map( (w, i) => {
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