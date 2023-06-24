import React from "react";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { text } from "@cloudinary/url-gen/qualifiers/source";
import { TextStyle } from "@cloudinary/url-gen/qualifiers/textStyle";
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

  myVideo
    .resize(fill().width(500).height(300))
    .overlay(source(text("OYAFEMI", new TextStyle("Arial", 80))));

  return (
    <div className="video">
      <AdvancedVideo cldVid={myVideo} controls />
    </div>
  );
};

export default OtherImage;
