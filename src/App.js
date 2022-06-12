import React from 'react';
import Homepage from "./components/Homepage";
import Characters from "./components/Characters"
import Films from "./components/Films"
import Species from "./components/Species"
import Starships from "./components/Starships"
import Vehicles from "./components/Vehicles"
import Planets from "./components/Planets"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import FilmInfo from "./components/FilmInfo";
import CharactersInfo from "./components/CharactersInfo";
import SpeciesInfo from "./components/SpeciesInfo";
import StarshipsInfo from "./components/StarshipsInfo";
import VehiclesInfo from "./components/VehiclesInfo";
import PlanetsInfo from "./components/PlanetsInfo";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/characters" element={<Characters />} />
                    <Route path="/characters/:id" element={<CharactersInfo />} />
                    <Route path="/films" element={<Films />} />
                    <Route path="/films/:id" element={<FilmInfo />} />
                    <Route path="/species" element={<Species />} />
                    <Route path="/species/:id" element={<SpeciesInfo />} />
                    <Route path="/starships" element={<Starships />} />
                    <Route path="/starships/:id" element={<StarshipsInfo />} />
                    <Route path="/vehicles" element={<Vehicles />} />
                    <Route path="/vehicles/:id" element={<VehiclesInfo />} />
                    <Route path="/planets" element={<Planets />} />
                    <Route path="/planets/:id" element={<PlanetsInfo />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;

