import { createTheme } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";

const theme = createTheme({
    palette :{
        primary : {
            light : '#f8f7ff',
            dark : '#003f88',
            main : '#2b2f32'
        }
    }
});


export {
    theme
}