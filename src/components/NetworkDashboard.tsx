import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
  Network
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/north-america-network.jpg';

const NetworkDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-card shadow-card">
        <div className="flex h-16 items-center px-6">
          <div className="flex items-center space-x-4">
            <Network className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-semibold text-foreground">
              Network Intelligence Platform
            </h1>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Badge variant="success">Live</Badge>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Autonomous Network Operations
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                AI-powered platform that unifies traditional ML/RL models with agentic orchestration 
                for next-generation telecom operations.
              </p>
              <div className="flex space-x-4">
                <Button variant="enterprise" size="lg" asChild>
                  <Link to="/agent-builder">Deploy Agent</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/model-library">View Models</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Network Intelligence" 
                className="rounded-lg shadow-floating"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="px-6 pb-8">
        <div className="mx-auto max-w-7xl">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 bg-gradient-primary text-primary-foreground">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Agents
                </CardTitle>
                <Brain className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs opacity-90">
                  +2 from last hour
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-success text-secondary-foreground">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Network Health
                </CardTitle>
                <CheckCircle className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98.7%</div>
                <p className="text-xs opacity-90">
                  SLA compliance
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Revenue Protected
                </CardTitle>
                <DollarSign className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2.4M</div>
                <p className="text-xs text-muted-foreground">
                  This month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Alerts
                </CardTitle>
                <AlertTriangle className="h-4 w-4 text-alert" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  2 auto-resolved
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Agent Management Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>Agent Orchestration Center</span>
                  </CardTitle>
                  <CardDescription>
                    Real-time view of autonomous agents managing your network
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Agent Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-gradient-subtle border">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">DWDM Performance Monitor</h4>
                        <Badge variant="success">Active</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Monitoring 40+ wavelength channels across metro ring
                      </p>
                      <div className="flex justify-between text-xs">
                        <span>Tasks: 156 completed</span>
                        <span>Impact: $1.2M protected</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-gradient-subtle border">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Fiber Health Guardian</h4>
                        <Badge variant="success">Active</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Predictive maintenance for 2,847 km of fiber routes
                      </p>
                      <div className="flex justify-between text-xs">
                        <span>Tasks: 89 completed</span>
                        <span>Prevented: 12 outages</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-gradient-subtle border">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Wavelength Optimizer</h4>
                        <Badge variant="info">Processing</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Real-time wavelength routing optimization
                      </p>
                      <div className="flex justify-between text-xs">
                        <span>Tasks: 203 completed</span>
                        <span>Efficiency: +23%</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-gradient-subtle border">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">OSNR Signal Analyzer</h4>
                        <Badge variant="success">Active</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Continuous OSNR monitoring and amplifier optimization
                      </p>
                      <div className="flex justify-between text-xs">
                        <span>Tasks: 134 completed</span>
                        <span>OSNR: +15dB improved</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <Button variant="outline" asChild>
                      <Link to="/agent-management">View All Agents</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* Business Context Panel */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-success" />
                    <span>Business Impact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Customer Satisfaction</span>
                      <span className="text-sm font-medium">94.3%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-success h-2 rounded-full" style={{width: '94.3%'}}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">SLA Compliance</span>
                      <span className="text-sm font-medium">98.7%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-success h-2 rounded-full" style={{width: '98.7%'}}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Cost Efficiency</span>
                      <span className="text-sm font-medium">87.1%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{width: '87.1%'}}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Model Performance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span>Model Performance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">OSNR Prediction</span>
                    <Badge variant="success">96.8%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Wavelength Routing</span>
                    <Badge variant="success">98.1%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Fiber Failure Prediction</span>
                    <Badge variant="success">94.2%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">RAN Optimization</span>
                    <Badge variant="info">93.7%</Badge>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/model-library">View Model Library</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Real-time Telemetry */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-primary" />
                <span>Real-time Network Telemetry</span>
              </CardTitle>
              <CardDescription>
                Live data streams from network elements across your infrastructure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium flex items-center space-x-2">
                    <Server className="h-4 w-4" />
                    <span>Core Network</span>
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>CPU Usage</span>
                      <span className="font-medium">67%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Memory Usage</span>
                      <span className="font-medium">54%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Throughput</span>
                      <span className="font-medium">2.3 Gbps</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium flex items-center space-x-2">
                    <Zap className="h-4 w-4" />
                    <span>Radio Access</span>
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Active Users</span>
                      <span className="font-medium">12,847</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Interference</span>
                      <span className="font-medium">-89 dBm</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Coverage</span>
                      <span className="font-medium">98.2%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>Customer Experience</span>
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Avg Response Time</span>
                      <span className="font-medium">23ms</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Drop Rate</span>
                      <span className="font-medium">0.12%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Satisfaction Score</span>
                      <span className="font-medium">4.7/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NetworkDashboard;