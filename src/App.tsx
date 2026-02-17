import { motion } from 'framer-motion';
import {
  ChefHat,
  Calendar,
  CreditCard,
  Truck,
  MessageSquare,
  FileText,
  Users,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  Zap,
  Shield,
} from 'lucide-react';
import { useState } from 'react';
import { CreateTenantDialog } from './components/CreateTenantDialog';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Navbar Component
function Navbar({ onRegister }: { onRegister: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <ChefHat className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold text-slate-900">
              Fun Adventure Kitchen
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-slate-600 hover:text-indigo-600 transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-slate-600 hover:text-indigo-600 transition-colors font-medium"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-slate-600 hover:text-indigo-600 transition-colors font-medium"
            >
              Testimonials
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://kitchenapp.funadventure.ae"
              className="text-slate-600 hover:text-indigo-600 transition-colors font-medium"
            >
              Login
            </a>
            <button
              onClick={onRegister}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
            >
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-slate-600" />
            ) : (
              <Menu className="w-6 h-6 text-slate-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 px-4 py-4"
        >
          <div className="flex flex-col gap-4">
            <a href="#features" className="text-slate-600 font-medium py-2">
              Features
            </a>
            <a href="#pricing" className="text-slate-600 font-medium py-2">
              Pricing
            </a>
            <a href="#testimonials" className="text-slate-600 font-medium py-2">
              Testimonials
            </a>
            <a
              href="https://kitchenapp.funadventure.ae"
              className="text-slate-600 font-medium py-2"
            >
              Login
            </a>
            <button
              onClick={onRegister}
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold text-center"
            >
              Start Free Trial
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

// Hero Section
function HeroSection({ onRegister }: { onRegister: () => void }) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Trusted by 100+ kitchens in UAE
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
            >
              Automate Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                Tiffin & Meal Prep
              </span>{' '}
              Business.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Stop managing orders on WhatsApp. Get a dedicated Customer App,
              Auto-Invoicing, and Smart Menu Planning in minutes.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={onRegister}
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105"
              >
                Get Started for Free
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-indigo-300 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                See How It Works
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-1 shadow-2xl shadow-indigo-500/30">
              <div className="bg-slate-900 rounded-xl overflow-hidden">
                {/* Mock Browser Header */}
                <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-slate-700 rounded-md px-3 py-1.5 text-xs text-slate-400 text-center">
                      kitchenapp.funadventure.ae/dashboard
                    </div>
                  </div>
                </div>

                {/* Dashboard Preview */}
                <div className="p-6 bg-gradient-to-br from-slate-100 to-slate-50 min-h-[300px] sm:min-h-[400px]">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-xs text-slate-500 mb-1">Today's Orders</div>
                      <div className="text-2xl font-bold text-slate-900">247</div>
                      <div className="text-xs text-green-600">+12% from yesterday</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-xs text-slate-500 mb-1">Revenue</div>
                      <div className="text-2xl font-bold text-slate-900">AED 8,450</div>
                      <div className="text-xs text-green-600">+8% this week</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm font-semibold text-slate-900 mb-3">Today's Menu</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600">Veg Thali</span>
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">142 orders</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600">Non-Veg Thali</span>
                        <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded">89 orders</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600">Diet Meal</span>
                        <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded">16 orders</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-slate-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Auto-Invoice Sent</div>
                  <div className="text-xs text-slate-500">Just now</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Pain Points Section
function PainPointsSection() {
  const painPoints = [
    {
      icon: MessageSquare,
      title: 'Chaos on WhatsApp',
      description:
        'Orders getting lost in endless chat threads. No way to track who ordered what, when, and for how long.',
      color: 'red',
    },
    {
      icon: CreditCard,
      title: 'Manual Billing Nightmares',
      description:
        'Spending hours creating invoices in Excel. Constantly chasing customers for overdue payments.',
      color: 'orange',
    },
    {
      icon: ChefHat,
      title: 'Kitchen Confusion',
      description:
        'Never knowing exactly how much to cook each day. Food waste from overproduction or unhappy customers from running out.',
      color: 'yellow',
    },
  ];

  const colorClasses: Record<string, string> = {
    red: 'bg-red-100 text-red-600',
    orange: 'bg-orange-100 text-orange-600',
    yellow: 'bg-amber-100 text-amber-600',
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
          >
            Sound Familiar?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            If you're running a tiffin service or cloud kitchen, you've probably
            faced these problems every single day.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all group"
            >
              <div
                className={`w-14 h-14 rounded-xl ${colorClasses[point.color]} flex items-center justify-center mb-6`}
              >
                <point.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {point.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: Calendar,
      title: 'Daily Rotating Menus',
      description:
        'Plan veg/non-veg menus for the whole month. Customers see the right menu for each day automatically.',
      badge: null,
    },
    {
      icon: Users,
      title: 'Subscription Management',
      description:
        'Handle pause, skip, and renewals automatically. Customers can manage their own subscriptions through the app.',
      badge: null,
    },
    {
      icon: FileText,
      title: 'Automated Invoicing',
      description:
        'Generate professional PDF invoices instantly. Track payments and send automated reminders.',
      badge: null,
    },
    {
      icon: Truck,
      title: 'Driver Routing',
      description:
        'Assign deliveries to drivers efficiently. Optimize routes to save time and fuel costs.',
      badge: 'Coming Soon',
    },
  ];

  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 via-indigo-800 to-violet-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-white/10 text-indigo-200 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Zap className="w-4 h-4" />
            Powerful Features
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Everything You Need to Run Your Kitchen
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-indigo-200 max-w-2xl mx-auto"
          >
            From menu planning to payment collection, we've got every aspect of
            your meal prep business covered.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/15 transition-all group"
            >
              {feature.badge && (
                <div className="absolute -top-3 right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                  {feature.badge}
                </div>
              )}
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-indigo-200 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Social Proof Banner
function SocialProofSection() {
  return (
    <section
      id="testimonials"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-violet-600"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Shield className="w-6 h-6 text-indigo-200" />
          <span className="text-indigo-200 font-medium">Trusted Platform</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Trusted by Kitchens in Sharjah and Dubai
        </h3>
        <p className="text-indigo-100 text-lg">
          Join growing meal prep businesses that have automated their operations
          and scaled effortlessly.
        </p>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-8 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">100+</div>
            <div className="text-indigo-200 text-sm">Active Kitchens</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">50,000+</div>
            <div className="text-indigo-200 text-sm">Meals Managed Daily</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">99.9%</div>
            <div className="text-indigo-200 text-sm">Uptime</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Pricing Section
function PricingSection({ onRegister }: { onRegister: () => void }) {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: '',
      description: 'Perfect for getting started with a small customer base.',
      features: [
        'Up to 50 customers',
        'Manual payment tracking',
        'Basic menu management',
        'Email support',
        '15-day free trial',
      ],
      cta: 'Start Free',
      popular: false,
    },
    {
      name: 'Pro',
      price: 'AED 499',
      period: '/mo',
      description: 'For established kitchens ready to scale their operations.',
      features: [
        'Unlimited customers',
        'WhatsApp automation',
        'Dedicated Customer App',
        'Automated invoicing',
        'Priority support',
        'Advanced analytics',
      ],
      cta: 'Get Started',
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Start free and upgrade as you grow. No hidden fees, no surprises.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`relative p-8 rounded-2xl ${plan.popular
                  ? 'bg-gradient-to-br from-indigo-600 to-violet-700 text-white shadow-2xl shadow-indigo-500/30 scale-105'
                  : 'bg-white border border-slate-200'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 text-sm font-bold px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-slate-900'}`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={plan.popular ? 'text-indigo-200' : 'text-slate-500'}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
                <p
                  className={`mt-2 text-sm ${plan.popular ? 'text-indigo-200' : 'text-slate-600'}`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-indigo-200' : 'text-indigo-600'}`}
                    />
                    <span
                      className={`text-sm ${plan.popular ? 'text-white' : 'text-slate-700'}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onRegister}
                className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all ${plan.popular
                    ? 'bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/25'
                  }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <ChefHat className="w-6 h-6 text-indigo-400" />
            <span className="text-lg font-bold text-white">
              Fun Adventure Kitchen
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a
              href="mailto:support@funadventure.ae"
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-sm">
            &copy; 2026 Fun Adventure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
export default function App() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const openRegistration = () => setIsRegistrationOpen(true);

  return (
    <main className="min-h-screen bg-white scroll-smooth">
      <Navbar onRegister={openRegistration} />
      <HeroSection onRegister={openRegistration} />
      <PainPointsSection />
      <FeaturesSection />
      <SocialProofSection />
      <PricingSection onRegister={openRegistration} />
      <Footer />

      <CreateTenantDialog
        open={isRegistrationOpen}
        onOpenChange={setIsRegistrationOpen}
      />
    </main>
  );
}
