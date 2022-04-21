import { createContext, useContext, useState, useEffect } from 'react';
import pokemonApi from '../../services/data';
import { urlSlicer } from '../../utils';

const PokemonsContext = createContext();

export const PokemonsProvider = ({ children }) => {
  const firstPage = 'pokemon/?limit=1';

  const [lastPage, setLastPage] = useState();
  const [previousPage, setPreviousPage] = useState();
  const [nextPage, setNextPage] = useState();

  const [pokemonPage, setPokemonPage] = useState();
  const [pokemon, setPokemon] = useState();

  const [frontView, setFrontView] = useState();
  const [hasRearView, setHasRearView] = useState();
  const [maleGenre, setMaleGenre] = useState();
  const [hasGenre, setHasGenre] = useState();
  const [isShiny, setIsShiny] = useState();
  const [hasShiny, setHasShiny] = useState();

  const [sprite, setSprite] = useState();

  const [types, setTypes] = useState();

  useEffect(() => {
    pokemonApi.get(firstPage).then((res) => {
      setPreviousPage(res.data.previous);
      setNextPage(urlSlicer(res.data.next));
      setPokemonPage(urlSlicer(res.data.results[0].url));
      setLastPage(`pokemon/?offset=${res.data.count - 1}&limit=1`);
    });
  }, []);

  useEffect(() => {
    pokemonApi.get(pokemonPage).then((res) => {
      setPokemon(res.data);
      setSprite(res.data.sprites?.front_default);
      setMaleGenre(true);
      setIsShiny(false);
      setFrontView(true);

      if (res.data.sprites?.front_female) {
        setHasGenre(true);
      } else {
        setHasGenre(false);
      }

      if (res.data.sprites?.front_shiny) {
        setHasShiny(true);
      } else {
        setHasShiny(false);
      }

      if (res.data.sprites?.back_default) {
        setHasRearView(true);
      } else {
        setHasRearView(false);
      }

      const pokemonTypes = res.data?.types?.map((type) => type.type.name);
      setTypes(pokemonTypes);
    });
  }, [pokemonPage]);

  useEffect(() => {
    switch (true) {
      case frontView && maleGenre && !isShiny:
        setSprite(pokemon.sprites?.front_default);
        break;

      case !frontView && maleGenre && !isShiny:
        setSprite(pokemon.sprites?.back_default);
        break;

      case frontView && !maleGenre && !isShiny:
        setSprite(pokemon.sprites?.front_female);
        break;

      case !frontView && !maleGenre && !isShiny:
        setSprite(pokemon?.sprites?.back_female);
        break;

      case frontView && maleGenre && isShiny:
        setSprite(pokemon.sprites?.front_shiny);
        break;

      case !frontView && maleGenre && isShiny:
        setSprite(pokemon.sprites?.back_shiny);
        break;

      case frontView && !maleGenre && isShiny:
        setSprite(pokemon.sprites?.front_shiny_female);
        break;

      case !frontView && !maleGenre && isShiny:
        setSprite(pokemon.sprites?.back_shiny_female);
        break;

      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frontView, maleGenre, isShiny]);

  const changeView = () => setFrontView(!frontView);

  const changeGenre = () => setMaleGenre(!maleGenre);

  const changeShiny = () => setIsShiny(!isShiny);

  const goToFirstPage = () => {
    pokemonApi.get(firstPage).then((res) => {
      setPreviousPage(res.data.previous);
      setNextPage(res.data.next);
      setPokemonPage(urlSlicer(res.data.results[0].url));
    });
  };

  const goToPreviousPage = () => {
    pokemonApi.get(previousPage).then((res) => {
      setPreviousPage(res.data.previous);
      setNextPage(res.data.next);
      setPokemonPage(urlSlicer(res.data.results[0].url));
    });
  };

  const goToNextPage = () => {
    pokemonApi.get(nextPage).then((res) => {
      setPreviousPage(res.data.previous);
      setNextPage(res.data.next);
      setPokemonPage(urlSlicer(res.data.results[0].url));
    });
  };

  const goToLastPage = () => {
    pokemonApi.get(lastPage).then((res) => {
      setPreviousPage(res.data.previous);
      setNextPage(res.data.next);
      setPokemonPage(urlSlicer(res.data.results[0].url));
    });
  };

  return (
    <PokemonsContext.Provider
      value={{
        goToFirstPage,
        goToLastPage,
        goToNextPage,
        goToPreviousPage,
        sprite,
        changeGenre,
        changeView,
        changeShiny,
        hasGenre,
        hasShiny,
        pokemon,
        nextPage,
        previousPage,
        hasRearView,
        types,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};

export const usePokemons = () => useContext(PokemonsContext);
