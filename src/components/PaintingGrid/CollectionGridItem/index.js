import React from "react";
import {Link} from "react-router-dom";
import GridMenuItem from "../GridMenuItem";

// Reference for content: https://react-bootstrap.github.io/components/dropdowns/

const CollectionGridItem = ({grid_item}) => {

    return (
        <div className={"col card border-0 p-1"}>
            <div className={"d-flex"}>
                {grid_item.hasOwnProperty("image") === false ?
                    <i className={"m-0 p-0 fa fa-2x fa-user-circle"} aria-hidden="true"/>
                    :
                    <Link to={`/art/${grid_item.id}`}>
                        <img className={'img-thumbnail thumb-post img-responsive border-0 align-self-center p-0 mb-1'}
                             src={grid_item.image}
                             alt={grid_item.title}/>
                    </Link>
                }
            </div>

            <div className={'card-title align-items-center'}>

                <GridMenuItem type={"collection"} grid_item={grid_item}/>

                <span className={'card-title'}>
                    <Link className={`small text-decoration-none text-black`}
                          to={`/art/${grid_item.id}`}>
                        <span className={"m-0"}><strong>{grid_item.title}</strong></span>
                        <span
                            className={`small ${grid_item.completitionYear === null ? 'd-none' : ''}`}>, {grid_item.completitionYear}</span>
                    </Link>
                    <Link className={`text-decoration-none text-dark`}
                          to={`/artist/${grid_item.artistUrl}/${grid_item.artistId}`}>
                        <p>{grid_item.artistName}</p>
                    </Link>
                </span>
            </div>
        </div>

    )
}

export default CollectionGridItem;