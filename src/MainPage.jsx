import t from "prop-types";


import { css } from "@emotion/react";

const propTypes = {
  p: t.object,
};


const rootStyle = css`

`;

const MainPage = (props) => {
  const { p } = props;
  return (
    <div css={rootStyle}>
      MainPage
    </div>
  );
};

MainPage.propTypes = propTypes;

export default MainPage;
