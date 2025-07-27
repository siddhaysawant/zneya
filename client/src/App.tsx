import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Home from "@/pages/home";
import Rings from "@/pages/rings";
import Bracelets from "@/pages/bracelets";
import Necklaces from "@/pages/necklaces";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import JewelryDetail from "@/pages/jewelry-detail";
import Payment from "@/pages/payment";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/rings" component={Rings} />
        <Route path="/bracelets" component={Bracelets} />
        <Route path="/necklaces" component={Necklaces} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/jewelry/:id" component={JewelryDetail} />
        <Route path="/payment" component={Payment} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
