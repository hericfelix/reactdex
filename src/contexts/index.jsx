import { PokemonsProvider } from './pokemons';

const Providers = ({ children }) => {
  return <PokemonsProvider>{children}</PokemonsProvider>;
};

export default Providers;
