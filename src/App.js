import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import { Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/profile" render={() => <Profile store={props.store} />}/>
                <Route path="/dialogs" render={() => <DialogsContainer   />}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Setting}/>
            </div>

        </div>
    )
}

export default App;