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
          <h3 className="sidebarTitle">Companies</h3>
        </div>  
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Contacs</h3>
        </div>  
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Investment</h3>
          <ul className="sidebarList">
            <Link to="/newcompsearch" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
                Overview
            </li>
            </Link>
            <Link to="/compcompanies" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Compare companies
              </li>
            </Link>
            <Link to="/ranking" className="link">
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Ranking Chart
            </li>
            </Link>
            <Link to="/rankinglist" className="link">
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Ranking List
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
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Digital Performance</h3>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Talent</h3>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">----------</h3>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Future</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Intelligence
              </li>
            </Link>
            
            <Link to="/compsearch" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Transactions
              </li>
            </Link>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
            <Link to="/overview" className="link">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            </Link>
            <Link to="/company" className="link">
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            </Link>
            <Link to="/products" className="link">
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
            </Link>            
          </ul>
        </div>
        </div>
    </div>
  );
}
