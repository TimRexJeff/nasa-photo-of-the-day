import React from "react"

function PhotoCard(props) {
    console.log(props)
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.url}/>
            <div>{props.date}</div>
            <p>
                {props.explanation}
            </p>
        </div>
    )
}

export default PhotoCard

// {"date":"2019-08-27",
// "explanation":"Why is the sky near Antares and Rho Ophiuchi so dusty yet colorful?  The colors result from a mixture of objects and processes.  Fine dust illuminated from the front by starlight produces blue reflection nebulae. Gaseous clouds whose atoms are excited by ultraviolet starlight produce reddish emission nebulae. Backlit dust clouds block starlight and so appear dark.   Antares, a red supergiant and one of the brighter stars in the night sky, lights up the yellow-red clouds on the lower left of the featured image. Rho Ophiuchi lies at the center of the blue nebula near the top.   The distant globular cluster M4 is visible to the right of Antares. These star clouds are even more colorful than humans can see, emitting light across the electromagnetic spectrum.",
// "hdurl":"https://apod.nasa.gov/apod/image/1908/AntaresRho_McGarvey_2200.jpg",
// "media_type":"image",
// "service_version":"v1",
// "title":"Dark Dust and Colorful Clouds near Antares",
// "url":"https://apod.nasa.gov/apod/image/1908/AntaresRho_McGarvey_960.jpg"}
