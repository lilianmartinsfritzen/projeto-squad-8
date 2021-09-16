import { Component } from 'react';
import { AuthProvider } from "./contexts/AuthContext";

import Routes from "./Routes";

export function App() {
  return (
    <Routes />
  );
}