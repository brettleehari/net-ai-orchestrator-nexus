import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  TrendingUp, 
  DollarSign, 
  Users, 
  AlertTriangle,
  CheckCircle,
  BarChart3,
  PieChart,
  Activity,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessIntelligence = () => {
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
            <BarChart3 className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-semibold text-foreground">
              Business Intelligence
            </h1>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Badge variant="success">Real-time</Badge>
          </div>
        </div>
      </header>

      <div className="px-6 py-8">
        <div className="mx-auto max-w-7xl">
          {/* Revenue Impact */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 bg-gradient-success text-secondary-foreground">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Revenue Protected
                </CardTitle>
                <DollarSign className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$4.7M</div>
                <p className="text-xs opacity-90">
                  +12% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-primary text-primary-foreground">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Cost Savings
                </CardTitle>
                <TrendingUp className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2.1M</div>
                <p className="text-xs opacity-90">
                  Operational efficiency
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Customer Retention
                </CardTitle>
                <Users className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">96.8%</div>
                <p className="text-xs text-muted-foreground">
                  +2.3% improvement
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  SLA Violations
                </CardTitle>
                <AlertTriangle className="h-4 w-4 text-alert" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0.8%</div>
                <p className="text-xs text-muted-foreground">
                  -65% reduction
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Revenue Impact by Service */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChart className="h-5 w-5 text-primary" />
                  <span>Revenue Impact by Service</span>
                </CardTitle>
                <CardDescription>
                  How AI agents are protecting revenue across service lines
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Enterprise Fiber</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-muted rounded-full h-2">
                        <div className="bg-gradient-primary h-2 rounded-full" style={{width: '68%'}}></div>
                      </div>
                      <span className="text-sm font-medium">$3.2M</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Mobile Services</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-muted rounded-full h-2">
                        <div className="bg-gradient-success h-2 rounded-full" style={{width: '24%'}}></div>
                      </div>
                      <span className="text-sm font-medium">$1.1M</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Wholesale</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-muted rounded-full h-2">
                        <div className="bg-gradient-info h-2 rounded-full" style={{width: '8%'}}></div>
                      </div>
                      <span className="text-sm font-medium">$400K</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer Risk Assessment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-alert" />
                  <span>Customer Risk Assessment</span>
                </CardTitle>
                <CardDescription>
                  AI-powered customer churn and SLA violation predictions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-gradient-subtle border">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">High Risk Customers</h4>
                      <Badge variant="warning">47 accounts</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Customers with &gt;70% churn probability
                    </p>
                    <div className="text-sm text-alert font-medium">
                      $8.2M revenue at risk
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-subtle border">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">SLA Watch List</h4>
                      <Badge variant="info">23 accounts</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Near SLA violation threshold
                    </p>
                    <div className="text-sm text-info font-medium">
                      $3.1M protected by agents
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-subtle border">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Tier 1 Customers</h4>
                      <Badge variant="success">156 accounts</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Premium customers with dedicated monitoring
                    </p>
                    <div className="text-sm text-success font-medium">
                      99.95% SLA compliance
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Competitive Intelligence */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Network Performance vs Competition</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Latency Ranking</span>
                    <Badge variant="success">#2 in region</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Availability Ranking</span>
                    <Badge variant="success">#1 in region</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Fiber Coverage</span>
                    <Badge variant="info">#3 in region</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">ROI Calculator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">AI Platform Investment</span>
                    <span className="text-sm font-medium">$2.8M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Annual Savings</span>
                    <span className="text-sm font-medium text-success">$6.8M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">ROI</span>
                    <span className="text-sm font-medium text-success">243%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Payback Period</span>
                    <span className="text-sm font-medium">4.9 months</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Operational Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">MTTR Reduction</span>
                    <span className="text-sm font-medium text-success">-67%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">OpEx Savings</span>
                    <span className="text-sm font-medium text-success">$2.1M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Automation Rate</span>
                    <span className="text-sm font-medium">87%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Staff Productivity</span>
                    <span className="text-sm font-medium text-success">+34%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Network-to-Business Correlation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-primary" />
                <span>Network-to-Business Outcome Correlation</span>
              </CardTitle>
              <CardDescription>
                Real-time correlation between network performance and business metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Network Quality Impact</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Latency (ms) &rarr; Customer Satisfaction</span>
                      <span className="font-medium">-0.89 correlation</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Packet Loss &rarr; Churn Rate</span>
                      <span className="font-medium">+0.76 correlation</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Availability &rarr; Revenue</span>
                      <span className="font-medium">+0.92 correlation</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Service Level Impact</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>SLA Violations &rarr; Customer Calls</span>
                      <span className="font-medium">+0.83 correlation</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Response Time &rarr; NPS Score</span>
                      <span className="font-medium">-0.71 correlation</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Proactive Fixes &rarr; Satisfaction</span>
                      <span className="font-medium">+0.94 correlation</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Revenue Correlation</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Network Uptime &rarr; Revenue</span>
                      <span className="font-medium">+0.96 correlation</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Fault Resolution &rarr; Renewals</span>
                      <span className="font-medium">+0.82 correlation</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Performance &rarr; Upsells</span>
                      <span className="font-medium">+0.78 correlation</span>
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

export default BusinessIntelligence;