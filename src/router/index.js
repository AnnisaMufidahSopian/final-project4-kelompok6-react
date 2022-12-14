import About from "../pages/About";
import Saved from "../pages/Saved";
import Cari from "../pages/Search";
import SearchDetail from "../pages/Search/searchDetail";
import Cv from "../pages/About/detailCv";
import Movie from "../pages/Movies";
import DetailMovie from "../pages/Details/DetailsMovie";
import Details from "../pages/Details";


const Router = [
  {
    path: "/",
    element: <Movie />,
  },
  {
    path: "/saved",
    element: <Saved />,
  },
  {
    path: "/movie",
    element: <Details />,
    children: [
      {
        path: ":id",
        element: <DetailMovie />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
    children: [
      {
        path: ":itemId",
        element: <Cv />,
      },
    ],
  },
  {
    path: "/search",
    element: <Cari />,
    children: [
      {
        path: ":input",
        element: <SearchDetail />,
      },
    ],
  },
];

export default Router;
