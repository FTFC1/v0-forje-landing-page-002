"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Users,
  TrendingUp,
  Award,
  BookOpen,
  Target,
  Eye,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShoppingCart,
  BarChart3,
  Palette,
  UserCheck,
  Star,
  Zap,
} from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [activePathway, setActivePathway] = useState("all")

  const trainingPrograms = [
    {
      title: "Buying & Merchandising",
      icon: Target,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Store Operations & Management",
      icon: Users,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Visual Merchandising & Display",
      icon: Eye,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Team Leadership Development",
      icon: Award,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Customer Experience Excellence",
      icon: CheckCircle,
      color: "bg-pink-100 text-pink-600",
    },
    {
      title: "Sales Techniques & Conversion",
      icon: TrendingUp,
      color: "bg-indigo-100 text-indigo-600",
    },
  ]

  const pathwayOptions = {
    all: [
      { title: "Customer Approach", pathway: "Sales Pathway", icon: UserCheck },
      { title: "Visual Merchandising", pathway: "Presentation Pathway", icon: Palette },
      { title: "Forecasting & Buying", pathway: "Head Office Pathway", icon: BarChart3 },
      { title: "Inventory Planning", pathway: "Operations Pathway", icon: ShoppingCart },
    ],
    sales: [
      { title: "Customer Approach Mastery", pathway: "Advanced Sales Techniques", icon: UserCheck },
      { title: "Product Knowledge Systems", pathway: "Expert Consultation Skills", icon: BookOpen },
      { title: "Objection Handling", pathway: "Conversion Optimization", icon: Target },
      { title: "Relationship Building", pathway: "Customer Retention", icon: Users },
    ],
    presentation: [
      { title: "Visual Merchandising", pathway: "Store Layout Design", icon: Palette },
      { title: "Product Display", pathway: "Window Merchandising", icon: Eye },
      { title: "Brand Presentation", pathway: "Seasonal Campaigns", icon: Star },
      { title: "Customer Journey", pathway: "Experience Design", icon: ArrowRight },
    ],
    headoffice: [
      { title: "Forecasting & Buying", pathway: "Market Analysis", icon: BarChart3 },
      { title: "Supplier Relations", pathway: "Vendor Management", icon: Users },
      { title: "Inventory Control", pathway: "Stock Optimization", icon: Target },
      { title: "Financial Planning", pathway: "Budget Management", icon: TrendingUp },
    ],
    operations: [
      { title: "Inventory Planning", pathway: "Stock Management", icon: ShoppingCart },
      { title: "Process Optimization", pathway: "Efficiency Systems", icon: Zap },
      { title: "Team Coordination", pathway: "Workflow Management", icon: Users },
      { title: "Quality Control", pathway: "Standards Compliance", icon: CheckCircle },
    ],
  }

  const getPathwayTitle = (pathway: string) => {
    switch (pathway) {
      case "all":
        return "All Pathways"
      case "sales":
        return "Sales Pathway"
      case "presentation":
        return "Presentation Pathway"
      case "headoffice":
        return "Head Office Pathway"
      case "operations":
        return "Operations Pathway"
      default:
        return "All Pathways"
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/new-hero-bg.png" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-pink-100/30 to-transparent" />
        </div>
        <div className="container mx-auto px-4 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Hero Content */}
            <div className="space-y-8">
              {/* FORJE Logo */}
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-gray-900">FORJE</div>
                <div className="w-0 h-0 border-l-[12px] border-l-purple-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent" />
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-balance">
                  Run a more efficient, profitable retail business
                </h1>

                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Close 30% more sales
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Increase your bottom line
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Improve staff retention & reduce turnover
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Boost efficiency across all operations
                  </li>
                </ul>

                <p className="text-gray-600 font-medium border-l-4 border-purple-600 pl-4">
                  Certified, accredited, and industry-recognized retail training — built by retailers, for retailers.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                    Request a Demo
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 bg-transparent"
                  >
                    Speak to Our Team
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - Demo Section */}
            <div className="lg:pl-8">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Choose Your Learning Path</h3>

                  {/* Pathway Selector Tabs */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Button
                      variant={activePathway === "all" ? "default" : "outline"}
                      onClick={() => setActivePathway("all")}
                      className={`text-xs ${activePathway === "all" ? "bg-purple-600 hover:bg-purple-700" : "bg-white hover:bg-gray-50"}`}
                    >
                      All Pathways
                    </Button>
                    <Button
                      variant={activePathway === "sales" ? "default" : "outline"}
                      onClick={() => setActivePathway("sales")}
                      className={`text-xs ${activePathway === "sales" ? "bg-purple-600 hover:bg-purple-700" : "bg-white hover:bg-gray-50"}`}
                    >
                      Sales
                    </Button>
                    <Button
                      variant={activePathway === "presentation" ? "default" : "outline"}
                      onClick={() => setActivePathway("presentation")}
                      className={`text-xs ${activePathway === "presentation" ? "bg-purple-600 hover:bg-purple-700" : "bg-white hover:bg-gray-50"}`}
                    >
                      Presentation
                    </Button>
                    <Button
                      variant={activePathway === "headoffice" ? "default" : "outline"}
                      onClick={() => setActivePathway("headoffice")}
                      className={`text-xs ${activePathway === "headoffice" ? "bg-purple-600 hover:bg-purple-700" : "bg-white hover:bg-gray-50"}`}
                    >
                      Head Office
                    </Button>
                    <Button
                      variant={activePathway === "operations" ? "default" : "outline"}
                      onClick={() => setActivePathway("operations")}
                      className={`text-xs ${activePathway === "operations" ? "bg-purple-600 hover:bg-purple-700" : "bg-white hover:bg-gray-50"}`}
                    >
                      Operations
                    </Button>
                  </div>

                  {/* Pathway Content */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-center">{getPathwayTitle(activePathway)}</h4>
                    <div className="space-y-2">
                      {pathwayOptions[activePathway as keyof typeof pathwayOptions].map((item, index) => {
                        const IconComponent = item.icon
                        return (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <IconComponent className="w-4 h-4 text-purple-600 mr-3" />
                              <span className="text-sm font-medium text-gray-900">{item.title}</span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                            <span className="text-xs text-gray-600">{item.pathway}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Preview Section */}

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">
              Proven retail success, powered by global expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Industry-certified training</h3>
                <p className="text-sm text-gray-600">recognized by leading retailers</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Comprehensive pathways</h3>
                <p className="text-sm text-gray-600">sales to head office</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Hybrid learning</h3>
                <p className="text-sm text-gray-600">self-paced, live cohorts, in-person workshops</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Mobile-first & accessible</h3>
                <p className="text-sm text-gray-600">anywhere</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-2xl lg:text-3xl font-bold text-balance">
              From Lagos to London: global standards, local relevance
            </h2>
          </div>
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="py-12 bg-purple-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl font-bold mb-2">6</div>
              <div className="text-purple-100">Training Programs</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-purple-100">Training Modules</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-purple-100">Mobile Optimized</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">85%</div>
              <div className="text-purple-100">Completion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Ready to Transform Your Retail Team?</h2>
            <p className="text-xl text-purple-100 mb-8 text-pretty">
              See how FORJE can help your Nigerian retail business build a world-class team. Book a personalized demo
              with our training experts.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white/10 border-white/20 text-background">
                <CardContent className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-4 text-background">What You'll Get:</h3>
                  <ul className="space-y-2 text-background">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Personalized platform walkthrough</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Custom training recommendations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>ROI analysis for your business</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Implementation roadmap</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-background">
                <CardContent className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-4 text-background">Perfect For:</h3>
                  <ul className="space-y-2 text-background">
                    <li className="flex items-center">
                      <ArrowRight className="w-5 h-5 text-purple-300 mr-3 flex-shrink-0" />
                      <span>Retail chains & franchises</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="w-5 h-5 text-purple-300 mr-3 flex-shrink-0" />
                      <span>Independent retailers</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="w-5 h-5 text-purple-300 mr-3 flex-shrink-0" />
                      <span>E-commerce businesses</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="w-5 h-5 text-purple-300 mr-3 flex-shrink-0" />
                      <span>Training organizations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
                Request a Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-3 bg-transparent"
              >
                Call +234 810 994 2191
              </Button>
            </div>

            <p className="text-sm text-purple-200 mt-6">
              30-minute demo • No commitment required • Available in English only
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-xl font-bold">FORJE</div>
                <div className="w-0 h-0 border-l-[10px] border-l-purple-400 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" />
              </div>
              <p className="text-gray-400 text-sm">
                Empowering Nigerian retailers with professional training that drives real results.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Training Programs</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Buying & Merchandising</li>
                <li>Store Operations</li>
                <li>Visual Merchandising</li>
                <li>Team Leadership</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Help Center</li>
                <li>Contact Support</li>
                <li>Training Resources</li>
                <li>API Documentation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+234 xxx xxx xxxx</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>hello@forje.ng</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 FORJE. All rights reserved. Built for Nigerian Retail Excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
