import "./featuredInfo.css"
import { ExpandLess, ExpandMore } from "@material-ui/icons"

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,021</span>
                    <span className="featuredMoneyRate">
                        -10 <ExpandMore className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to previous month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,048</span>
                    <span className="featuredMoneyRate">
                        -1.6 <ExpandMore className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to previous month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,444</span>
                    <span className="featuredMoneyRate">
                        +7.1 <ExpandLess className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to previous month</span>
            </div>
        </div>
    )
}
