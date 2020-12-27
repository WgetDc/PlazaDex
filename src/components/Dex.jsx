import React from "react";
import "../styles/styles.css";

class Dex extends React.Component {
    busquedaRef = React.createRef();

  state = {
    pokemon: [],
    hola: 'Wena',
    vacio : 'https://images.wikidexcdn.net/mwuploads/wikidex/2/28/latest/20111224174253/Missingno.gif'
  };

  getPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(data => this.setState({
          pokemon : data
      }) )

      if(this.state.pokemon.sprites.back_default === undefined){
          console.log('Waiting...')
      }
  }


  //Funciona
  getPokiman = async () =>{
        try{
        const pokemonName = this.busquedaRef.current.value.toLowerCase()
        console.log(pokemonName)
        const pokearray = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        const poke = await pokearray.json()
        this.setState({
            pokemon : poke
        })
        console.log(poke)
        console.log(poke.sprites.back_default)
        this.setState(
            {vacio: poke.sprites.front_default}
        )
        console.log(this.state.vacio)
    }catch(error){
        console.log(error)
    }
  }

  getPokeImage = () => {
      if(this.state.pokemon.sprites.back_default != ''){
          return this.state.pokemon.sprites.back_default
      }
          var url = 'https://images.wikidexcdn.net/mwuploads/wikidex/2/28/latest/20111224174253/Missingno.gif'
          return (url)      
  }

 

  render() {
    return (
      <div className="row justify-content-center">
        <div className="dex col-xl-6">
          <div className="card">
              <img className="pokeImagen" src={this.state.vacio} alt=""/>
            <div className="card-body">
              <div className="input-group mb-3">
                <input
                ref={this.busquedaRef}
                  type="text"
                  className="form-control"
                  placeholder="Pokemon name"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={this.getPokiman}
                >
                  Buscar
                </button>
              </div>
              <div className="card-title">Nombre del Pokimon</div>
              <div className="card-text">info general</div>
              {this.state.hola}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dex;
