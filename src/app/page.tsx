"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, MenuIcon, X, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const plans = [
    {
      name: "Free Plan",
      description: "Perfect for getting started",
      price: "$0",
      features: [
        "Boost engagement with target responses",
        "Automate comment replies to enhance audience interaction",
        "Turn followers into customers with targeted messaging",
        "Access basic analytics to track performance",
        "Schedule up to 5 posts per month for consistent engagement",
      ],
      cta: "Get Started",
      popular: false,
      gradient: "from-purple-500 via-pink-500 to-orange-500",
    },
    {
      name: "Smart AI Plan",
      description: "Advanced features for power users",
      price: "$99",
      features: [
        "All features from Free Plan",
        "AI-powered response generation",
        "Advanced analytics and insights",
        "Priority customer support",
        "Custom branding options",
      ],
      cta: "Upgrade Now",
      popular: true,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
    },
  ];

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-cyan-500/10 to-purple-500/10 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)]" />
      </div>

      {/* Noise texture overlay */}
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-20" />

      {/* Floating elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${0.5 + Math.random()})`,
            }}
          >
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-sm" />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav
          className={`fixed top-0 w-full z-50 transition-all duration-500 ${
            isScrolled
              ? "bg-black/50 backdrop-blur-xl border-b border-white/10"
              : ""
          }`}
        >
          <div className="container px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full blur group-hover:blur-md transition-all duration-300" />
                  <div className="relative h-10 w-10 rounded-full bg-black flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 3L20 7V17L12 21L4 17V7L12 3Z"
                        stroke="url(#logo-gradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 8L16 10V14L12 16L8 14V10L12 8Z"
                        stroke="url(#logo-gradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="logo-gradient"
                          x1="4"
                          y1="3"
                          x2="20"
                          y2="21"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#818CF8" />
                          <stop offset="1" stopColor="#C4B5FD" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Prism
                </span>
              </div>

              <nav className="hidden md:flex space-x-8 text-sm">
                {["Features", "Pricing", "About"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="relative text-white/70 hover:text-white transition-colors group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-4">
                <Button className="relative group overflow-hidden bg-white/10 hover:bg-white/20 text-white border-0">
                  <span className="relative z-10">Login</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Button>
                <Button
                  className="md:hidden text-white"
                  variant="ghost"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X /> : <MenuIcon />}
                </Button>
              </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10">
                <div className="container py-4 flex flex-col space-y-4">
                  {["Features", "Pricing", "About"].map((item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          <div className="container px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="relative inline-block">
                <Sparkles className="absolute -top-8 -left-8 h-6 w-6 text-yellow-500 animate-pulse" />
                <h1 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="text-white">Transform Your </span>
                  <span className="relative">
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-50" />
                    <span className="relative bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Instagram
                    </span>
                  </span>
                  <span className="text-white"> Presence</span>
                </h1>
              </div>

              <p className="mt-6 text-lg text-white/70">
                Prism revolutionizes how you connect with your audience on
                Instagram. Automate responses and boost engagement effortlessly.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="relative group overflow-hidden">
                  <span className="relative z-10 font-semibold">
                    Get Started
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-110 transition-transform duration-300" />
                </Button>
                <Button
                  size="lg"
                  className="relative group overflow-hidden bg-transparent border border-indigo-500/50"
                >
                  <span className="relative z-10 text-white group-hover:text-white transition-colors">
                    Learn More
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-violet-600/20" />
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                </Button>
              </div>
            </div>

            <div className="relative mt-20">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20" />
              <div className="relative h-40 md:h-96 w-full rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 group-hover:opacity-75 transition-opacity duration-500" />
                <Image
                  src="/Ig-creators.png"
                  alt="Community member"
                  fill
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 relative">
          <div className="container px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
                Choose Your Plan
              </h2>
              <p className="max-w-[900px] text-white/70">
                Select the perfect plan to boost your Instagram engagement
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 md:gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
                  />
                  <Card
                    className={`relative h-full backdrop-blur-xl border-white/10 ${
                      activeCard === index ? "bg-white/10" : "bg-black/50"
                    } hover:transform hover:-translate-y-1 transition-all duration-300`}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-white">
                            {plan.name}
                          </CardTitle>
                          <CardDescription className="text-white/70">
                            {plan.description}
                          </CardDescription>
                        </div>
                        {plan.popular && (
                          <span className="px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div className="text-4xl font-bold text-white">
                        {plan.price}
                        <span className="text-lg font-normal text-white/70">
                          /month
                        </span>
                      </div>
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center group/item">
                            <CheckCircle className="mr-2 h-4 w-4 text-blue-400 group-hover/item:text-blue-300 transition-colors" />
                            <span className="text-sm text-white/70 group-hover/item:text-white transition-colors">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full relative group/btn overflow-hidden bg-white/10 hover:bg-white/20 border-0">
                        <span className="relative z-10">{plan.cta}</span>
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300`}
                        />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
