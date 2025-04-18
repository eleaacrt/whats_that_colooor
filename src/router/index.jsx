import { createBrowserRouter } from
    "react-router-dom";
import App from "../App.jsx";
import FavColors from "../pages/FavColors.jsx";

export default createBrowserRouter([
    {
        path: "/",
        element: < App />,
    },
    {
        path: "/fav",
        element: < FavColors />,
    }
]);