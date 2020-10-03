import React from "react";
import "./SwipedButtons.css";
import ReplayIcob from "@material-ui/icons/Replay";
import CloseIcob from "@material-ui/icons/Close";
import StarRateIcob from "@material-ui/icons/StarRate";
import FavoriteIcob from "@material-ui/icons/Favorite";
import FlashOnIcob from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipedButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcob fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcob fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRateIcob fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIcob fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOnIcob fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipedButtons;
