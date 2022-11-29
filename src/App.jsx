import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DreamsPage } from "./pages/DreamsPage/DreamsPage";
import { NewDreamPage } from "./pages/NewDreamPage/NewDreamPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Dream } from "./components/Dream/Dream";
import { Provider } from "react-redux";
import { store } from "./store";
import { useState } from "react";
import { DateContext } from "./contexts/DateContext";
import { Layout } from "./components/Layout/Layout";
import { useParams } from "react-router-dom";
import { getDateString } from "./utils/getDateString";

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route index element={<Navigate to={getDateString()} />} />
              <Route path=":datestring" element={<DreamsPage />}>
                <Route path=":dreamid" element={<Dream />} />
              </Route>
              <Route path="newDream" element={<NewDreamPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Provider>
    </div>
  );
};
