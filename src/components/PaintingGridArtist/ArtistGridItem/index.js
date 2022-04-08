import React from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";
import {useDispatch} from "react-redux";


// Reference for content: https://react-bootstrap.github.io/components/dropdowns/

const ArtistGridItem = ({grid_item}) => {
    const like = true;

    const likeArtist = () => {
        return !like;
    };

    return (
        // TODO If we remove m-3, it will show as a 4 grid, like defined in the break points
        <div className={"col card border-0 p-1"}>
            <div className={"d-flex"}>
                <img className={'img-thumbnail thumb-post img-responsive border-0 align-self-center p-0 mb-1'}
                     src={grid_item.image}
                     alt={grid_item.title}
                />
            </div>
            <i onClick={likeArtist} className={"position-absolute align-self-end p-2"}>
                {like && <i className="fas fa-heart text-danger"/>}
                {!like && <i className="fas fa-heart text-white"/>}
            </i>
            <div className={'row card-title'}>
                <div className={"col-10"}>
                    <p className={"mb-0"}><strong>{grid_item.artistName}</strong></p>
                    <p className={`${grid_item.originalArtistName === null ? 'd-none' : ''}`}> ({grid_item.originalArtistName})</p>
                </div>
                <DropdownButton className={"col-2 btn p-0 border-0 float-end shadow-none"} variant={"transparent"}
                                size={"sm"}
                                align={"end"} title={""}>
                    <Dropdown.Item>Add to Collection</Dropdown.Item>
                    <Dropdown.Item>More Details</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
    )
}

export default ArtistGridItem;