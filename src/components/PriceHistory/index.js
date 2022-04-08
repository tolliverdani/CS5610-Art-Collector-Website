import React from "react";
import {AxisOptions, Chart} from "react-charts";
import ComponentHeader from "../ComponentHeader";

const PriceHistory = () => {

    /* TODO: we need to move this data and make sure it's organized
        in a way that makes sense for the graph */

    type PricePoint = {
        date: Date,
        price: number,
    }

    type Series = {
        label: string,
        data: PricePoint
    }

    const data: Series[] = [
        {
            label: "Sale",
            data: [
                {
                    date: new Date("1987/01/11"),
                    price: 200
                },
                {
                    date: new Date("1992/07/04"),
                    price: 500
                },
                {
                    date: new Date("1999/03/19"),
                    price: 1000
                },
                {
                    date: new Date("2008/09/04"),
                    price: 800
                },
                {
                    date: new Date("2013/12/25"),
                    price: 1100
                },
                {
                    date: new Date("2021/02/14"),
                    price: 2500
                }
            ]
        },
        {
            label: "Bid",
            data: [
                {
                    date: new Date("1986/05/11"),
                    price: 190
                },
                {
                    date: new Date("1987/01/11"),
                    price: 200
                },
                {
                    date: new Date("1992/07/04"),
                    price: 500
                },
                {
                    date: new Date("1999/03/19"),
                    price: 1000
                },
                {
                    date: new Date("2008/06/04"),
                    price: 700
                },
                {
                    date: new Date("2008/09/04"),
                    price: 800
                },
                {
                    date: new Date("2013/12/25"),
                    price: 1100
                },
                {
                    date: new Date("2021/02/14"),
                    price: 2500
                },
                {
                    date: new Date("2021/05/30"),
                    price: 3000
                }
            ]
        }
    ]

    const primaryAxis = React.useMemo(
        (): AxisOptions<PricePoint> => ({
            getValue: datum => datum.date,
            scaleType: "localTime"
        }),
        []
    )

    const secondaryAxes = React.useMemo(
        (): AxisOptions<PricePoint>[] => [
            {
                getValue: datum => datum.price,
            },
        ],
        []
    )

    return (
        <>
            <div className={'chart-size mb-5'}>
                {ComponentHeader("Price History")}
                <Chart options={{
                    data,
                    primaryAxis,
                    secondaryAxes
                }}/>
            </div>
        </>
    );
};

export default PriceHistory;

