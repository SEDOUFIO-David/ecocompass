/**
 * Design: Atlas académique vivant — toutes les routes restent accessibles depuis une structure unique et cohérente.
 */
import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LearningProvider } from "@/contexts/LearningContext";
const Home = lazy(() => import("@/pages/Home"));
const Discover = lazy(() => import("@/pages/Discover"));
const Learn = lazy(() => import("@/pages/Learn"));
const CourseDetail = lazy(() => import("@/pages/CourseDetail"));
const Careers = lazy(() => import("@/pages/Careers"));
const CareerDetail = lazy(() => import("@/pages/CareerDetail"));
const CareerCompare = lazy(() => import("@/pages/CareerCompare"));
const RealEconomy = lazy(() => import("@/pages/RealEconomy"));
const Togo = lazy(() => import("@/pages/Togo"));
const Orientation = lazy(() => import("@/pages/Orientation"));
const SearchPage = lazy(() => import("@/pages/SearchPage"));
const Glossary = lazy(() => import("@/pages/Glossary"));
const Favorites = lazy(() => import("@/pages/Favorites"));
const Resources = lazy(() => import("@/pages/Resources"));
const Africa = lazy(() => import("@/pages/Africa"));
const RevisionSheets = lazy(() => import("@/pages/RevisionSheets"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/decouvrir" component={Discover} />
    <Route path="/apprendre" component={Learn} />
    <Route path="/apprendre/:slug" component={CourseDetail} />
    <Route path="/metiers" component={Careers} />
    <Route path="/metiers/comparer" component={CareerCompare} />
    <Route path="/metiers/:slug" component={CareerDetail} />
    <Route path="/economie-reelle" component={RealEconomy} />
    <Route path="/togo" component={Togo} />
    <Route path="/orientation" component={Orientation} />
    <Route path="/recherche" component={SearchPage} />
    <Route path="/glossaire" component={Glossary} />
    <Route path="/favoris" component={Favorites} />
    <Route path="/ressources" component={Resources} />
    <Route path="/afrique" component={Africa} />
    <Route path="/fiches" component={RevisionSheets} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><LearningProvider><TooltipProvider><Toaster /><Suspense fallback={<div className="route-loader" role="status">Chargement du repère…</div>}><Router /></Suspense></TooltipProvider></LearningProvider></ThemeProvider></ErrorBoundary>;
}
