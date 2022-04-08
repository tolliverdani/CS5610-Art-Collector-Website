import React from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";

// Reference for content: https://react-bootstrap.github.io/components/dropdowns/

const PaintingGridItem = ({grid_item}) => {
    const like = true;

    const likeArtist = () => {
        return !like;
    };

    return (
        // TODO If we remove m-3, it will show as a 4 grid, like defined in the break points
        <div className={"col card border-0 p-2"}>
            <div className={"position-relative d-flex justify-content-end"}>
                <DropdownButton className={"position-absolute btn p-0 border-0 float-end"} variant={"light"} size={"sm"}
                                align={"end"} title={""}>
                    <Dropdown.Item>Make Private / Public</Dropdown.Item>
                    <Dropdown.Item>Favorite / Unfavorite</Dropdown.Item>
                    <Dropdown.Item>Post for Sale</Dropdown.Item>
                    <Dropdown.Item>Post for Barter</Dropdown.Item>
                </DropdownButton>
                <img className={'img-thumbnail thumb-post img-responsive border-0 align-self-center p-0 mb-1'}
                     src={grid_item.image}
                     alt={grid_item.title}
                />
            </div>
            <i onClick={likeArtist} className={"position-absolute align-self-end p-2"}>
                {like && <i className="fas fa-heart text-danger"/>}
                {!like && <i className="fas fa-heart text-white"/>}
            </i>
            <div className={'card-title align-items-center'}>
                <span>
                    <span className={"mb-0"}>{grid_item.artistName}</span>
                    <DropdownButton className={"btn p-0 border-0 float-end shadow-none"} variant={"transparent"}
                                    size={"sm"}
                                    align={"end"} title={""}>
                        <Dropdown.Item>Artist Page</Dropdown.Item>
                        <Dropdown.Item>Favorite / Unfavorite</Dropdown.Item>
                    </DropdownButton>
                </span>
            </div>
            <div className={'card-title'}>
                <p className={"m-0"}><strong>{grid_item.title}</strong></p>
                <p className={"mb-0"}>{grid_item.artistName}<span
                    className={`${grid_item.completitionYear === null ? 'd-none' : ''}`}>, {grid_item.completitionYear}</span>
                </p>
            </div>
        </div>
    )
}

export default PaintingGridItem;