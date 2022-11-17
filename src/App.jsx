import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DreamsPage } from "./pages/DreamsPage/DreamsPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { Provider } from "react-redux";
import { store } from "./store";
import { useState } from "react";
import { DateContext } from "./contexts/DateContext";

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <DreamsPage />
      </Provider>
    </div>
  );
};
