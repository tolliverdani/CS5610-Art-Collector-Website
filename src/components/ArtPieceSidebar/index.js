import React from "react";
import ComponentHeader from "../ComponentHeader";

const ArtInfo = ({
                        art_data = {
                            id: "577282bbedc2cb3880f8abf6",
                            title: "An Homage to IKB 1957",
                            url: "an-homage-to-ikb-1957-2011",
                            artistUrl: "takashi-murakami",
                            artistName: "Takashi Murakami",
                            artistId: "57726db5edc2cb3880b4e400",
                            completitionYear: 2011,
                            width: 298,
                            image: "https://uploads4.wikiart.org/images/takashi-murakami/an-homage-to-ikb-1957-2011.jpg",
                            height: 418,
                            genre: "Contemporary",
                            styles: "Street Art",
                            media: "Digital / Mixed Media"
                        }
                    }) => {
    return (
        <>
            <div className={"card border-0 align-text-center"}>
                <img className={'thumb-post img-responsive border-0 align-self-center'}
                     src={art_data.image}
                     alt={art_data.title}
                />
                <div className={'card-title mt-2'}>
                    <h5 className={"mb-0"}><strong>Artwork Information</strong></h5>
                    <p className={"m-0"}>{art_data.bio}</p>
                </div>
            </div>
            <div className={"card bg-light border-0 align-text-center"}>
                <div className={'card-body p-2'}>
                    <div>
                        <p className={"m-0"}><strong>Title</strong></p>
                        <p className={"mb-2"}>{art_data.title}</p>
                        <p className={"m-0"}><strong>Artist</strong></p>
                        <p className={"mb-2"}>{art_data.artistName}</p>
                        <p className={"m-0"}><strong>Completion Year</strong></p>
                        <p className={"mb-2"}>{art_data.completitionYear}</p>
                        <p className={"m-0"}><strong>Genre</strong></p>
                        <p className={"mb-2"}>{art_data.genre}</p>
                        <p className={"m-0"}><strong>Style</strong></p>
                        <p className={"mb-2"}>{art_data.styles}</p>
                        <p className={"m-0"}><strong>Media</strong></p>
                        <p className={"m-0"}>{art_data.media}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArtInfo;
