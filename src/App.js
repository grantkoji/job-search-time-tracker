import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from 'AboutMeComponents/HomePage'
import Resume from 'AboutMeComponents/Resume'
import Blogs from 'AboutMeComponents/Blogs'
import AboutMe from 'AboutMeComponents/AboutMe'
import Navbar from 'Navbar/Navbar'

{/* <Route exact path='/quaranteams' render={(routerprops) => <QuaranTeams  {...routerprops}  />}/> 
<Route exact path='/nameem' render={(routerprops) => <NameEm {...routerprops}  />}/> 
<Route exact path='/draftprojector' render={(routerprops) => <DraftProjector {...routerprops}  />}/> 
<Route exact path='/superhire' render={(routerprops) => <SuperHire {...routerprops}  />}/> 
<Route exact path='/fantasyfootball' render={(routerprops) => <Hobbies {...routerprops}  />}/>  
<Route exact path='/timegoals' render={(routerprops) => <TimeTracker {...routerprops} />} /> 
<Route exact path='/todayschedule' render={(routerprops) => <TodaySchedule {...routerprops} />} /> 
<Route exact path='/schedulearchives' render={(routerprops) => <ScheduleArchives  {...routerprops} />} /> 
<Route exact path='/timecharts' render={(routerprops) => <TimeCharts {...routerprops}  />}/ */}
function App() {
  return (
    <div className="App">
        <div className="App">
      {/* <img src={require('./images/gameBannerText.png')} className="imageBanner" alt="Home banner" /> */}
        <Navbar />
      <Switch>
        <Route exact path='/' render={(routerprops) => <HomePage {...routerprops}  />}/> 
        <Route exact path='/resume' render={(routerprops) => <Resume {...routerprops}  />}/> 
        <Route exact path='/blogs' render={(routerprops) => <Blogs {...routerprops}  />}/>  
        <Route exact path='/aboutme' render={(routerprops) => <AboutMe {...routerprops}  />}/>  
        
        {/* <Route exact path='/quaranteams' render={(routerprops) => <QuaranTeams  {...routerprops}  />}/> 
        <Route exact path='/nameem' render={(routerprops) => <NameEm {...routerprops}  />}/> 
        <Route exact path='/draftprojector' render={(routerprops) => <DraftProjector {...routerprops}  />}/> 
        <Route exact path='/superhire' render={(routerprops) => <SuperHire {...routerprops}  />}/> 
        
     
        <Route exact path='/fantasyfootball' render={(routerprops) => <Hobbies {...routerprops}  />}/>  
        <Route exact path='/timegoals' render={(routerprops) => <TimeTracker {...routerprops} />} /> 
        <Route exact path='/todayschedule' render={(routerprops) => <TodaySchedule {...routerprops} />} /> 
        <Route exact path='/schedulearchives' render={(routerprops) => <ScheduleArchives  {...routerprops} />} /> 
        <Route exact path='/timecharts' render={(routerprops) => <TimeCharts {...routerprops}  />}/> */}
      </Switch>

      {/* <br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer /> */}
    </div>
    </div>
  );
}

export default App;
