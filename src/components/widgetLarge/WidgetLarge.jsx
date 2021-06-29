import "./widgetLarge.css"

export default function WidgetLarge() {

    const Button = ({type}) => {
        return <button className={"widgetLargeButton " + type}>{type}</button>
    };

    return (
        <div className="widgetLarge">
            <h3 className="widgetLargeTtitle">Latest Transactions</h3>
            <table className="widgetLargeTable">
                <tr className="widgetLargeTr">
                    <th className="widgetLargeTh">Customer</th>
                    <th className="widgetLargeTh">Date</th>
                    <th className="widgetLargeTh">Amount</th>
                    <th className="widgetLargeTh">Status</th>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://scontent.fhio2-1.fna.fbcdn.net/v/t1.6435-9/64701745_10219068466291992_265138256851501056_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=W0mfFq8nIqsAX-GIjdI&_nc_ht=scontent.fhio2-1.fna&oh=5582a18c1bf65254f7f70afc47ccb461&oe=60D125A9" alt="" className="widgetLargeImg"></img>
                        <span className="widgetLargeName">Joe Cobarrubias</span>
                    </td>
                    <td className="widgetLargeDate">15 July 2021</td>
                    <td className="widgetLargeAmount">$142.00</td>
                    <td className="widgetLargeStatus"><Button type="Approved"/></td>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://scontent.fhio2-1.fna.fbcdn.net/v/t1.6435-9/64701745_10219068466291992_265138256851501056_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=W0mfFq8nIqsAX-GIjdI&_nc_ht=scontent.fhio2-1.fna&oh=5582a18c1bf65254f7f70afc47ccb461&oe=60D125A9" alt="" className="widgetLargeImg"></img>
                        <span className="widgetLargeName">Joe Cobarrubias</span>
                    </td>
                    <td className="widgetLargeDate">15 July 2021</td>
                    <td className="widgetLargeAmount">$142.00</td>
                    <td className="widgetLargeStatus"><Button type="Declined"/></td>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://scontent.fhio2-1.fna.fbcdn.net/v/t1.6435-9/64701745_10219068466291992_265138256851501056_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=W0mfFq8nIqsAX-GIjdI&_nc_ht=scontent.fhio2-1.fna&oh=5582a18c1bf65254f7f70afc47ccb461&oe=60D125A9" alt="" className="widgetLargeImg"></img>
                        <span className="widgetLargeName">Joe Cobarrubias</span>
                    </td>
                    <td className="widgetLargeDate">15 July 2021</td>
                    <td className="widgetLargeAmount">$142.00</td>
                    <td className="widgetLargeStatus"><Button type="Pending"/></td>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://scontent.fhio2-1.fna.fbcdn.net/v/t1.6435-9/64701745_10219068466291992_265138256851501056_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=W0mfFq8nIqsAX-GIjdI&_nc_ht=scontent.fhio2-1.fna&oh=5582a18c1bf65254f7f70afc47ccb461&oe=60D125A9" alt="" className="widgetLargeImg"></img>
                        <span className="widgetLargeName">Joe Cobarrubias</span>
                    </td>
                    <td className="widgetLargeDate">15 July 2021</td>
                    <td className="widgetLargeAmount">$142.00</td>
                    <td className="widgetLargeStatus"><Button type="Approved"/></td>
                </tr>
            </table>
        </div>
    )
}
