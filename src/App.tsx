import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AgentBuilder from "./pages/AgentBuilder";
import AgentManagement from "./pages/AgentManagement";
import ModelLibrary from "./pages/ModelLibrary";
import BusinessIntelligence from "./pages/BusinessIntelligence";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Debug logging for deployment issues
  console.log('🔍 DEBUG INFO:', {
    isProd: import.meta.env.PROD,
    mode: import.meta.env.MODE,
    baseUrl: import.meta.env.BASE_URL,
    currentPath: window.location.pathname,
    currentHref: window.location.href,
    basename: import.meta.env.PROD ? '/net-ai-orchestrator-nexus' : ''
  });

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.PROD ? '/net-ai-orchestrator-nexus' : ''}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/agent-builder" element={<AgentBuilder />} />
            <Route path="/agent-management" element={<AgentManagement />} />
            <Route path="/model-library" element={<ModelLibrary />} />
            <Route path="/business-intelligence" element={<BusinessIntelligence />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
