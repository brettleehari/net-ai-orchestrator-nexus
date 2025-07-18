import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { 
  ArrowLeft,
  Database,
  Cloud,
  Server,
  Network,
  Zap,
  GitBranch,
  FileText,
  BookOpen,
  Wrench,
  Settings,
  Upload,
  Download,
  Activity,
  Layers,
  Link,
  Code,
  CheckCircle,
  AlertCircle,
  Clock,
  TrendingUp,
  Workflow
} from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const BuiltInIntegrations = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [activeConnections, setActiveConnections] = useState<string[]>([]);
  const [dataFlowActive, setDataFlowActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataFlowActive(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const coreNodes = [
    {
      id: 'janus',
      name: 'JanusGraph',
      icon: Database,
      position: { x: 150, y: 100 },
      color: '#3b82f6',
      description: 'Graph database for network topology and relationships',
      status: 'active',
      connections: ['built-in-agent']
    },
    {
      id: 'cassandra',
      name: 'Cassandra',
      icon: Cloud,
      position: { x: 650, y: 100 },
      color: '#10b981',
      description: 'NoSQL database for time-series data and high availability',
      status: 'active',
      connections: ['built-in-agent']
    },
    {
      id: 'md-sal',
      name: 'MD-SAL',
      icon: Server,
      position: { x: 150, y: 350 },
      color: '#f59e0b',
      description: 'Model-Driven Service Abstraction Layer for OpenDaylight',
      status: 'active',
      connections: ['built-in-agent']
    },
    {
      id: 'kafka',
      name: 'Kafka',
      icon: Zap,
      position: { x: 650, y: 350 },
      color: '#ef4444',
      description: 'Real-time data streaming platform for event processing',
      status: 'active',
      connections: ['built-in-agent']
    }
  ];

  const guideNodes = [
    {
      id: 'user-guide',
      name: 'User Guide',
      icon: BookOpen,
      position: { x: 50, y: 225 },
      color: '#8b5cf6',
      description: 'Complete user documentation and tutorials',
      type: 'guide',
      connections: ['built-in-agent']
    },
    {
      id: 'troubleshooting',
      name: 'Troubleshooting Guide',
      icon: Wrench,
      position: { x: 750, y: 225 },
      color: '#f97316',
      description: 'Problem resolution and debugging guide',
      type: 'guide',
      connections: ['built-in-agent']
    },
    {
      id: 'migration-guide',
      name: 'Migration/Upgrade Guide',
      icon: Upload,
      position: { x: 400, y: 50 },
      color: '#06b6d4',
      description: 'System migration and upgrade documentation',
      type: 'guide',
      connections: ['built-in-agent']
    },
    {
      id: 'installation-guide',
      name: 'Installation Guide',
      icon: Settings,
      position: { x: 400, y: 400 },
      color: '#84cc16',
      description: 'Setup and installation instructions',
      type: 'guide',
      connections: ['built-in-agent']
    }
  ];

  const apiNodes = [
    {
      id: 'northbound-api',
      name: 'Northbound API',
      icon: Upload,
      position: { x: 250, y: 175 },
      color: '#ec4899',
      description: 'External system integrations and client interfaces',
      type: 'api',
      connections: ['built-in-agent']
    },
    {
      id: 'southbound-api',
      name: 'Southbound API',
      icon: Download,
      position: { x: 550, y: 275 },
      color: '#14b8a6',
      description: 'Device and infrastructure control APIs',
      type: 'api',
      connections: ['built-in-agent']
    }
  ];

  // Central Built-in Agent node
  const centralAgent = {
    id: 'built-in-agent',
    name: 'Built-in Agent',
    icon: Activity,
    position: { x: 400, y: 225 },
    color: '#7c3aed',
    description: 'Central orchestration agency managing all system integrations and data flows',
    status: 'active',
    connections: ['janus', 'cassandra', 'md-sal', 'kafka', 'user-guide', 'troubleshooting', 'migration-guide', 'installation-guide', 'northbound-api', 'southbound-api']
  };

  const allNodes = [...coreNodes, ...guideNodes, ...apiNodes, centralAgent];

  const getConnectionPath = (from: any, to: any) => {
    const dx = to.position.x - from.position.x;
    const dy = to.position.y - from.position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Create a curved path for better visualization
    const midX = (from.position.x + to.position.x) / 2;
    const midY = (from.position.y + to.position.y) / 2;
    const offset = distance * 0.15;
    
    return `M ${from.position.x + 30} ${from.position.y + 30} 
            Q ${midX + offset} ${midY - offset} 
            ${to.position.x + 30} ${to.position.y + 30}`;
  };

  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(nodeId);
    const node = allNodes.find(n => n.id === nodeId);
    if (node && 'connections' in node) {
      setActiveConnections(node.connections);
    } else {
      setActiveConnections([]);
    }
  };

  const renderConnections = () => {
    const connections = [];
    
    // Get all nodes that connect to the central agent
    const allConnectedNodes = [...coreNodes, ...guideNodes, ...apiNodes];
    
    allConnectedNodes.forEach(node => {
      if ('connections' in node && node.connections.includes('built-in-agent')) {
        const isActive = activeConnections.includes(node.id) || selectedNode === 'built-in-agent' || selectedNode === node.id;
        
        connections.push(
          <path
            key={`${node.id}-built-in-agent`}
            d={getConnectionPath(node, centralAgent)}
            stroke={isActive ? centralAgent.color : '#64748b'}
            strokeWidth={isActive ? 4 : 3}
            fill="none"
            strokeDasharray="10,5"
            className={`transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`}
            style={{
              strokeDashoffset: dataFlowActive && isActive ? -15 : 0,
              transition: 'stroke-dashoffset 1.2s linear'
            }}
          />
        );
      }
    });
    
    return connections;
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <RouterLink to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Dashboard</span>
              </RouterLink>
              <div className="w-px h-6 bg-gray-300" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Built-in System Integrations
              </h1>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Network className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      System Architecture Overview
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      This visualization shows how the NET AI Orchestrator Nexus operates through a central Built-in Agent that serves as the 
                      primary orchestration agency. The Built-in Agent intelligently manages and coordinates all data flows between core 
                      infrastructure components (JanusGraph, Cassandra, MD-SAL, Kafka), documentation resources, and API interfaces. 
                      Click on any node to see its direct connection to the central agency.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Network Diagram */}
          <div className="mb-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-600" />
                  System Integration Map
                </CardTitle>
                <CardDescription>
                  Interactive visualization showing the central Built-in Agent orchestrating all system components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative w-full h-[500px] bg-gray-50 rounded-lg overflow-hidden">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 900 500"
                    className="absolute inset-0"
                  >
                    {/* Background grid */}
                    <defs>
                      <pattern
                        id="grid"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 20 0 L 0 0 0 20"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="1"
                        />
                      </pattern>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    
                    {/* Connections */}
                    {renderConnections()}
                    
                    {/* Nodes */}
                    {allNodes.map((node) => {
                      const Icon = node.icon;
                      const isSelected = selectedNode === node.id;
                      const isConnected = activeConnections.includes(node.id);
                      const isHighlighted = isSelected || isConnected;
                      
                      return (
                        <g key={node.id}>
                          <circle
                            cx={node.position.x + 30}
                            cy={node.position.y + 30}
                            r={node.id === 'built-in-agent' ? "50" : "40"}
                            fill={node.color}
                            className={`cursor-pointer transition-all duration-300 ${
                              isHighlighted ? 'opacity-100' : 'opacity-70'
                            }`}
                            style={{
                              filter: isHighlighted ? 'url(#glow)' : 'none',
                              transform: isSelected ? 'scale(1.15)' : node.id === 'built-in-agent' ? 'scale(1.1)' : 'scale(1)',
                              transformOrigin: `${node.position.x + 30}px ${node.position.y + 30}px`
                            }}
                            onClick={() => handleNodeClick(node.id)}
                          />
                          <circle
                            cx={node.position.x + 30}
                            cy={node.position.y + 30}
                            r={node.id === 'built-in-agent' ? "28" : "22"}
                            fill="white"
                            className="cursor-pointer"
                            onClick={() => handleNodeClick(node.id)}
                          />
                          <foreignObject
                            x={node.position.x + 18}
                            y={node.position.y + 18}
                            width="24"
                            height="24"
                            className="cursor-pointer"
                            onClick={() => handleNodeClick(node.id)}
                          >
                            <Icon className={`${node.id === 'built-in-agent' ? 'w-7 h-7' : 'w-6 h-6'}`} style={{ color: node.color }} />
                          </foreignObject>
                          <text
                            x={node.position.x + 30}
                            y={node.position.y + (node.id === 'built-in-agent' ? 95 : 90)}
                            textAnchor="middle"
                            className={`${node.id === 'built-in-agent' ? 'text-base font-bold' : 'text-sm font-medium'} transition-all duration-300 ${
                              isHighlighted ? 'fill-gray-900' : 'fill-gray-600'
                            }`}
                          >
                            {node.name}
                          </text>
                          {node.id === 'built-in-agent' && (
                            <text
                              x={node.position.x + 30}
                              y={node.position.y + 110}
                              textAnchor="middle"
                              className="text-xs font-medium fill-purple-600"
                            >
                              Central Agency
                            </text>
                          )}
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Connection Summary */}
          <div className="mb-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="w-5 h-5 text-blue-600" />
                  Connection Matrix
                </CardTitle>
                <CardDescription>
                  All core components are connected to documentation guides and APIs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Core Components</h3>
                    <div className="space-y-3">
                      {coreNodes.map((node) => {
                        const Icon = node.icon;
                        return (
                          <div 
                            key={node.id}
                            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                              selectedNode === node.id 
                                ? 'bg-blue-50 border-2 border-blue-200' 
                                : 'bg-gray-50 hover:bg-gray-100'
                            }`}
                            onClick={() => handleNodeClick(node.id)}
                          >
                            <div className="p-2 rounded-md" style={{ backgroundColor: `${node.color}20` }}>
                              <Icon className="w-5 h-5" style={{ color: node.color }} />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{node.name}</h4>
                              <p className="text-sm text-gray-600">
                                Connected to Built-in Agent
                              </p>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {node.status}
                            </Badge>
                          </div>
                        );
                      })}
                      
                      {/* Central Agent */}
                      <div 
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 border-2 ${
                          selectedNode === 'built-in-agent' 
                            ? 'bg-purple-50 border-purple-300' 
                            : 'bg-purple-25 border-purple-200 hover:bg-purple-50'
                        }`}
                        onClick={() => handleNodeClick('built-in-agent')}
                      >
                        <div className="p-2 rounded-md" style={{ backgroundColor: `${centralAgent.color}20` }}>
                          <Activity className="w-5 h-5" style={{ color: centralAgent.color }} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{centralAgent.name}</h4>
                          <p className="text-sm text-gray-600">
                            Central orchestration agency
                          </p>
                        </div>
                        <Badge variant="outline" className="text-xs bg-purple-100 text-purple-800 border-purple-300">
                          Central Agency
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Documentation & APIs</h3>
                    <div className="space-y-3">
                      {[...guideNodes, ...apiNodes].map((node) => {
                        const Icon = node.icon;
                        const isConnected = activeConnections.includes(node.id);
                        return (
                          <div 
                            key={node.id}
                            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
                              isConnected 
                                ? 'bg-green-50 border-2 border-green-200' 
                                : 'bg-gray-50'
                            }`}
                          >
                            <div className="p-2 rounded-md" style={{ backgroundColor: `${node.color}20` }}>
                              <Icon className="w-5 h-5" style={{ color: node.color }} />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{node.name}</h4>
                              <p className="text-sm text-gray-600">{node.description}</p>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {node.type || 'api'}
                            </Badge>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Node Details */}
          {selectedNode && (
            <div className="mb-8">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-blue-600" />
                    Component Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {(() => {
                    const node = allNodes.find(n => n.id === selectedNode);
                    if (!node) return null;
                    
                    const Icon = node.icon;
                    return (
                      <div className="flex items-start gap-4">
                        <div className="p-4 rounded-lg" style={{ backgroundColor: `${node.color}20` }}>
                          <Icon className="w-8 h-8" style={{ color: node.color }} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {node.name}
                          </h3>
                          <p className="text-gray-600 mb-4">{node.description}</p>
                          
                          {'status' in node && (
                            <div className="flex items-center gap-2 mb-4">
                              <Badge 
                                variant="default"
                                className="bg-green-100 text-green-800"
                              >
                                <CheckCircle className="w-3 h-3 mr-1" />
                                {node.status}
                              </Badge>
                            </div>
                          )}
                          
                          {'connections' in node && node.connections.length > 0 && (
                            <div>
                              <h4 className="font-medium text-gray-900 mb-3">Connected Components:</h4>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                {node.connections.map(connectionId => {
                                  const connectedNode = allNodes.find(n => n.id === connectionId);
                                  if (!connectedNode) return null;
                                  
                                  const ConnectedIcon = connectedNode.icon;
                                  return (
                                    <Badge
                                      key={connectionId}
                                      variant="outline"
                                      className="flex items-center gap-1 p-2 justify-start"
                                    >
                                      <ConnectedIcon className="w-3 h-3" />
                                      {connectedNode.name}
                                    </Badge>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })()}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Integration Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Core Components</p>
                    <p className="text-2xl font-bold text-gray-900">4</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Server className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">API Endpoints</p>
                    <p className="text-2xl font-bold text-gray-900">2</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Code className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Documentation Guides</p>
                    <p className="text-2xl font-bold text-gray-900">4</p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Total Connections</p>
                    <p className="text-2xl font-bold text-green-600">10</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Network className="w-6 h-6 text-green-600" />
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

export default BuiltInIntegrations;
