import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
      <div className="sidebarMenu">
          <h3 className="sidebarTitle">Intellingence</h3>
            <Link to="/compcompanies" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Compare companies
              </li>
            </Link>
            <Link to="/ranking" className="link">
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Ranking Char
            </li>
            </Link>
            <Link to="/rankinglist" className="link">
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Ranking List
            </li>
            </Link>
          </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Companies</h3>
          <ul className="sidebarList">
            <Link to="/compSearch1" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
                Overview
            </li>
            </Link>
          </ul>
        </div>    
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Investment</h3>
          <ul className="sidebarList">
            <Link to="/invesSearch" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
                Overview
            </li>
            </Link>
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Lead Assesment
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Teck Stack</h3>
            <ul className="sidebarList">
              <Link to="/teckSearch" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                  Overview
              </li>
              </Link>
            </ul>          
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Digital Performance</h3>
          <Link to="/digiSearch" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
                Overview
            </li>
            </Link>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Talent</h3>
          <Link to="/talentSearch" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
                Overview
            </li>
            </Link>
        </div>
        </div>
    </div>
  );
}
