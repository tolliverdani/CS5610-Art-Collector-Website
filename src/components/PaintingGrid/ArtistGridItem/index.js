import React from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";
import {Link} from "react-router-dom";


// Reference for content: https://react-bootstrap.github.io/components/dropdowns/

const ArtistGridItem = ({grid_item}) => {
    const like = false;

    const likeArtist = () => {
        return !like;
    };

    return (
        // TODO If we remove m-3, it will show as a 4 grid, like defined in the break points
        <div className={"col card border-0 p-1"}>
            <div className={"d-flex"}>
                <Link to={`/artist/${grid_item.url}/${grid_item.id}`}>
                    <img className={'img-thumbnail thumb-post img-responsive border-0 align-self-center p-0 mb-1'}
                         src={grid_item.image}
                         alt={grid_item.title}/>
                </Link>
            </div>
            <i onClick={likeArtist} className={"position-absolute align-self-end p-2"}>
                {like && <i className="fas fa-heart text-danger"/>}
                {!like && <i className="fas fa-heart text-white"/>}
            </i>
            <div className={'card-title align-items-center'}>
                <DropdownButton className={"btn p-0 border-0 float-end shadow-none"} variant={"transparent"}
                                size={"sm"}
                                align={"end"} title={""}>
                    <Dropdown.Item>Add to Collection</Dropdown.Item>
                    <Dropdown.Item>More Details</Dropdown.Item>
                </DropdownButton>
                <span className={'card-title'}>
                    <Link className={`small text-decoration-none text-black`}
                          to={`/artist/${grid_item.url}/${grid_item.id}`}>
                        <span className={"m-0"}><strong>{grid_item.title}</strong></span>
                    </Link>
                    <Link className={`text-decoration-none text-dark`}
                          to={`/artist/${grid_item.url}/${grid_item.id}`}>
                        <p>{grid_item.artistName}</p>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default ArtistGridItem;