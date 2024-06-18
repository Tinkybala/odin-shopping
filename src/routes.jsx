import App from './App.jsx';

const routes = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "/:name",
        element: <App />
    }
  
]

export default routes;