import React from "react";

const UserInfo = ({
                      user_data = {
                          userId: "5772",
                          username: "dtollivr",
                          url: "dtolliver",
                          bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna \n" +
                              "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n" +
                              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint \n" +
                              "occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                          location: "Boston, MA",
                          lastLogIn: "2022-03-17",
                          image: "https://uploads4.wikiart.org/images/takashi-murakami/an-homage-to-ikb-1957-2011.jpg",
                      }
                  }) => {
    return (
        <>
            <div className={"card bg-light border-0 p-2 ms-3 align-text-center"}>
                <h5 className={"m-0 mb-2"}><strong>{user_data.username}</strong></h5>
                <img className={'thumb-post img-responsive rounded-circle border-0 align-self-center m-1 p-2'}
                     src={user_data.image}/>
                <div className={'card-title mt-2'}>
                    <h5 className={'m-0'}><strong>About the Collector</strong></h5>
                    <p className={"m-0"}>{user_data.bio}</p>
                </div>
            </div>
            <div className={"card border-0 p-2 ms-3 align-text-center"}>
                <div className={'card-title'}>
                    <div>
                        <span className={"m-0"}>Location: </span>
                        <span className={"m-0"}>{user_data.location}</span>
                    </div>
                    <div>
                        <span className={"m-0"}>Last login: </span>
                        <span className={"m-0"}>{user_data.lastLogIn}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserInfo;
