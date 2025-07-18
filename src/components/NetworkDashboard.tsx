import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { 
  Activity, 
  Shield, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Users,
  DollarSign,
  Server,
  Zap,
  Brain,
  Settings,
  BarChart3,
  Network,
  Target,
  Layers,
  PlugZap,
  Database,
  Workflow
} from 'lucide-react';
import { Link } from 'react-router-dom';

const NetworkDashboard = () => {
  // Dynamic values state
  const [metrics, setMetrics] = useState({
    activeAgents: 12,
    deployedModels: 27,
    networkHealth: 98.7,
    revenueProtected: 2.4,
    activeAlerts: 3,
    customerSatisfaction: 94.3,
    slaCompliance: 98.7,
    costEfficiency: 87.1,
    operationalExcellence: 92.4,
    modelAccuracy: 96.2,
    lossReduction: 89.4,
    convergenceRate: 94.7,
    trainingEfficiency: 91.8,
    activeTrainingSessions: 7,
    // New KPI metrics
    modelPerformance: [
      { name: 'OSNR Prediction', accuracy: 96.8 },
      { name: 'Wavelength Routing', accuracy: 98.1 },
      { name: 'Fiber Failure Prediction', accuracy: 94.2 },
      { name: 'RAN Optimization', accuracy: 93.7 },
      { name: 'Traffic Prediction', accuracy: 97.3 }
    ],
    agentPerformance: [
      { name: 'DWDM Performance Monitor', tasks: 156 },
      { name: 'Fiber Health Guardian', tasks: 134 },
      { name: 'Wavelength Optimizer', tasks: 203 },
      { name: 'OSNR Signal Analyzer', tasks: 178 },
      { name: 'Network Predictor', tasks: 145 }
    ]
  });

  // Update metrics with slight variations
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        activeAgents: prev.activeAgents + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 2),
        deployedModels: prev.deployedModels + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 2),
        networkHealth: Math.max(95, Math.min(99.9, prev.networkHealth + (Math.random() - 0.5) * 0.5)),
        revenueProtected: Math.max(2.0, Math.min(3.0, prev.revenueProtected + (Math.random() - 0.5) * 0.1)),
        activeAlerts: Math.max(0, Math.min(10, prev.activeAlerts + (Math.random() > 0.7 ? 1 : -1) * Math.floor(Math.random() * 2))),
        customerSatisfaction: Math.max(90, Math.min(99, prev.customerSatisfaction + (Math.random() - 0.5) * 0.3)),
        slaCompliance: Math.max(95, Math.min(99.9, prev.slaCompliance + (Math.random() - 0.5) * 0.2)),
        costEfficiency: Math.max(80, Math.min(95, prev.costEfficiency + (Math.random() - 0.5) * 0.4)),
        operationalExcellence: Math.max(85, Math.min(98, prev.operationalExcellence + (Math.random() - 0.5) * 0.3)),
        modelAccuracy: Math.max(90, Math.min(99, prev.modelAccuracy + (Math.random() - 0.5) * 0.2)),
        lossReduction: Math.max(85, Math.min(95, prev.lossReduction + (Math.random() - 0.5) * 0.3)),
        convergenceRate: Math.max(90, Math.min(98, prev.convergenceRate + (Math.random() - 0.5) * 0.2)),
        trainingEfficiency: Math.max(85, Math.min(98, prev.trainingEfficiency + (Math.random() - 0.5) * 0.3)),
        activeTrainingSessions: Math.max(3, Math.min(15, prev.activeTrainingSessions + (Math.random() > 0.8 ? 1 : -1) * Math.floor(Math.random() * 2))),
        modelPerformance: prev.modelPerformance.map(model => ({
          ...model,
          accuracy: Math.max(90, Math.min(99, model.accuracy + (Math.random() - 0.5) * 0.3))
        })),
        agentPerformance: prev.agentPerformance.map(agent => ({
          ...agent,
          tasks: Math.max(100, Math.min(250, agent.tasks + (Math.random() > 0.7 ? 1 : -1) * Math.floor(Math.random() * 3)))
        }))
      }));
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-subtle">
        {/* Header */}
        <header className="border-b bg-card shadow-card">
          <div className="flex h-16 items-center px-6">
            <div className="flex items-center space-x-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Network className="h-8 w-8 text-primary" />
                </TooltipTrigger>
                <TooltipContent side="bottom" align="start">
                  <p>Dual Intelligence Autonomous Network Operator - AI-powered network management platform</p>
                </TooltipContent>
              </Tooltip>
              <h1 className="text-xl font-semibold text-foreground">
                Dual Intelligence Autonomous Network Operator
              </h1>
            </div>
            <div className="ml-auto flex items-center space-x-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm" asChild className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200">
                    <Link to="/llm-configuration">
                      <Settings className="h-4 w-4 mr-2" />
                      Connect LLM
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" align="end">
                  <p>Configure and connect your Large Language Model (LLM) provider for enhanced AI capabilities</p>
                </TooltipContent>
              </Tooltip>
              
              <DropdownMenu>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="border-2 border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 shadow-sm">
                        <PlugZap className="h-4 w-4 mr-2" />
                        Integrate
                      </Button>
                    </DropdownMenuTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" align="end">
                    <p>Connect with existing systems, databases, and third-party services</p>
                  </TooltipContent>
                </Tooltip>
                <DropdownMenuContent align="end" className="w-64">
                  <DropdownMenuItem className="flex items-center space-x-3 p-3 cursor-pointer hover:bg-muted transition-colors" asChild>
                    <Link to="/built-in-integrations">
                      <Database className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Built-in Integrations</div>
                        <div className="text-xs text-muted-foreground">Connect to existing systems and databases</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center space-x-3 p-3 cursor-pointer hover:bg-muted transition-colors" asChild>
                    <Link to="/workflow-integrations">
                      <Workflow className="h-5 w-5 text-secondary" />
                      <div>
                        <div className="font-medium">Workflow Automation</div>
                        <div className="text-xs text-muted-foreground">Visual workflow builder and automation</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

      {/* Hero Section */}
      <div className="relative px-6 py-8">
        <div className="mx-auto max-w-7xl">
          {/* Empty hero section - buttons moved below KPI cards */}
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="px-6 pb-8">
        <div className="mx-auto max-w-7xl">
          {/* KPI Cards with animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <Card className="border-0 bg-gradient-primary text-primary-foreground transform hover:scale-105 transition-all duration-300 animate-in fade-in-50 slide-in-from-bottom-5">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Agents
                </CardTitle>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Brain className="h-4 w-4 animate-pulse" />
                  </TooltipTrigger>
                  <TooltipContent side="top" align="center">
                    <p>AI agents currently deployed and actively managing network operations, monitoring performance, and making autonomous decisions</p>
                  </TooltipContent>
                </Tooltip>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold animate-in zoom-in-50 duration-500">{metrics.activeAgents}</div>
                <p className="text-xs opacity-90">
                  +2 from last hour
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-secondary text-secondary-foreground transform hover:scale-105 transition-all duration-300 animate-in fade-in-50 slide-in-from-bottom-5 delay-100">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Deployed Predictive Apps
                </CardTitle>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <BarChart3 className="h-4 w-4 animate-pulse" />
                  </TooltipTrigger>
                  <TooltipContent side="top" align="center">
                    <p>Predictive applications currently deployed in production, providing AI-powered analytics and intelligent decision making for network operations</p>
                  </TooltipContent>
                </Tooltip>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold animate-in zoom-in-50 duration-500 delay-100">{metrics.deployedModels}</div>
                <p className="text-xs opacity-90">
                  +4 this week
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-success text-secondary-foreground transform hover:scale-105 transition-all duration-300 animate-in fade-in-50 slide-in-from-bottom-5 delay-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Network Health
                </CardTitle>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <CheckCircle className="h-4 w-4 animate-pulse" />
                  </TooltipTrigger>
                  <TooltipContent side="top" align="center">
                    <p>Overall network health score based on performance metrics, uptime, throughput, latency, and SLA compliance across all network elements</p>
                  </TooltipContent>
                </Tooltip>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold animate-in zoom-in-50 duration-500 delay-200">{metrics.networkHealth.toFixed(1)}%</div>
                <p className="text-xs opacity-90">
                  SLA compliance
                </p>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-300 animate-in fade-in-50 slide-in-from-bottom-5 delay-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Revenue Protected
                </CardTitle>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DollarSign className="h-4 w-4 text-success animate-bounce" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Financial value protected through proactive network management, preventing outages, optimizing performance, and maintaining service quality</p>
                  </TooltipContent>
                </Tooltip>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold animate-in zoom-in-50 duration-500 delay-300">${metrics.revenueProtected.toFixed(1)}M</div>
                <p className="text-xs text-muted-foreground">
                  This month
                </p>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-300 animate-in fade-in-50 slide-in-from-bottom-5 delay-500">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Alerts
                </CardTitle>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <AlertTriangle className="h-4 w-4 text-alert animate-pulse" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Current alerts requiring attention. AI agents automatically resolve many issues, but some require human intervention or monitoring</p>
                  </TooltipContent>
                </Tooltip>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold animate-in zoom-in-50 duration-500 delay-500">{metrics.activeAlerts}</div>
                <p className="text-xs text-muted-foreground">
                  2 auto-resolved
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Business & Training Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {/* Business Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <TrendingUp className="h-5 w-5 text-success" />
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p>Business performance indicators showing the commercial impact of network operations and AI-driven optimizations</p>
                    </TooltipContent>
                  </Tooltip>
                  <span>Business Metrics</span>
                </CardTitle>
                <CardDescription>
                  Real-time business performance indicators
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Customer Satisfaction</span>
                    <span className="text-sm font-medium">{metrics.customerSatisfaction.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-success h-2 rounded-full" style={{width: `${metrics.customerSatisfaction}%`}}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">SLA Compliance</span>
                    <span className="text-sm font-medium">{metrics.slaCompliance.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-success h-2 rounded-full" style={{width: `${metrics.slaCompliance}%`}}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Cost Efficiency</span>
                    <span className="text-sm font-medium">{metrics.costEfficiency.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full" style={{width: `${metrics.costEfficiency}%`}}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Operational Excellence</span>
                    <span className="text-sm font-medium">{metrics.operationalExcellence.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-secondary h-2 rounded-full" style={{width: `${metrics.operationalExcellence}%`}}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Training Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Brain className="h-5 w-5 text-secondary" />
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p>AI model training performance metrics showing learning efficiency, accuracy improvements, and convergence rates</p>
                    </TooltipContent>
                  </Tooltip>
                  <span>Training Metrics</span>
                </CardTitle>
                <CardDescription>
                  AI model training performance indicators
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Model Accuracy</span>
                    <span className="text-sm font-medium">{metrics.modelAccuracy.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full" style={{width: `${metrics.modelAccuracy}%`}}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Loss Reduction</span>
                    <span className="text-sm font-medium">{metrics.lossReduction.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-secondary h-2 rounded-full" style={{width: `${metrics.lossReduction}%`}}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Convergence Rate</span>
                    <span className="text-sm font-medium">{metrics.convergenceRate.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-success h-2 rounded-full" style={{width: `${metrics.convergenceRate}%`}}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Training Efficiency</span>
                    <span className="text-sm font-medium">{metrics.trainingEfficiency.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-alert h-2 rounded-full" style={{width: `${metrics.trainingEfficiency}%`}}></div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="text-center">
                    <span className="text-xs text-muted-foreground">Active Training Sessions: </span>
                    <span className="text-xs font-medium">{metrics.activeTrainingSessions}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons Row */}
          <div className="text-center mb-12">
            <div className="flex justify-center space-x-6 flex-wrap gap-4">
              <Button variant="enterprise" size="lg" asChild className="bg-gradient-enterprise text-white hover:scale-105 transition-transform duration-200 shadow-lg">
                <Link to="/agent-builder">Agentic Bench</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 transition-all duration-200 shadow-lg">
                <Link to="/model-library">Proprietary Predictive Models</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild className="bg-gradient-secondary text-white hover:scale-105 transition-transform duration-200 shadow-lg">
                <Link to="/agent-management">Built-in Agentic Workflows</Link>
              </Button>
            </div>
          </div>

          {/* Proprietary Predictive Model Performance & Agent Performance KPIs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Proprietary Predictive Model Performance KPI */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold flex items-center space-x-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Target className="h-5 w-5 text-primary" />
                    </TooltipTrigger>
                    <TooltipContent side="top" align="center">
                      <p>Real-time accuracy metrics for proprietary predictive AI models showing performance across different network functions</p>
                    </TooltipContent>
                  </Tooltip>
                  <span>Proprietary Predictive Model Performance</span>
                </CardTitle>
                <Badge variant="success">Live</Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                {metrics.modelPerformance.slice(0, 5).map((model, index) => (
                  <div key={model.name} className="flex items-center justify-between p-2 rounded-lg bg-gradient-subtle hover:bg-muted/50 transition-colors duration-200">
                    <span className="text-sm font-medium">{model.name}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-success h-2 rounded-full" 
                          style={{width: `${model.accuracy}%`}}
                        ></div>
                      </div>
                      <Badge variant="outline" className="text-xs min-w-[45px] justify-center">
                        {model.accuracy.toFixed(1)}%
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Agent Performance KPI */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg font-semibold flex items-center space-x-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Layers className="h-5 w-5 text-secondary" />
                    </TooltipTrigger>
                    <TooltipContent side="top" align="center">
                      <p>Task completion metrics for autonomous agents showing operational efficiency and workload distribution</p>
                    </TooltipContent>
                  </Tooltip>
                  <span>Agent Performance</span>
                </CardTitle>
                <Badge variant="info">Active</Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                {metrics.agentPerformance.slice(0, 5).map((agent, index) => (
                  <div key={agent.name} className="flex items-center justify-between p-2 rounded-lg bg-gradient-subtle hover:bg-muted/50 transition-colors duration-200">
                    <span className="text-sm font-medium">{agent.name}</span>
                    <div className="flex items-center space-x-2">
                      <div className="text-xs text-muted-foreground">Tasks Completed:</div>
                      <Badge variant="secondary" className="text-xs min-w-[45px] justify-center">
                        {agent.tasks}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Real-time Telemetry */}
          <Card className="animate-in fade-in-50 slide-in-from-bottom-5 duration-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Activity className="h-5 w-5 text-primary animate-pulse" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live streaming data from network infrastructure providing real-time visibility into system performance and health</p>
                  </TooltipContent>
                </Tooltip>
                <span>Real-time Network Telemetry</span>
              </CardTitle>
              <CardDescription>
                Live data streams from network elements across your infrastructure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4 animate-in fade-in-50 slide-in-from-left-3 duration-500">
                  <h4 className="font-medium flex items-center space-x-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Server className="h-4 w-4 animate-pulse" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Core network infrastructure including routers, switches, and backbone systems handling primary data traffic</p>
                      </TooltipContent>
                    </Tooltip>
                    <span>Core Network</span>
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm hover:bg-muted/50 p-2 rounded transition-colors duration-200">
                      <span>CPU Usage</span>
                      <span className="font-medium animate-in zoom-in-50 duration-300">67%</span>
                    </div>
                    <div className="flex justify-between text-sm hover:bg-muted/50 p-2 rounded transition-colors duration-200">
                      <span>Memory Usage</span>
                      <span className="font-medium animate-in zoom-in-50 duration-300 delay-100">54%</span>
                    </div>
                    <div className="flex justify-between text-sm hover:bg-muted/50 p-2 rounded transition-colors duration-200">
                      <span>Throughput</span>
                      <span className="font-medium animate-in zoom-in-50 duration-300 delay-200">2.3 Gbps</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 animate-in fade-in-50 slide-in-from-bottom-3 duration-500 delay-200">
                  <h4 className="font-medium flex items-center space-x-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Zap className="h-4 w-4 animate-pulse" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Radio access network components including base stations, antennas, and wireless infrastructure serving mobile users</p>
                      </TooltipContent>
                    </Tooltip>
                    <span>Radio Access</span>
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm hover:bg-muted/50 p-2 rounded transition-colors duration-200">
                      <span>Active Users</span>
                      <span className="font-medium animate-in zoom-in-50 duration-300">12,847</span>
                    </div>
                    <div className="flex justify-between text-sm hover:bg-muted/50 p-2 rounded transition-colors duration-200">
                      <span>Interference</span>
                      <span className="font-medium animate-in zoom-in-50 duration-300 delay-100">-89 dBm</span>
                    </div>
                    <div className="flex justify-between text-sm hover:bg-muted/50 p-2 rounded transition-colors duration-200">
                      <span>Coverage</span>
                      <span className="font-medium animate-in zoom-in-50 duration-300 delay-200">98.2%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 animate-in fade-in-50 slide-in-from-right-3 duration-500 delay-500">
                  <h4 className="font-medium flex items-center space-x-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Users className="h-4 w-4 animate-pulse" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Customer experience metrics including service quality, response times, and satisfaction measurements</p>
                      </TooltipContent>
                    </Tooltip>
                    <span>Customer Experience</span>
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm hover:bg-muted/50 p-2 rounded transition-colors duration-200">
                      <span>Avg Response Time</span>
                      <span className="font-medium animate-in zoom-in-50 duration-300">23ms</span>
                    </div>
                    <div className="flex justify-between text-sm hover:bg-muted/50 p-2 rounded transition-colors duration-200">
                      <span>Drop Rate</span>
                      <span className="font-medium animate-in zoom-in-50 duration-300 delay-100">0.12%</span>
                    </div>
                    <div className="flex justify-between text-sm hover:bg-muted/50 p-2 rounded transition-colors duration-200">
                      <span>Satisfaction Score</span>
                      <span className="font-medium animate-in zoom-in-50 duration-300 delay-200">4.7/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </TooltipProvider>
  );
};

export default NetworkDashboard;