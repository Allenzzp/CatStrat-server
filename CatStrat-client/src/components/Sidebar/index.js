import ListTabs from "./ListTabs";
import "./Sidebar.scss";
import cat from "../../images/cat.png"



export default function Sidebar({tab, setTab}) {

  return (
    <div className="sidebar">
      <div className="sidebar__head">
        <img 
            className="sidebar--centered sidebar__logo"
            src={cat}
            alt="CatStrat"
        />
        <p className="sidebar__title">CatStrat</p>
      </div>
      <hr className="sidebar__separator sidebar--centered"/>
      <nav className="siderbar__menu">
        <ListTabs tab={tab} setTab={setTab} />
      </nav>
    </div>
  );
}