import React, {useEffect} from "react";
import {AxisOptions, Chart} from "react-charts";
import ComponentHeader from "../../ComponentHeader";
import {findPriceHistoryAllOffersByPaintingId} from "../../../_actions/offers-actions";
import {useDispatch} from "react-redux";

const PriceHistory = ({sales_history, offers_history, painting_details}) => {

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
        } ),
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
        <div className={'border-bottom p-2'}>
            <div className={'chart-size mb-5'}>

                {ComponentHeader(painting_details.title + " Price History")}
                <Chart options={{
                    data,
                    primaryAxis,
                    secondaryAxes,
                }}/>
            </div>
        </div>
    );
};

export default PriceHistory;

