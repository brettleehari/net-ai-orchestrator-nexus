import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { 
  Search, 
  Filter, 
  ArrowLeft,
  Database,
  Cloud,
  Mail,
  MessageSquare,
  FileText,
  BarChart3,
  Shield,
  Globe,
  Zap,
  Settings,
  Workflow,
  Link,
  Star,
  Download,
  Play,
  CheckCircle,
  Clock,
  Users,
  Smartphone,
  CreditCard,
  Calendar,
  Camera,
  Music,
  Video,
  Monitor,
  Cpu,
  HardDrive,
  Wifi,
  Bluetooth,
  Headphones,
  Network
} from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const WorkflowIntegrations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Integrations', count: 450 },
    { id: 'network', name: 'Network & Infrastructure', count: 85 },
    { id: 'database', name: 'Databases', count: 45 },
    { id: 'cloud', name: 'Cloud Services', count: 120 },
    { id: 'communication', name: 'Communication', count: 65 },
    { id: 'analytics', name: 'Analytics & BI', count: 55 },
    { id: 'security', name: 'Security & Monitoring', count: 40 },
    { id: 'automation', name: 'Automation Tools', count: 40 }
  ];

  const integrations = [
    {
      id: 1,
      name: 'Cisco Network Controllers',
      description: 'Connect to Cisco network devices, routers, and switches for configuration and monitoring',
      icon: <Wifi className="h-8 w-8" />,
      category: 'network',
      popular: true,
      featured: true,
      type: 'Premium',
      rating: 4.8,
      installations: '12K+',
      tags: ['SNMP', 'REST API', 'CLI', 'Telnet']
    },
    {
      id: 2,
      name: 'Juniper Networks',
      description: 'Integrate with Juniper network equipment for automated configuration and monitoring',
      icon: <Network className="h-8 w-8" />,
      category: 'network',
      popular: false,
      featured: true,
      type: 'Free',
      rating: 4.6,
      installations: '8K+',
      tags: ['NETCONF', 'YANG', 'PyEZ', 'REST']
    },
    {
      id: 3,
      name: 'Prometheus Monitoring',
      description: 'Pull metrics from Prometheus for network performance monitoring and alerting',
      icon: <BarChart3 className="h-8 w-8" />,
      category: 'analytics',
      popular: true,
      featured: false,
      type: 'Free',
      rating: 4.9,
      installations: '25K+',
      tags: ['Metrics', 'Alerting', 'Time Series', 'Grafana']
    },
    {
      id: 4,
      name: 'Elasticsearch',
      description: 'Index and search network logs, events, and telemetry data',
      icon: <Search className="h-8 w-8" />,
      category: 'database',
      popular: true,
      featured: true,
      type: 'Free',
      rating: 4.7,
      installations: '18K+',
      tags: ['Search', 'Analytics', 'Logs', 'Kibana']
    },
    {
      id: 5,
      name: 'Slack Notifications',
      description: 'Send network alerts and status updates to Slack channels',
      icon: <MessageSquare className="h-8 w-8" />,
      category: 'communication',
      popular: true,
      featured: false,
      type: 'Free',
      rating: 4.8,
      installations: '35K+',
      tags: ['Notifications', 'Chat', 'Webhooks', 'Bot']
    },
    {
      id: 6,
      name: 'AWS CloudWatch',
      description: 'Monitor AWS infrastructure and send metrics to CloudWatch',
      icon: <Cloud className="h-8 w-8" />,
      category: 'cloud',
      popular: true,
      featured: true,
      type: 'Free',
      rating: 4.6,
      installations: '22K+',
      tags: ['AWS', 'Monitoring', 'Logs', 'Metrics']
    },
    {
      id: 7,
      name: 'Microsoft Teams',
      description: 'Send network alerts and reports to Microsoft Teams channels',
      icon: <Users className="h-8 w-8" />,
      category: 'communication',
      popular: false,
      featured: false,
      type: 'Free',
      rating: 4.5,
      installations: '14K+',
      tags: ['Teams', 'Notifications', 'Chat', 'Webhooks']
    },
    {
      id: 8,
      name: 'Splunk Enterprise',
      description: 'Forward network logs and events to Splunk for analysis',
      icon: <FileText className="h-8 w-8" />,
      category: 'analytics',
      popular: false,
      featured: true,
      type: 'Premium',
      rating: 4.4,
      installations: '9K+',
      tags: ['SIEM', 'Logs', 'Analytics', 'Security']
    },
    {
      id: 9,
      name: 'PostgreSQL',
      description: 'Store network configuration and telemetry data in PostgreSQL',
      icon: <Database className="h-8 w-8" />,
      category: 'database',
      popular: true,
      featured: false,
      type: 'Free',
      rating: 4.7,
      installations: '28K+',
      tags: ['SQL', 'Database', 'ACID', 'Relational']
    },
    {
      id: 10,
      name: 'PagerDuty',
      description: 'Create incidents and alerts in PagerDuty for network issues',
      icon: <Shield className="h-8 w-8" />,
      category: 'security',
      popular: false,
      featured: false,
      type: 'Premium',
      rating: 4.6,
      installations: '11K+',
      tags: ['Incident', 'Alerting', 'On-call', 'Escalation']
    },
    {
      id: 11,
      name: 'Jira Service Management',
      description: 'Create tickets and track network issues in Jira',
      icon: <Settings className="h-8 w-8" />,
      category: 'automation',
      popular: false,
      featured: false,
      type: 'Free',
      rating: 4.3,
      installations: '16K+',
      tags: ['Tickets', 'ITSM', 'Workflow', 'Tracking']
    },
    {
      id: 12,
      name: 'Webhook Endpoints',
      description: 'Send HTTP webhooks to any custom endpoint or API',
      icon: <Zap className="h-8 w-8" />,
      category: 'automation',
      popular: true,
      featured: false,
      type: 'Free',
      rating: 4.8,
      installations: '42K+',
      tags: ['HTTP', 'API', 'Custom', 'Flexible']
    }
  ];

  const filteredIntegrations = integrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredIntegrations = integrations.filter(integration => integration.featured);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-subtle">
        {/* Header */}
        <header className="border-b bg-card shadow-card sticky top-0 z-40">
          <div className="flex h-16 items-center px-6">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <RouterLink to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </RouterLink>
              </Button>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center space-x-3">
                <Workflow className="h-8 w-8 text-primary" />
                <div>
                  <h1 className="text-xl font-semibold text-foreground">Workflow Automation</h1>
                  <p className="text-sm text-muted-foreground">Connect your network with 450+ services</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8">
          <div className="mx-auto max-w-7xl">
            {/* Hero Section */}
            <div className="mb-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Connect Everything</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Automate your network operations with our extensive library of integrations. 
                  Connect to databases, cloud services, monitoring tools, and more with visual workflows.
                </p>
                
                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search integrations..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Filter className="h-4 w-4" />
                    <span>Filter</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center space-x-2"
                  >
                    <span>{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>

            {/* Featured Integrations */}
            {selectedCategory === 'all' && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">Featured Integrations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredIntegrations.map(integration => (
                    <Card key={integration.id} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="absolute top-4 right-4 z-10">
                        {integration.popular && (
                          <Badge className="bg-gradient-primary text-white">Popular</Badge>
                        )}
                      </div>
                      <CardHeader className="text-center pt-8">
                        <div className="mx-auto mb-4 p-3 bg-gradient-subtle rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                          {integration.icon}
                        </div>
                        <CardTitle className="text-lg">{integration.name}</CardTitle>
                        <CardDescription className="text-sm">
                          {integration.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{integration.rating}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Download className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{integration.installations}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {integration.tags.slice(0, 3).map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {integration.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{integration.tags.length - 3} more
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between pt-2">
                          <Badge variant={integration.type === 'Premium' ? 'default' : 'secondary'}>
                            {integration.type}
                          </Badge>
                          <Button size="sm" className="group-hover:scale-105 transition-transform duration-200">
                            <Play className="h-4 w-4 mr-2" />
                            Connect
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* All Integrations */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">
                  {selectedCategory === 'all' ? 'All Integrations' : categories.find(c => c.id === selectedCategory)?.name}
                </h3>
                <div className="text-sm text-muted-foreground">
                  {filteredIntegrations.length} integration{filteredIntegrations.length !== 1 ? 's' : ''}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredIntegrations.map(integration => (
                  <Card key={integration.id} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-3 p-2 bg-gradient-subtle rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                        {integration.icon}
                      </div>
                      <CardTitle className="text-base">{integration.name}</CardTitle>
                      <CardDescription className="text-xs line-clamp-2">
                        {integration.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span>{integration.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Download className="h-3 w-3 text-muted-foreground" />
                          <span className="text-muted-foreground">{integration.installations}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {integration.tags.slice(0, 2).map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {integration.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{integration.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between pt-2">
                        <Badge variant={integration.type === 'Premium' ? 'default' : 'secondary'} className="text-xs">
                          {integration.type}
                        </Badge>
                        <Button size="sm" className="text-xs group-hover:scale-105 transition-transform duration-200">
                          <Play className="h-3 w-3 mr-1" />
                          Connect
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <Card className="bg-gradient-primary text-white">
                <CardContent className="py-12">
                  <h3 className="text-2xl font-bold mb-4">Don't see your integration?</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Request a new integration or build your own with our developer tools
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="secondary" size="lg">
                      Request Integration
                    </Button>
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                      Developer Docs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default WorkflowIntegrations;
