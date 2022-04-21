import React from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";
import {Link} from "react-router-dom";
import SecureContent from "../../Security/secure-content";
import {addToUserCollection} from "../../../_actions/collections-actions";
import {useProfile} from "../../../_context/profile-context";
import {useDispatch} from "react-redux";

// Reference for content: https://react-bootstrap.github.io/components/dropdowns/

const PaintingGridItem = ({grid_item}) => {
    const {profile} = useProfile();
    const dispatch = useDispatch();
    const like = true;

    const likeArtist = () => {
        return !like;
    };

    return (
        // TODO If we remove m-3, it will show as a 4 grid, like defined in the break points
        <div className={"col card border-0 p-1"}>
            <div className={"d-flex"}>
                <Link to={`/art/${grid_item.id}`}>
                    <img className={'img-thumbnail thumb-post img-responsive border-0 align-self-center p-0 mb-1'}
                         src={grid_item.image}
                         alt={grid_item.title}/>
                </Link>
            </div>
            <SecureContent>
                <i onClick={likeArtist} className={"position-absolute align-self-end p-2"}>
                    {like && <i className="fas fa-heart text-danger"/>}
                    {!like && <i className="fas fa-heart text-white"/>}
                </i>
            </SecureContent>

            <div className={'card-title align-items-center'}>
                <DropdownButton className={"btn p-0 border-0 float-end shadow-none"} variant={"transparent"}
                                size={"sm"}
                                align={"end"} title={""}>
                    <Dropdown.Item>Favorite</Dropdown.Item>
                    <Dropdown.Item onClick={() => {
                        // pack up the image, only pulling out what is needed
                        const item_to_add = {
                            "id": grid_item.id,
                            "title": grid_item.title,
                            "url": grid_item.url,
                            "artistUrl": grid_item.artistUrl,
                            "artistName": grid_item.artistName,
                            "artistId": grid_item.artistId,
                            "completionYear": grid_item.completionYear,
                            "image": grid_item.image
                        }

                        addToUserCollection(dispatch, profile._id, item_to_add)


                    }}>
                        Add to Collection
                    </Dropdown.Item>
                    <Dropdown.Item href={`/art/${grid_item.id}`}>More Details</Dropdown.Item>
                </DropdownButton>

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

export default PaintingGridItem;