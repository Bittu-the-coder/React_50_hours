import { Component } from "react";

export const printProps = (Component: any) => {
  return (props: any) => {
    console.log("Props:", props);
    return <Component {...props} />;
  };
};
