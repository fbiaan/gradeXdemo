import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      
      <Chart data={userData} title="Lead Assesment" grid dataKey="Active User"/>
      <div className="homeWidgets">
      <FeaturedInfo />
      </div>
    </div>
  );
}
