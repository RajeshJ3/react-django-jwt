import React from "react";

export default function Container(props) {
  return (
    <div
      style={{
        maxWidth: props.maxWidth ? {
          'xl': "100%",
          'lg': "1920px",
          'md': "1280px",
          'sm': "960px",
          'xs': "600px",
        }[props.maxWidth] : "100%",
        margin: "auto",
      }}
    >
      {props.children}
    </div>
  );
}
