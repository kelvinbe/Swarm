import { createTheme } from "@rneui/themed";


// These can all be the same while designs are being worked on
const lightTheme = createTheme({
    lightColors: {
        primary: '#e7e7e8',
      },
      darkColors: {
        primary: '#006773',
      },
      mode: 'light',
})

const darkTheme = createTheme({
    lightColors: {
        primary: '#006773',
      },
      darkColors: {
        primary: '#e7e7e8',
      },
      mode: 'dark',
})

export {
    lightTheme,
    darkTheme
}