import React, { useState } from 'react';
import Button from './components/Button';
import Graph from './components/Graph';
import croissantImg from './image.png';
import pancakeImg from './pancake.png';
import cookieImg from './cookie.png';
import donoughtImg from './donought.png';
import './App.css';

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState('');
  
  const handleButtonClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const getIngredients = (recipe) => {
    switch (recipe) {
      case 'crossiant':
        return { flour: 200, butter: 100, eggs: 2, sugar: 50 };
      case 'pancake':
        return { flour: 150, eggs: 1, butter: 50, sugar: 25 };
      case 'cookie':
        return { flour: 100, butter: 75, sugar: 75, eggs: 1 };
      case 'donought':
        return { flour: 150, butter: 100, sugar: 250, eggs: 50 };
      default:
        return {};
    }
  };

  return (
    <div className="container">
      <div className="center-content">
        <table className="button-table">
          <tbody >
            <tr >
              <td><Button name="Crossiant" className="bb" image={croissantImg} onClick={() => handleButtonClick('crossiant')} /></td>
              <td><Button name="Pancake" className="bb" image={pancakeImg} onClick={() => handleButtonClick('pancake')} /></td>
            </tr>
            <tr>
              <td><Button name="Cookie" className="bb" image={cookieImg} onClick={() => handleButtonClick('cookie')} /></td>
              <td><Button name="Donought" className="bb" image={donoughtImg} onClick={() => handleButtonClick('donought')} /></td>
            </tr>
          </tbody>
        </table>
      </div>

      {selectedRecipe && (
        <div className="graph-container">
          <Graph ingredients={getIngredients(selectedRecipe)} />
        </div>
      )}
    </div>
  );
};

export default App;


