import React from "react";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { image } from "@cloudinary/url-gen/qualifiers/source";
import { Transformation } from "@cloudinary/url-gen";
import { scale } from "@cloudinary/url-gen/actions/resize";
const REACT_APP_CLOUNDINARY_CLOUND_NAME =
  process.env.REACT_APP_CLOUNDINARY_CLOUND_NAME;

const OtherImage = () => {
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: REACT_APP_CLOUNDINARY_CLOUND_NAME,
    },
  });

  //Link for the video on Cloudinary
  const myVideo = cld.video("samples/elephants");

  myVideo.resize(fill().width(500).height(300)).overlay(
    source(
      //Link for th image on Cloudinary
      image("samples/ecommerce/analog-classic").transformation(
        new Transformation().resize(scale().width(150))
      )
    )
  );

  return (
    <div className="video">
      <AdvancedVideo cldVid={myVideo} controls />
    </div>
  );
};

export default OtherImage;
