import React from "react";
import "../pages/css/SeasonScreen.css";
import "./css/EpisodeCard.css";
function EpisodeCard(props) {
  const Style = {
    backgroundSize: "cover",
    backgroundImage: `url(${
      props.el.still_path
        ? `https://image.tmdb.org/t/p/original${props.el.still_path}`
        : "/images/unavailable-image.jpg"
    })`,
    backgroundPosition: "center center",
  };

  return (
    <div className="SeasonScreen__episode">
      <div className="SeasonScreen__episodeImageCover">
        <div className="SeasonScreen__episodeImage" style={Style}>
          <div className="SeasonScreen__episodeImage__dark">
            <img
              className="SeasonScreen__episodeImage__playBtn"
              src={props.el.still_path ? `/images/Play-Button-PNG-Pic.png` : ""}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="SeasonScreen__episodeContent">
        <h1 className="SeasonScreen__episodeContentHeading">{props.el.name}</h1>
        <p className="SeasonScreen__episodeContentDescription">
          {props.el.overview}
        </p>
      </div>
    </div>
  );
}

export default EpisodeCard;
