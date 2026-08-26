/**
 * Design: Atlas académique vivant — toutes les routes restent accessibles depuis une structure unique et cohérente.
 */
import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Home from "@/pages/Home";
import Discover from "@/pages/Discover";
import Learn from "@/pages/Learn";
import CourseDetail from "@/pages/CourseDetail";
import Careers from "@/pages/Careers";
import CareerDetail from "@/pages/CareerDetail";
import RealEconomy from "@/pages/RealEconomy";
import Togo from "@/pages/Togo";
import Orientation from "@/pages/Orientation";
import SearchPage from "@/pages/SearchPage";
import NotFound from "@/pages/NotFound";

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/decouvrir" component={Discover} />
    <Route path="/apprendre" component={Learn} />
    <Route path="/apprendre/:slug" component={CourseDetail} />
    <Route path="/metiers" component={Careers} />
    <Route path="/metiers/:slug" component={CareerDetail} />
    <Route path="/economie-reelle" component={RealEconomy} />
    <Route path="/togo" component={Togo} />
    <Route path="/orientation" component={Orientation} />
    <Route path="/recherche" component={SearchPage} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
