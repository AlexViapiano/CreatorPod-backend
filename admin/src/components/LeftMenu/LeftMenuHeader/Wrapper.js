import styled from "styled-components";
import PropTypes from "prop-types";

import Logo from "../../../assets/images/logo.png";

const Wrapper = styled.div`
  background-image: linear-gradient(
    117deg,
    rgb(255 231 253) 0%,
    rgb(223 233 255) 35%,
    rgb(243 255 245) 60%,
    rgb(252 255 225) 100%
  );
  padding-left: 2rem;
  height: ${(props) => props.theme.main.sizes.leftMenu.height};

  .leftMenuHeaderLink {
    &:hover {
      text-decoration: none;
    }
  }

  .projectName {
    display: block;
    width: 100%;
    height: ${(props) => props.theme.main.sizes.leftMenu.height};
    font-size: 2rem;
    letter-spacing: 0.2rem;
    color: $white;

    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: left center;
    background-size: auto 2.5rem;
  }
`;

Wrapper.defaultProps = {
  theme: {
    main: {
      colors: {
        leftMenu: {},
      },
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

Wrapper.propTypes = {
  theme: PropTypes.object,
};

export default Wrapper;
