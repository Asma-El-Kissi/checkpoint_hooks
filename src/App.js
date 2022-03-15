import React, {useState} from 'react';
import './App.css';
import MovieList from './components/MovieList.js'
import MovieCard from './components/MovieCard.js'
import Filter from './components/Filter.js'
import Add from './components/Add.js'
import Search from './components/Search.js'

function App() {
  const [keysearch, setKeysearch] = useState("")
  const [newRate, setNewRate] = useState(1)
  const [movies, setMovies] = useState([
    {
      posterUrl: "https://www.citizenkid.com/uploads/medias/cache/post_cover/rc/sULCbo3M//uploads/medias/64/48/64489dff2b86d06426ebdf5f3459265b5d46b075.jpeg",
      title: "Pas pareil... Et pourtant ! ",
      ficheTechnique: "Sorti le 23 février 2022",
      description:"Un film d'animation pour enfants composé de 4 courts métrages autour des oiseaux. Que notre couleur ne soit pas la même, que l’on soit plus petit ou plus grand, chacun peut apporter sa pierre à l’édifice et cohabiter pour le meilleur. Sortir des aprioris, se libérer du regard des autres, et réaliser ce pourquoi nous sommes fait.",
      rate: 2,
    },
    {
      posterUrl: "https://www.citizenkid.com/uploads/medias/cache/post_cover/rc/Ybwciv9K//uploads/medias/2b/b6/2bb694851f0d09d36b6bc609be31fb5ee20de93c.jpeg",
      title: "King",
      ficheTechnique: "Un film de : David Moreau Avec Erard Darmon, Lou Lambrecht, Léo Lorleac'h, Thibault de Montalembert, Clémentine Baert et Artus de Nationalité Français Sorti le 16 février 2022",
      description:"King, un lionceau destiné à un trafic, s'échappe de l'aéroport et se réfugie dans la maison d'Inès, 12 ans et Alex, 15.",
      rate: 5,
    },
      {
        posterUrl: "https://www.citizenkid.com/uploads/medias/cache/post_cover/rc/fkUE5Kb5//uploads/medias/f0/be/f0be78a0de1e5143904469811115b8e1fc9dbca7.jpeg",
        title: "Uncharted",
        ficheTechnique: "Un film de : Ruben Fleischer Avec Tom Holland, Mark Wahlberg, Antonio Banderas de Nationalité Américain Sorti le 16 février 2022",
        description:"Adapté d'une des séries de jeux vidéo les plus célèbres et reconnues, Uncharted raconte l'histoire du jeune et intrépide Nathan Drake et de son partenaire à l'humour vif et piquant, Victor Sully Sullivan, lors de leur première chasse aux trésors.",
        rate: 2,
      },
      {
        posterUrl: "https://www.citizenkid.com/uploads/medias/cache/post_cover/rc/ScN8CcyJ//uploads/medias/89/89/898976ab8bd185ad98cf02b4ea0bacb5530199f0.jpeg",
        title: "White Snake",
        ficheTechnique: "Un film de : Ji Zhao, Amp Wong Avec Zhe Zhang, Tianxiang Yang, He Zhang Sorti le 9 février 2022",
        description:"Xuan, un chasseur de serpents, trouve une jeune femme errant dans les montagnes. Elle a perdu la mémoire et ne se souvient que de son prénom, Blanca.",
        rate: 4,
      },
      {
        posterUrl: "https://www.citizenkid.com/uploads/medias/cache/post_cover/rc/THmawwi9//uploads/medias/59/95/599527322cf310091e4333c55f2e3a89be197d59.jpeg",
        title: "Le Chêne",
        ficheTechnique: "Un film de : Michel Seydoux, Laurent Charbonnier, de Nationalité Français Sorti le 23 février 2022",
        description:"Il était une fois l’histoire d’un chêne, vieux de 210 ans, devenu un pilier en son royaume.",
        rate: 3,
      },

      {
        posterUrl: "https://www.citizenkid.com/uploads/medias/cache/post_cover/rc/r2CwpSX1//uploads/medias/69/35/6935fc589562068315418baea6ca659abd83e03a.jpeg",
        title: "Petite nature",
        ficheTechnique: "Un film de : Samuel Theis, Avec Aliocha REINERT, Antoine REINARTZ, Mélissa OLEXA, Izïa HIGELIN, Jade SCHWARTZ, Ilario GALLO, Abdel BENCHENDIKH de Nationalité Français Sorti le 9 février 2022",
        description:"Johnny a dix ans. Mais à son âge, il ne s’intéresse qu’aux histoires des adultes. Dans sa cité HLM en Lorraine, il observe avec curiosité la vie sentimentale agitée de sa jeune mère. Cette année, il intègre la classe de Monsieur Adamski, un jeune titulaire qui croit en lui et avec lequel il pousse la porte d’un nouveau monde.",
        rate: 4,
      },
      {
        posterUrl: "https://www.citizenkid.com/uploads/medias/cache/post_cover/rc/q6RdE5Rh//uploads/medias/b8/16/b816380bf741a8d611f5bc73583b70fcc2ab4623.jpeg",
        title: "Jean-Michel le caribou et les histoires d'amour interdites",
        ficheTechnique: "Un film de : Mathieu Auvray, de Nationalité Français et Belge Sorti le 9 mars 2022",
        description:"Xuan, un chasseur de serpents, trouve une jeune femme errant dans les montagnes. Elle a perdu la mémoire et ne se souvient que de son prénom, BlancaMarcel, le maire, décide d’interdire les histoires d’amour : ça n’engendre que des problèmes et ça rend tout le monde malheureux !.",
        rate: 4,
      },
      {
        posterUrl: "https://www.citizenkid.com/uploads/medias/cache/post_cover/rc/GH25loES//uploads/medias/01/56/015614681c37ee359f244628ccfbbff94a402754.jpeg",
        title: "Hopper et le hamster des ténèbres",
        ficheTechnique: "Un film de : Ben Stassen, Benjamin Mousquet Avec Thomas Solivérès, Chloé Jouannet, Nicolas Maury de Nationalité Belge Sorti le 16 février 2022",
        description:"Le jeune Hopper Chickenson est le fils adoptif du Roi Arthur, un célèbre lapin aventurier. Mi poulet / mi lapin, notre jeune héros est lui-même obsédé par l'aventure, mais sa maladresse lui joue souvent des tours.",
        rate: 5,
      },

]);
const search=(text)=>{
  setKeysearch(text)
}
const setRate=(rate)=>{
  setNewRate(rate)
}
const addMovie=(movie)=>{
  setMovies(movies.concat(movie))
}
return (
  <div classname="App">
    <Filter search={search} setRate={setRate} newRate={newRate}/>
    {/* <Filter setSearch={setSearch} setRate={setRate} /> */}
    {/* <MovieList movies={movies}/> */}
    <MovieList addMovie={addMovie} movies={movies.filter(el=> el.rate>=newRate&& el.title.toLowerCase().includes(keysearch.toLowerCase().trim()))} />
    {/* <MovieList movies={movies.filter(mv=>
    mv.title.toLowerCase().includes(Filter.toLowerCase()) && (mv.rating >= rate))}/> */}
    
  </div>
);
}

export default App;