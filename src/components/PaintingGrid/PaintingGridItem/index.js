import React from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";

// Reference for content: https://react-bootstrap.github.io/components/dropdowns/

const PaintingGridItem = ({
                              grid_item = {
                                  id: "577282bbedc2cb3880f8abf6",
                                  title: "An Homage to IKB 1957",
                                  url: "an-homage-to-ikb-1957-2011",
                                  artistUrl: "takashi-murakami",
                                  artistName: "Takashi Murakami",
                                  artistId: "57726db5edc2cb3880b4e400",
                                  completitionYear: 2011,
                                  width: 298,
                                  image: "https://uploads4.wikiart.org/images/takashi-murakami/an-homage-to-ikb-1957-2011.jpg",
                                  height: 418
                              }
                          }) => {
    return (
        // TODO If we remove m-3, it will show as a 4 grid, like defined in the break points
        <div className={"col card border-0 p-2"}>
            <div className={"position-relative d-flex justify-content-end"}>
            <DropdownButton className={"position-absolute btn p-0 border-0 float-end"} variant={"light"} size={"sm"} align={"end"}>
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
            <div className={'card-title'}>
                <p className={"m-0"}><strong>{grid_item.title}</strong></p>
                <p className={"mb-0"}>{grid_item.artistName}<span className={`${grid_item.completitionYear === null ? 'd-none' : ''}`}>, {grid_item.completitionYear}</span></p>
            </div>
        </div>
    )
}

export default PaintingGridItem;