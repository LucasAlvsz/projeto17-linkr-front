const minSize = {
    desktop: "611px",
    sidebar: "970px",
};

const device = {
    desktop: `(min-width: ${minSize.desktop})`,
    sidebar: `(min-width: ${minSize.sidebar})`,
};

export default device;
