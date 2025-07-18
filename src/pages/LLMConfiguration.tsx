import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { 
  ArrowLeft, 
  Zap, 
  Cloud, 
  Server, 
  Shield, 
  CheckCircle,
  AlertTriangle,
  Brain,
  Settings,
  Key,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LLMConfiguration = () => {
  const [selectedProvider, setSelectedProvider] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [apiKey, setApiKey] = useState<string>('');
  const [endpoint, setEndpoint] = useState<string>('');
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');

  const llmProviders = [
    {
      id: 'openai',
      name: 'OpenAI',
      type: 'Closed Source',
      icon: Cloud,
      description: 'GPT-4, GPT-3.5, and other OpenAI models',
      models: ['gpt-4', 'gpt-4-turbo', 'gpt-3.5-turbo', 'gpt-3.5-turbo-16k'],
      requiresApiKey: true,
      requiresEndpoint: false
    },
    {
      id: 'anthropic',
      name: 'Anthropic',
      type: 'Closed Source',
      icon: Brain,
      description: 'Claude 3 and other Anthropic models',
      models: ['claude-3-opus', 'claude-3-sonnet', 'claude-3-haiku', 'claude-2'],
      requiresApiKey: true,
      requiresEndpoint: false
    },
    {
      id: 'google',
      name: 'Google AI',
      type: 'Closed Source',
      icon: Globe,
      description: 'Gemini and PaLM models',
      models: ['gemini-pro', 'gemini-pro-vision', 'palm-2'],
      requiresApiKey: true,
      requiresEndpoint: false
    },
    {
      id: 'azure',
      name: 'Azure OpenAI',
      type: 'Closed Source',
      icon: Cloud,
      description: 'OpenAI models through Azure',
      models: ['gpt-4', 'gpt-35-turbo', 'text-davinci-003'],
      requiresApiKey: true,
      requiresEndpoint: true
    },
    {
      id: 'huggingface',
      name: 'Hugging Face',
      type: 'Open Source',
      icon: Server,
      description: 'Open source models via Hugging Face',
      models: ['llama-2-7b', 'llama-2-13b', 'mistral-7b', 'codellama-34b'],
      requiresApiKey: true,
      requiresEndpoint: false
    },
    {
      id: 'ollama',
      name: 'Ollama',
      type: 'Local/Self-hosted',
      icon: Server,
      description: 'Run models locally with Ollama',
      models: ['llama2', 'mistral', 'codellama', 'vicuna'],
      requiresApiKey: false,
      requiresEndpoint: true
    },
    {
      id: 'custom',
      name: 'Custom/In-house',
      type: 'Custom',
      icon: Settings,
      description: 'Your own LLM endpoint',
      models: ['custom-model'],
      requiresApiKey: true,
      requiresEndpoint: true
    }
  ];

  const selectedProviderData = llmProviders.find(p => p.id === selectedProvider);

  const handleTestConnection = async () => {
    setConnectionStatus('testing');
    
    // Simulate API test (replace with actual API call)
    setTimeout(() => {
      if (apiKey || !selectedProviderData?.requiresApiKey) {
        setConnectionStatus('success');
      } else {
        setConnectionStatus('error');
      }
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const config = {
      provider: selectedProvider,
      model: selectedModel,
      apiKey,
      endpoint,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('llm-config', JSON.stringify(config));
    alert('LLM configuration saved successfully!');
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-subtle">
        {/* Header */}
        <header className="border-b bg-card shadow-card">
          <div className="flex h-16 items-center px-6">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Return to main dashboard</p>
                  </TooltipContent>
                </Tooltip>
              </Link>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Zap className="h-8 w-8 text-primary" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>LLM Configuration - Connect your preferred Large Language Model provider</p>
                </TooltipContent>
              </Tooltip>
              <h1 className="text-xl font-semibold text-foreground">
                LLM Configuration
              </h1>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Badge variant="info">BYOLLM</Badge>
          </div>
        </div>
      </header>

      <div className="px-6 py-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Connect Your LLM
            </h2>
            <p className="text-lg text-muted-foreground">
              Bring your own LLM to power the AI orchestration platform. Choose from popular providers or connect your custom model.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Provider Selection */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    LLM Providers
                  </CardTitle>
                  <CardDescription>
                    Select your preferred LLM provider
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {llmProviders.map((provider) => (
                    <div
                      key={provider.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                        selectedProvider === provider.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => {
                        setSelectedProvider(provider.id);
                        setSelectedModel('');
                      }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <provider.icon className="h-5 w-5 text-primary" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{provider.description} - {provider.type} LLM provider</p>
                          </TooltipContent>
                        </Tooltip>
                        <div>
                          <h4 className="font-medium">{provider.name}</h4>
                          <Badge variant="outline" className="text-xs">
                            {provider.type}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {provider.description}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Configuration Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Configuration
                  </CardTitle>
                  <CardDescription>
                    Configure your selected LLM provider
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!selectedProvider ? (
                    <div className="text-center py-8">
                      <Brain className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Select a provider to configure your LLM connection
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Model Selection */}
                      <div className="space-y-2">
                        <Label htmlFor="model">Model</Label>
                        <Select value={selectedModel} onValueChange={setSelectedModel}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a model" />
                          </SelectTrigger>
                          <SelectContent>
                            {selectedProviderData?.models.map((model) => (
                              <SelectItem key={model} value={model}>
                                {model}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* API Key */}
                      {selectedProviderData?.requiresApiKey && (
                        <div className="space-y-2">
                          <Label htmlFor="apiKey" className="flex items-center gap-2">
                            <Key className="h-4 w-4" />
                            API Key
                          </Label>
                          <Input
                            id="apiKey"
                            type="password"
                            placeholder="Enter your API key"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                          />
                        </div>
                      )}

                      {/* Endpoint */}
                      {selectedProviderData?.requiresEndpoint && (
                        <div className="space-y-2">
                          <Label htmlFor="endpoint">Endpoint URL</Label>
                          <Input
                            id="endpoint"
                            type="url"
                            placeholder="https://api.example.com/v1"
                            value={endpoint}
                            onChange={(e) => setEndpoint(e.target.value)}
                          />
                        </div>
                      )}

                      {/* Connection Status */}
                      {connectionStatus !== 'idle' && (
                        <Alert>
                          <div className="flex items-center gap-2">
                            {connectionStatus === 'testing' && <Shield className="h-4 w-4 animate-spin" />}
                            {connectionStatus === 'success' && <CheckCircle className="h-4 w-4 text-green-500" />}
                            {connectionStatus === 'error' && <AlertTriangle className="h-4 w-4 text-red-500" />}
                          </div>
                          <AlertDescription>
                            {connectionStatus === 'testing' && 'Testing connection...'}
                            {connectionStatus === 'success' && 'Connection successful!'}
                            {connectionStatus === 'error' && 'Connection failed. Please check your credentials.'}
                          </AlertDescription>
                        </Alert>
                      )}

                      {/* Actions */}
                      <div className="flex gap-4 pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleTestConnection}
                          disabled={connectionStatus === 'testing'}
                        >
                          {connectionStatus === 'testing' ? 'Testing...' : 'Test Connection'}
                        </Button>
                        <Button
                          type="submit"
                          disabled={!selectedModel || (selectedProviderData?.requiresApiKey && !apiKey)}
                        >
                          Save Configuration
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4" />
                  Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  API keys are stored locally in your browser and never transmitted to our servers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Zap className="h-4 w-4" />
                  Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Local and self-hosted models provide better latency and privacy for your AI operations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Brain className="h-4 w-4" />
                  Flexibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Switch between different models and providers based on your specific use case requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </TooltipProvider>
  );
};

export default LLMConfiguration;
