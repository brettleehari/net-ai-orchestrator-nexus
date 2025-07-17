import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Plus, 
  Activity, 
  Shield, 
  Bot,
  Brain,
  Zap,
  AlertTriangle,
  CheckCircle,
  Clock,
  Settings,
  Play,
  Pause,
  Trash2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AgentManagement = () => {
  const [filter, setFilter] = useState<string>('all');

  const agents = [
    // Optical Networking Agents (more than RAN)
    {
      id: 'optical-perf-1',
      name: 'DWDM Performance Monitor',
      type: 'Optical Performance',
      status: 'active',
      description: 'Monitoring 40+ wavelength channels across metro ring',
      tasksCompleted: 156,
      uptime: '99.8%',
      lastAction: '2 min ago',
      impact: '$1.2M protected',
      category: 'optical'
    },
    {
      id: 'fiber-health-1',
      name: 'Fiber Health Guardian',
      type: 'Optical Maintenance',
      status: 'active',
      description: 'Predictive maintenance for 2,847 km of fiber routes',
      tasksCompleted: 89,
      uptime: '99.4%',
      lastAction: '5 min ago',
      impact: '12 outages prevented',
      category: 'optical'
    },
    {
      id: 'wavelength-opt-1',
      name: 'Wavelength Optimizer',
      type: 'Optical Optimization',
      status: 'processing',
      description: 'Real-time wavelength routing optimization',
      tasksCompleted: 203,
      uptime: '98.9%',
      lastAction: 'Running',
      impact: '23% efficiency gain',
      category: 'optical'
    },
    {
      id: 'osnr-analyzer-1',
      name: 'OSNR Signal Analyzer',
      type: 'Optical Quality',
      status: 'active',
      description: 'Continuous OSNR monitoring and amplifier optimization',
      tasksCompleted: 134,
      uptime: '99.7%',
      lastAction: '1 min ago',
      impact: '15dB OSNR improved',
      category: 'optical'
    },
    {
      id: 'chromatic-disp-1',
      name: 'Chromatic Dispersion Manager',
      type: 'Optical Compensation',
      status: 'active',
      description: 'Dynamic dispersion compensation across long-haul links',
      tasksCompleted: 67,
      uptime: '99.2%',
      lastAction: '3 min ago',
      impact: '8ms latency reduced',
      category: 'optical'
    },
    {
      id: 'optical-switch-1',
      name: 'Optical Switch Controller',
      type: 'Optical Switching',
      status: 'active',
      description: 'Automated optical cross-connect management',
      tasksCompleted: 198,
      uptime: '99.9%',
      lastAction: '30 sec ago',
      impact: '99.99% switching reliability',
      category: 'optical'
    },
    {
      id: 'raman-amp-1',
      name: 'Raman Amplifier Optimizer',
      type: 'Optical Amplification',
      status: 'warning',
      description: 'Distributed Raman amplification control',
      tasksCompleted: 45,
      uptime: '97.3%',
      lastAction: '15 min ago',
      impact: '5dB gain optimized',
      category: 'optical'
    },
    // RAN Agents (fewer than optical)
    {
      id: 'ran-perf-1',
      name: 'RAN Performance Guardian',
      type: 'Radio Optimization',
      status: 'active',
      description: 'Optimizing performance across 127 base stations',
      tasksCompleted: 245,
      uptime: '99.2%',
      lastAction: '1 min ago',
      impact: '18% throughput increase',
      category: 'ran'
    },
    {
      id: 'interference-1',
      name: 'Interference Mitigator',
      type: 'Radio Quality',
      status: 'active',
      description: 'Real-time interference detection and mitigation',
      tasksCompleted: 178,
      uptime: '98.8%',
      lastAction: '4 min ago',
      impact: '34% interference reduced',
      category: 'ran'
    },
    {
      id: 'handover-opt-1',
      name: 'Handover Optimizer',
      type: 'Mobility Management',
      status: 'processing',
      description: 'Optimizing handover parameters for seamless mobility',
      tasksCompleted: 156,
      uptime: '99.1%',
      lastAction: 'Running',
      impact: '12% drop rate improved',
      category: 'ran'
    }
  ];

  const filteredAgents = filter === 'all' ? agents : agents.filter(agent => agent.category === filter);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="h-4 w-4 text-success" />;
      case 'processing': return <Clock className="h-4 w-4 text-info" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-alert" />;
      default: return <CheckCircle className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active': return <Badge variant="success">Active</Badge>;
      case 'processing': return <Badge variant="info">Processing</Badge>;
      case 'warning': return <Badge variant="warning">Warning</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-card shadow-card">
        <div className="flex h-16 items-center px-6">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-semibold text-foreground">
              Agent Management
            </h1>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Link to="/agent-builder">
              <Button variant="enterprise">
                <Plus className="h-4 w-4 mr-2" />
                Create Agent
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="px-6 py-8">
        <div className="mx-auto max-w-7xl">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Agents</p>
                    <p className="text-2xl font-bold">{agents.length}</p>
                  </div>
                  <Bot className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Optical Agents</p>
                    <p className="text-2xl font-bold text-primary">
                      {agents.filter(a => a.category === 'optical').length}
                    </p>
                  </div>
                  <Zap className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">RAN Agents</p>
                    <p className="text-2xl font-bold text-success">
                      {agents.filter(a => a.category === 'ran').length}
                    </p>
                  </div>
                  <Activity className="h-8 w-8 text-success" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Avg Uptime</p>
                    <p className="text-2xl font-bold text-success">99.1%</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-success" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-2 mb-6">
            <Button
              variant={filter === 'all' ? 'enterprise' : 'outline'}
              onClick={() => setFilter('all')}
            >
              All Agents
            </Button>
            <Button
              variant={filter === 'optical' ? 'enterprise' : 'outline'}
              onClick={() => setFilter('optical')}
            >
              Optical Network
            </Button>
            <Button
              variant={filter === 'ran' ? 'enterprise' : 'outline'}
              onClick={() => setFilter('ran')}
            >
              Radio Access
            </Button>
          </div>

          {/* Agent Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredAgents.map((agent) => (
              <Card key={agent.id} className="hover:shadow-floating transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(agent.status)}
                      <CardTitle className="text-lg">{agent.name}</CardTitle>
                    </div>
                    {getStatusBadge(agent.status)}
                  </div>
                  <CardDescription>{agent.type}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {agent.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Tasks:</span>
                      <p className="font-medium">{agent.tasksCompleted} completed</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Uptime:</span>
                      <p className="font-medium">{agent.uptime}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Last Action:</span>
                      <span className="font-medium">{agent.lastAction}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Impact:</span>
                      <span className="font-medium text-success">{agent.impact}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Settings className="h-4 w-4 mr-1" />
                      Configure
                    </Button>
                    <Button variant="outline" size="sm">
                      {agent.status === 'active' ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentManagement;