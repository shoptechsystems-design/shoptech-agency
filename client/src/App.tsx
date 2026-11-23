import { Suspense, lazy } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Each page is its own chunk, so a visitor only downloads the code for the page they open.
// Pages are prerendered to HTML at build time, so the content is visible before any of this loads.
const Home = lazy(() => import("./pages/Home"));
const AppDetail = lazy(() => import("./pages/AppDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BlogIndex = lazy(() => import("./pages/Blog").then((m) => ({ default: m.BlogIndex })));
const BlogPost = lazy(() => import("./pages/Blog").then((m) => ({ default: m.BlogPost })));
const About = lazy(() => import("./pages/Info").then((m) => ({ default: m.About })));
const Contact = lazy(() => import("./pages/Info").then((m) => ({ default: m.Contact })));
const Privacy = lazy(() => import("./pages/Info").then((m) => ({ default: m.Privacy })));
const Terms = lazy(() => import("./pages/Info").then((m) => ({ default: m.Terms })));
const PenvitaPrivacy = lazy(() => import("./pages/PenvitaLegal").then((m) => ({ default: m.PenvitaPrivacy })));
const PenvitaTerms = lazy(() => import("./pages/PenvitaLegal").then((m) => ({ default: m.PenvitaTerms })));
const PenvitaDelete = lazy(() => import("./pages/PenvitaLegal").then((m) => ({ default: m.PenvitaDelete })));

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/apps/penvita/privacy"} component={PenvitaPrivacy} />
      <Route path={"/apps/penvita/terms"} component={PenvitaTerms} />
      <Route path={"/apps/penvita/delete-account"} component={PenvitaDelete} />
      <Route path={"/apps/:id"} component={AppDetail} />
      <Route path={"/blog"} component={BlogIndex} />
      <Route path={"/blog/:slug"} component={BlogPost} />
      <Route path={"/about"} component={About} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <Suspense fallback={null}>
          <Router />
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
