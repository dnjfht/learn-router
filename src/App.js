import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/videos",
    element: <Videos />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
// createBrowserRouter를 사용해서 router를 만들어준다.
// 여기 라우터의 각각 경로를 설명할 수 있는 배열을 전달.
// router를 만들었으면 우산을 씌워줘야 한다. => RouterProvider => router는 위에서 정의한 router를 쓸 거라고 명시.

function App() {
  return <RouterProvider router={router} />;
}

export default App;
