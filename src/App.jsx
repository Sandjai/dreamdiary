import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { MainPage } from "./pages/MainPage/MainPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { DreamPage } from "./pages/DreamPage/DreamPage";
import { Provider } from "react-redux";
import { store } from "./store";
import { Layout } from "./components/Layout/Layout";
import { getDateString } from "./utils/getDateString";
import { NewDreamPage } from "./pages/NewDreamPage/NewDreamPage";
import { NoDreamsPage } from "./pages/NoDreamsPage/NoDreamsPage";
import { FilterPage } from "./pages/FilterPage/FilterPage";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              index
              element={<Navigate to={`date/${getDateString()}`} />}
            />

            <Route path="date/:datestring/" element={<MainPage />}>
              <Route path="dream/:dreamid" element={<DreamPage />} />
              <Route path="dream/nodream" element={<NoDreamsPage />} />
              <Route path="dream/newDream" element={<NewDreamPage />} />
              <Route path="dream/filter" element={<FilterPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};
