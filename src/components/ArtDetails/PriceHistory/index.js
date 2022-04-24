import React, {useEffect} from "react";
import {AxisOptions, Chart} from "react-charts";
import ComponentHeader from "../../ComponentHeader";
import {findPriceHistoryAllOffersByPaintingId} from "../../../_actions/offers-actions";
import {useDispatch} from "react-redux";

const PriceHistory = ({offers_history, painting_details}) => {

    /* TODO: we need to move this data and make sure it's organized
        in a way that makes sense for the graph */

    type PricePoint = {
        date: Date,
        price: number,
    }

    type Series = {
        label: string,
        data: PricePoint[]
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
            label: "Offer",
            data: offers_history
        }
    ]

    const primaryAxis = React.useMemo(
        (): AxisOptions<PricePoint> => ({
            getValue: datum => datum.date,
            scaleType: "localTime"
        } ),
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
        <div className={'border-bottom p-2'}>
            <div className={'chart-size mb-5'}>
                {/*{console.log("here is the data hard coded: " + data[0].label)}*/}
                {/*{console.log("here is the data hard coded: " + data[0].data[0].date)}*/}
                {/*{console.log("here is the data hard coded: " + data[0].data[0].price)}*/}

                {/*{console.log("here is the data hard coded: " + data[1].label)}*/}
                {/*{console.log("here is the data hard coded: " + data[1].data.length)}*/}

                {/*{console.log("here is the data hard coded: " + data[1].data[0].date)}*/}
                {/*{console.log("here is the data hard coded: " + data[1].data[0].price)}*/}
                {/*{console.log("here is the data hard coded: " + data[1].data[1].date)}*/}
                {/*{console.log("here is the data hard coded: " + data[1].data[1].price)}*/}
                {/*{console.log("here is the data hard coded: " + data[1].data[2].date)}*/}
                {/*{console.log("here is the data hard coded: " + data[1].data[2].price)}*/}





                {ComponentHeader(painting_details.title + " Price History")}
                <Chart options={{
                    data,
                    primaryAxis,
                    secondaryAxes
                }}/>
            </div>
        </div>
    );
};

export default PriceHistory;

