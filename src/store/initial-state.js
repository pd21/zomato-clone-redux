import { lightTheme } from "../constants/theme";

const items = {
    currentCity: window.location.pathname.split('/')[1] || 'Bengaluru',
    theme: lightTheme,
}

export default items