import React from "react";

import Directory from "../../components/directory/directory.cpn";

import { HomePageContainer } from "./homepage.style";

const HomePage = () => {
//  uncommand the below line to test the ErrorBoundary component!
//   throw Error;
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
