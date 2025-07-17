import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Plus, 
  Settings, 
  Zap, 
  Database, 
  Cloud, 
  Webhook,
  Bot,
  Brain,
  Network,
  Activity,
  Shield,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AgentBuilder = () => {
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([]);
  const [agentType, setAgentType] = useState<string>('');

  const agentTypes = [
    {
      id: 'optical-performance',
      name: 'Optical Performance Monitor',
      description: 'Monitor and optimize optical network performance across DWDM systems',
      icon: Activity,
      category: 'Optical'
    },
    {
      id: 'fiber-health',
      name: 'Fiber Health Guardian',
      description: 'Detect and predict fiber degradation and potential failures',
      icon: Shield,
      category: 'Optical'
    },
    {
      id: 'wavelength-optimizer',
      name: 'Wavelength Optimizer',
      description: 'Dynamically optimize wavelength allocation and routing',
      icon: Zap,
      category: 'Optical'
    },
    {
      id: 'osnr-analyzer',
      name: 'OSNR Analyzer',
      description: 'Monitor optical signal-to-noise ratio and optimize amplification',
      icon: Bot,
      category: 'Optical'
    },
    {
      id: 'chromatic-dispersion',
      name: 'Chromatic Dispersion Manager',
      description: 'Manage and compensate for chromatic dispersion effects',
      icon: Brain,
      category: 'Optical'
    }
  ];

  const integrations = [
    {
      id: 'ciena',
      name: 'Ciena WaveLogic',
      description: 'Connect to Ciena optical platforms for real-time telemetry',
      icon: Network,
      category: 'Optical Equipment',
      status: 'available'
    },
    {
      id: 'infinera',
      name: 'Infinera GX Series',
      description: 'Integration with Infinera optical transport systems',
      icon: Cloud,
      category: 'Optical Equipment',
      status: 'available'
    },
    {
      id: 'nokia-psr',
      name: 'Nokia PSR Router',
      description: 'Nokia Photonic Service Router integration',
      icon: Settings,
      category: 'Routing',
      status: 'available'
    },
    {
      id: 'juniper-acx',
      name: 'Juniper ACX Series',
      description: 'Juniper Networks ACX universal access routers',
      icon: Database,
      category: 'Access',
      status: 'available'
    },
    {
      id: 'viavi-solutions',
      name: 'VIAVI Test Platform',
      description: 'VIAVI optical test and measurement tools',
      icon: Activity,
      category: 'Testing',
      status: 'beta'
    },
    {
      id: 'exfo-analyzer',
      name: 'EXFO Optical Analyzer',
      description: 'EXFO optical network analyzers and monitors',
      icon: CheckCircle,
      category: 'Monitoring',
      status: 'available'
    },
    {
      id: 'netcracker-oss',
      name: 'NetCracker OSS',
      description: 'NetCracker operational support systems',
      icon: Shield,
      category: 'OSS/BSS',
      status: 'available'
    },
    {
      id: 'amdocs-crm',
      name: 'Amdocs CRM',
      description: 'Amdocs customer relationship management',
      icon: Webhook,
      category: 'CRM',
      status: 'available'
    }
  ];

  const toggleIntegration = (integrationId: string) => {
    setSelectedIntegrations(prev => 
      prev.includes(integrationId) 
        ? prev.filter(id => id !== integrationId)
        : [...prev, integrationId]
    );
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
            <Bot className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-semibold text-foreground">
              Agent Builder
            </h1>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Badge variant="info">Design Mode</Badge>
          </div>
        </div>
      </header>

      <div className="px-6 py-8">
        <div className="mx-auto max-w-7xl">
          {/* Builder Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Create Custom Agent
            </h2>
            <p className="text-lg text-muted-foreground">
              Design and deploy intelligent agents by connecting to your network infrastructure and business systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Agent Type Selection */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="h-5 w-5 text-primary" />
                    <span>Select Agent Type</span>
                  </CardTitle>
                  <CardDescription>
                    Choose the type of agent you want to create
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {agentTypes.map((type) => {
                      const IconComponent = type.icon;
                      return (
                        <div
                          key={type.id}
                          className={`p-4 rounded-lg border cursor-pointer transition-all ${
                            agentType === type.id
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                          onClick={() => setAgentType(type.id)}
                        >
                          <div className="flex items-center space-x-3 mb-2">
                            <IconComponent className="h-5 w-5 text-primary" />
                            <h4 className="font-medium">{type.name}</h4>
                            <Badge variant="outline">{type.category}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {type.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Integration Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Network className="h-5 w-5 text-primary" />
                    <span>Available Integrations</span>
                  </CardTitle>
                  <CardDescription>
                    Connect your agent to network equipment and business systems
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {integrations.map((integration) => {
                      const IconComponent = integration.icon;
                      const isSelected = selectedIntegrations.includes(integration.id);
                      
                      return (
                        <div
                          key={integration.id}
                          className={`p-4 rounded-lg border cursor-pointer transition-all ${
                            isSelected
                              ? 'border-success bg-success/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                          onClick={() => toggleIntegration(integration.id)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <IconComponent className="h-5 w-5 text-primary" />
                              <h4 className="font-medium">{integration.name}</h4>
                            </div>
                            {isSelected && <CheckCircle className="h-5 w-5 text-success" />}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {integration.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline">{integration.category}</Badge>
                            <Badge 
                              variant={integration.status === 'available' ? 'success' : 'warning'}
                            >
                              {integration.status}
                            </Badge>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Configuration Panel */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="h-5 w-5 text-primary" />
                    <span>Configuration</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {agentType && (
                    <div className="p-4 rounded-lg bg-gradient-subtle border">
                      <h4 className="font-medium mb-2">Selected Agent</h4>
                      <p className="text-sm text-muted-foreground">
                        {agentTypes.find(t => t.id === agentType)?.name}
                      </p>
                    </div>
                  )}

                  {selectedIntegrations.length > 0 && (
                    <div className="p-4 rounded-lg bg-gradient-subtle border">
                      <h4 className="font-medium mb-2">Connected Systems</h4>
                      <div className="space-y-2">
                        {selectedIntegrations.map(id => {
                          const integration = integrations.find(i => i.id === id);
                          return (
                            <div key={id} className="text-sm text-muted-foreground">
                              • {integration?.name}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  <div className="space-y-3">
                    <Button 
                      className="w-full" 
                      variant="enterprise"
                      disabled={!agentType || selectedIntegrations.length === 0}
                    >
                      Deploy Agent
                    </Button>
                    <Button variant="outline" className="w-full">
                      Save as Template
                    </Button>
                    <Button variant="ghost" className="w-full">
                      Preview Configuration
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Deployment Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Validation</span>
                    <Badge variant="success">Passed</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Security Check</span>
                    <Badge variant="success">Approved</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Resource Allocation</span>
                    <Badge variant="info">Ready</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentBuilder;