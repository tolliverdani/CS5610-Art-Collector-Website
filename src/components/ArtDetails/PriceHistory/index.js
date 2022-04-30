import React from "react";
import {AxisOptions, Chart} from "react-charts";
import ComponentHeader from "../../ComponentHeader";
import EmptyChart from "../../Errors/EmptyChart";

const PriceHistory = ({sales_history, offers_history}) => {

    if (sales_history.length === 0) {
        console.log("no sales")
    }
    /* TODO: we need to move this data and make sure it's organized
        in a way that makes sense for the graph */

    type Series = {
        label: string,
        data: [{
            date: Date,
            price: number,
        }]
    }

    const noData:
        Series[] = [
        {
            label: "Sale",
            data: [{
                date: new Date(),
                price: 0,
            }]
        },
        {
            label: "Offer",
            data: [{
                date: new Date(),
                price: 0,
            }]
        }
    ]

    const data:
        Series[] = [
        {
            label: "Sale",
            data: sales_history
        },
        {
            label: "Offer",
            data: offers_history
        }
    ]

    const primaryAxis = React.useMemo(
        (): AxisOptions<PricePoint> => ({
            getValue: datum => datum.date,
            scaleType: "localTime",
        }),
        []
    )

    const secondaryAxes = React.useMemo(
        (): AxisOptions<PricePoint>[] => [
            {
                getValue: datum => datum.price,
                showDatumElements: {showPoints: true}
            },
        ],
        []
    )


    return (
        <>
            {ComponentHeader(" Price History")}
            <div className={'p-2 mb-2'}>
                {sales_history.length === 0 && offers_history.length === 0 ?
                    <EmptyChart/>
                    :
                    <div className={'chart-size m-2'}>

                        <Chart options={{
                            data,
                            primaryAxis,
                            secondaryAxes,
                        }}/>
                    </div>
                }
            </div>
        </>
    );
};

export default PriceHistory;

