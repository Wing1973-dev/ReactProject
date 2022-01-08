import React, {useState} from 'react';
import Tabitem from './UI/tabitem/Tabitem';

function Tabs() {
    const[tabsHints, setTabsHints] = useState([
        {id: 1, isActive: true, iClassName: 'fas fa-border-all', fun: ChangeCurrentTabitem},
        {id: 2, isActive: false, iClassName: 'fas fa-chart-pie', fun: ChangeCurrentTabitem},
        {id: 3, isActive: false, iClassName: 'fas fa-briefcase', fun: ChangeCurrentTabitem}
    ]);

    function ChangeCurrentTabitem(e) {
        
        for (const tab of tabsHints) {
            tab.isActive = false;
        }

        const current = tabsHints.find(item => item.id == e.target.id);
        current.isActive = true;

        const indexCurrent = tabsHints.findIndex(item => item.id == e.target.id);
        tabsHints[indexCurrent] = current;

        setTabsHints(tabsHints);

        console.log(current);
    }

    return (
        <div className="container">
            <Tabitem hintsTab={tabsHints[0]}/>
            <Tabitem hintsTab={tabsHints[1]}/>
            <Tabitem hintsTab={tabsHints[2]}/>
        </div>
    );
}

export default Tabs;
