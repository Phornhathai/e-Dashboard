import CustomerChart from "../../components/customerchart/CustomerChart"
import GrowthChart from "../../components/growthchart/GrowthChart"
import ListProduct from "../../components/listproduct/ListProduct"
import TopProduct from "../../components/topproduct/TopProduct"
import Totalsale from "../../components/totalsale/Totalsale"
import "./overview.scss"

const Overview = () => {
  return (
    <div className="overview">
      <div className="box box1">
        <TopProduct />
      </div>
      <div className="box box2">
        <Totalsale />
      </div>
      <div className="box box3">
        <CustomerChart />
        </div>
      <div className="box box4">
        <ListProduct />
      </div>
      <div className="box box5">
        <GrowthChart />
      </div>
  

    </div>
  )
}
export default Overview