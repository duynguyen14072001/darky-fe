import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./config/query-client";
import { RouterProvider } from "react-router-dom";
import router from "./routers";
import { App as AppAntd } from "antd";
import "@/langs";
import "antd/dist/reset.css";
import "@/shared/styles/main.scss";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppAntd>
          <RouterProvider router={router} />
        </AppAntd>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
