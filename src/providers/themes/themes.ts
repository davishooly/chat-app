
const basicThemes = {
    text: "#616061",
    textBackground: "rgba(0,0,0,.1)",
    primaryLightColor: "#e9e9eb",
};


const darkTheme = {
    type: "dark",
    secondaryLightColor: "#777",
    primaryDarkColor: "#1e5266",
    secondaryDarkColor: "#111",
    messageBackgroundColor: "#3d3c3c",
    ...basicThemes
};

const lightTheme = {
    type: "light",
    secondaryLightColor: "#ed7a7a",
    primaryDarkColor: "#da0000",
    secondaryDarkColor: "#7b0000",
    messageBackgroundColor: "#3b1111",
   ...basicThemes
};

export{ darkTheme, lightTheme };
