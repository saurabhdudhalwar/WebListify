import React from "react";

const GridItem = ({ title, imageUrl }: any) => {
  return (
    <div style={styles.gridItem}>
      <img src={imageUrl} alt={title} style={styles.image} />
      <p style={styles.title}>{title}</p>
    </div>
  );
};

const styles = {
  gridItem: {
    width: "100%",
  },
  image: {
    width: "100%",
    aspectRatio: "2/3",
  },
  title: {
    marginTop: "8px",
    fontSize: "14px",
    color: "#FFFFFF",
  },
};

export default GridItem;
