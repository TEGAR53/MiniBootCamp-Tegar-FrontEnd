import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import "@/index.css";
import { ThemeProvider } from "./components/layouts/theme-provider";
import { AuthProvider } from "./context/auth.context";
import { query } from "./lib/query";
import App from "./App";
import AboutPage from "./pages/about/page";
import RegisterPage from "./pages/(auth)/register/page";
import LoginPage from "./pages/(auth)/login/page";
import ContactPage from "./pages/contact/page";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <QueryClientProvider client={query}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route
                path="/dashboard"
                //   element={
                //     <ProtectedRoute>
                //       <DashboardPage />
                //     </ProtectedRoute>
                //   }
                // />
                // <Route
                //   path="/notes/new"
                //   element={
                //     <ProtectedRoute>
                //       <NewNotePage />
                //     </ProtectedRoute>
                //   }
                // />
                // <Route
                //   path="/notes/:id"
                //   element={
                //     <ProtectedRoute>
                //       <NoteDetailPage />
                //     </ProtectedRoute>
                //   }
              />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
