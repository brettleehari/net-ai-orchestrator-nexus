import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Brain, 
  Download, 
  Eye, 
  TrendingUp,
  Zap,
  Activity,
  Shield,
  Settings,
  Play,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ModelLibrary = () => {
  const [filter, setFilter] = useState<string>('all');

  const models = [
    {
      id: 'optical-osnr-pred',
      name: 'OSNR Prediction Model',
      type: 'Optical Quality Prediction',
      version: 'v2.1',
      accuracy: '96.8%',
      description: 'Predicts optical signal-to-noise ratio degradation in DWDM systems',
      category: 'optical',
      status: 'production',
      lastTrained: '2 days ago',
      dataPoints: '2.3M',
      businessImpact: '$850K saved'
    },
    {
      id: 'fiber-failure-pred',
      name: 'Fiber Failure Predictor',
      type: 'Predictive Maintenance',
      version: 'v1.8',
      accuracy: '94.2%',
      description: 'Machine learning model for predicting fiber cable failures',
      category: 'optical',
      status: 'production',
      lastTrained: '1 week ago',
      dataPoints: '1.8M',
      businessImpact: '15 outages prevented'
    },
    {
      id: 'wavelength-routing',
      name: 'Wavelength Routing Optimizer',
      type: 'Route Optimization',
      version: 'v3.0',
      accuracy: '98.1%',
      description: 'AI-driven wavelength assignment and routing optimization',
      category: 'optical',
      status: 'production',
      lastTrained: '3 days ago',
      dataPoints: '4.1M',
      businessImpact: '32% efficiency gain'
    },
    {
      id: 'chromatic-compensation',
      name: 'Chromatic Dispersion Compensator',
      type: 'Signal Processing',
      version: 'v2.3',
      accuracy: '97.5%',
      description: 'Neural network for dynamic chromatic dispersion compensation',
      category: 'optical',
      status: 'training',
      lastTrained: 'In progress',
      dataPoints: '3.2M',
      businessImpact: '8ms latency reduced'
    },
    {
      id: 'ran-optimization',
      name: 'RAN Performance Optimizer',
      type: 'Radio Optimization',
      version: 'v1.9',
      accuracy: '93.7%',
      description: 'Reinforcement learning for radio access network optimization',
      category: 'ran',
      status: 'production',
      lastTrained: '5 days ago',
      dataPoints: '5.7M',
      businessImpact: '18% throughput increase'
    },
    {
      id: 'interference-predictor',
      name: 'Interference Prediction Model',
      type: 'Quality Prediction',
      version: 'v2.0',
      accuracy: '91.4%',
      description: 'Predicts and mitigates radio frequency interference',
      category: 'ran',
      status: 'production',
      lastTrained: '1 week ago',
      dataPoints: '2.9M',
      businessImpact: '25% interference reduced'
    },
    {
      id: 'capacity-forecasting',
      name: 'Network Capacity Forecaster',
      type: 'Capacity Planning',
      version: 'v1.5',
      accuracy: '89.3%',
      description: 'Time series forecasting for network capacity planning',
      category: 'general',
      status: 'beta',
      lastTrained: '2 weeks ago',
      dataPoints: '1.2M',
      businessImpact: '$2.1M capex optimized'
    }
  ];

  const filteredModels = filter === 'all' ? models : models.filter(model => model.category === filter);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'production': return <Badge variant="success">Production</Badge>;
      case 'training': return <Badge variant="info">Training</Badge>;
      case 'beta': return <Badge variant="warning">Beta</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getAccuracyColor = (accuracy: string) => {
    const value = parseFloat(accuracy.replace('%', ''));
    if (value >= 95) return 'text-success';
    if (value >= 90) return 'text-info';
    return 'text-alert';
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
            <Brain className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-semibold text-foreground">
              Model Library
            </h1>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="enterprise">
              <Download className="h-4 w-4 mr-2" />
              Import Model
            </Button>
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
                    <p className="text-sm font-medium text-muted-foreground">Total Models</p>
                    <p className="text-2xl font-bold">{models.length}</p>
                  </div>
                  <Brain className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Production Models</p>
                    <p className="text-2xl font-bold text-success">
                      {models.filter(m => m.status === 'production').length}
                    </p>
                  </div>
                  <Shield className="h-8 w-8 text-success" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Avg Accuracy</p>
                    <p className="text-2xl font-bold text-success">94.7%</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-success" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Data Points</p>
                    <p className="text-2xl font-bold text-primary">21.2M</p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-primary" />
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
              All Models
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
            <Button
              variant={filter === 'general' ? 'enterprise' : 'outline'}
              onClick={() => setFilter('general')}
            >
              General Network
            </Button>
          </div>

          {/* Model Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredModels.map((model) => (
              <Card key={model.id} className="hover:shadow-floating transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{model.name}</CardTitle>
                    {getStatusBadge(model.status)}
                  </div>
                  <CardDescription>{model.type}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {model.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Version:</span>
                      <p className="font-medium">{model.version}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Accuracy:</span>
                      <p className={`font-medium ${getAccuracyColor(model.accuracy)}`}>
                        {model.accuracy}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Last Trained:</span>
                      <span className="font-medium">{model.lastTrained}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Data Points:</span>
                      <span className="font-medium">{model.dataPoints}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Business Impact:</span>
                      <span className="font-medium text-success">{model.businessImpact}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      <Play className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Settings className="h-4 w-4" />
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

export default ModelLibrary;