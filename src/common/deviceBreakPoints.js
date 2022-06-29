const size = {
  mobile: "600px",
  tablet: "640px",
  tabletXL: "730px",
  laptop: "1024px",
  desktop: "1600px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletXL: `(max-width: ${size.tabletXL})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};
