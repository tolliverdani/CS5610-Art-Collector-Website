import React from "react";
import parse from 'html-react-parser';

const RenderBio = ({bio = ""}) => {

    let rendered_bio = bio

    if (bio === null ) {
      rendered_bio = ""
    }

    rendered_bio = rendered_bio.replace(new RegExp('\\[url', 'g'),'<a')
    rendered_bio = rendered_bio.replace(new RegExp("\\[/url\\]", 'g'),'</a>')
    rendered_bio = rendered_bio.replace(new RegExp("\\[i\\]", 'g'),'<i>')
    rendered_bio = rendered_bio.replace(new RegExp("\\[\\/i\\]", 'g'),'</i>')
    rendered_bio = rendered_bio.replace(new RegExp("\\]", 'g'),'>')

    return (
        <>
            {rendered_bio === " " || rendered_bio === "" ? '--' : parse(rendered_bio)}
        </>
    )
}

export default RenderBio;