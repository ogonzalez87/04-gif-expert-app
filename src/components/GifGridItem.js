import React from "react";
import PropTypes from "prop-types";

<<<<<<< HEAD
=======
 
  

>>>>>>> f08c3ee30ceb030fc5ed63dac3c9031de4155439
export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__bounce">
      <img src={url} alt={title} />

      <p> {title} </p>
    </div>
  );
};
<<<<<<< HEAD
GifGridItem.prototypes = {
=======

GifGridItem.propTypes = {
>>>>>>> f08c3ee30ceb030fc5ed63dac3c9031de4155439
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
