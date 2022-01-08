import React, {useState} from 'react';
import './styles/App.css';
import booksimage from './img/3.JPG';
import arrowleft from './img/left-arrow.png';
import arrowright from './img/right-arrow.png';
import face from './img/face.JPG';
import Booksitem from './components/Booksitem';
import PaginationSizeSelect from './components/PaginationSizeSelect';
import SimpleButton from './components/UI/button/SimpleButton';
import SimpleButtonImg from './components/UI/button/SimpleButtonImg';
import Tabs from './components/Tabs';

function App() {
    
    const[resultsCount, setResultsCount] = useState("of 241 products");
    const[buttonsHints, setbuttonsHints] = useState([
        {id: 1, content: '1', isCurrent: true, fun: ChangeResultsCount},
        {id: 2, content: '2', isCurrent: false, fun: ChangeResultsCount},
        {id: 3, content: '3', isCurrent: false, fun: ChangeResultsCount},
        {id: 4, content: '4', isCurrent: false, fun: ChangeResultsCount},
        {id: 5, content: '5', isCurrent: false, fun: ChangeResultsCount},
        {id: 6, content: '6', isCurrent: false, fun: ChangeResultsCount},
        {id: 7, content: '7', isCurrent: false, fun: ChangeResultsCount},
        {id: 13, content: '13', isCurrent: false, fun: ChangeResultsCount}
    ]);
    
 
    function  ChangeResultsCount(e) {
                
        setResultsCount(`of ${getRandomInRange(10, 300)} products`);
        
        for (const button of buttonsHints) {
            button.isCurrent=false;
        }

        const current = buttonsHints.find(item => item.id == e.target.id);
        current.isCurrent = true;

        const indexCurrent = buttonsHints.findIndex(item => item.id == e.target.id);
        buttonsHints[indexCurrent] = current;

        setbuttonsHints(buttonsHints);
        
    } 

    function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    
    return (
        <div >
            <header>
                <div className='container'>
                    <div className="hamburger">
                        <div className="hamburger_layer"></div>
                    </div>
                    <div className="logo">Company Dashboard</div>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Dashboard</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Purchase</a></li>
                            <li className="stretch"></li>
                        </ul>
                    </nav>
                    <div className="client">
                        <span>George Orwell</span>
                        <img src={face} alt="face" />
                    </div>
                </div>
            </header>
            <div className="tabs">
                <Tabs/>
            </div>
            <section className="books_wrapper">
                <section className="books">
                    <h2 className="books_title">Goods</h2>
                    <div className="pagination-wrapper">
                        <PaginationSizeSelect/>
                        <div className="results-count">{resultsCount}</div>
                        <button type="submit"  className="btn-sm">submit</button>
                        <div className="pagination">
                            <SimpleButtonImg hints={{img: arrowleft, altimg: '<'}}/>
                            <SimpleButton hints={buttonsHints[0]}/>
                            <SimpleButton hints={buttonsHints[1]}/>
                            <SimpleButton hints={buttonsHints[2]}/>
                            <SimpleButton hints={buttonsHints[3]}/>
                            <SimpleButton hints={buttonsHints[4]}/>
                            <SimpleButton hints={buttonsHints[5]}/>
                            <SimpleButton hints={buttonsHints[6]}/>
                            <label>...</label>
                            <SimpleButton hints={buttonsHints[7]}/>
                            <SimpleButtonImg hints={{img: arrowright, altimg: '>'}}/>
                        </div>
                    </div>
                    <div className="books_items">
                        <Booksitem book={{img: booksimage, altimg: '3', name: 'Lorem ipsum dolor sit amet.', button: 'Buy'}}/>
                        <Booksitem book={{img: booksimage, altimg: '3', name: 'Lorem ipsum dolor sit amet.', button: 'Buy'}}/>
                        <Booksitem book={{img: booksimage, altimg: '3', name: 'Lorem ipsum dolor sit amet.', button: 'Buy'}}/>
                        <Booksitem book={{img: booksimage, altimg: '3', name: 'Lorem ipsum dolor sit amet.', button: 'Buy'}}/>
                        <Booksitem book={{img: booksimage, altimg: '3', name: 'Lorem ipsum dolor sit amet.', button: 'Buy'}}/>
                        <Booksitem book={{img: booksimage, altimg: '3', name: 'Lorem ipsum dolor sit amet sit, Lorem ipsum dolor sit amet.', button: 'Buy'}}/>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default App;
