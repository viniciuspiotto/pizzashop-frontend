import { RouterProvider } from "react-router-dom";

import { Toaster } from "@/components/ui/toaster";

import { ThemeProvider } from "./components/theme/themeProvider";
import { router } from "./routes";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
