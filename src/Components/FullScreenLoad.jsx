
import { CircularProgress } from "@mui/material";

import { css } from "@emotion/react";

const fullScreenCPStyles = ({ colors }) => css`
  .MuiCircularProgress-colorPrimary {
    color: ${colors.primary.dark};
  }
`;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const FullScreenLoading = props => {
  const newProps = { ...props };
  const { top, color, totalPadding } = newProps;
  delete (newProps.top);
  delete (newProps.color);
  delete (newProps.totalPadding);

  return (
    <div className="FullScreenLoading" style={{ margin: "0 auto", marginTop: top ? 0 : "calc(50vh - 150px)", padding: totalPadding || "initial", paddingTop: top || "0", textAlign: "center", color: color || undefined }} css={fullScreenCPStyles}>
      <CircularProgress size={100} thickness={1} {...newProps} />
    </div>
  );
};

export default FullScreenLoading;
