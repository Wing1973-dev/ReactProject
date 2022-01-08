import React, {useState} from 'react';
import Tabitem from './UI/tabitem/Tabitem';

function Tabs() {
    const[tabsHints, setTabsHints] = useState([
        {id: 1, isActive: true, iClassName: 'fas fa-border-all', fun: ChangeCurrentTabitem},
        {id: 2, isActive: false, iClassName: 'fas fa-chart-pie', fun: ChangeCurrentTabitem},
        {id: 3, isActive: false, iClassName: 'fas fa-briefcase', fun: ChangeCurrentTabitem}
    ]);

    function ChangeCurrentTabitem(e) {
        const temptabsHints = [...tabsHints];

        for (const tab of temptabsHints) {
            tab.isActive = false;
        }

        const current = temptabsHints.find(item => item.id == e.target.id);
        current.isActive = true;

        const indexCurrent = temptabsHints.findIndex(item => item.id == e.target.id);
        temptabsHints[indexCurrent] = current;

        setTabsHints(temptabsHints);
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
