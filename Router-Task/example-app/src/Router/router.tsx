import { createBrowserRouter } from "react-router-dom";
import {About, Home} from "../Components";
import { Contact } from "../Components/Contact";
import { Menu } from "../Components/Menu";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/",
                element: <Menu />,
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    },
    {
        path: "/about",
        element: <About />,
        children: [
            {
                path: "/about/contact",
                // element: Istediyiniz komponenti yazin...
            }
        ]
    }
])