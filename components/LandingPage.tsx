'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, CheckCircle, Shield, Clock, Star, Users, Award, Mail, MapPin, Facebook, Instagram, Twitter, ArrowUp } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/lib/constants';
import { motion } from 'motion/react';
import Navbar from './Navbar';

const services = [
  {
    title: "Emergency Plumbing Repairs",
    description: "Burst pipes, leaks, and backups — we respond fast, 24/7.",
    icon: Clock
  },
  {
    title: "Drain Cleaning & Unclogging",
    description: "Slow drains or full blockages, we clear them completely.",
    icon: Shield
  },
  {
    title: "Water Heater Installation & Repair",
    description: "Tank and tankless systems installed right the first time.",
    icon: Award
  },
  {
    title: "Toilet, Faucet & Fixture Repair",
    description: "No job too small. We fix it so it stays fixed.",
    icon: CheckCircle
  },
  {
    title: "Pipe Installation & Repiping",
    description: "Old or damaged pipes replaced with lasting materials.",
    icon: Users
  },
  {
    title: "Bathroom & Kitchen Plumbing",
    description: "Renovations, upgrades, and new installations done cleanly.",
    icon: Star
  }
];

const whyChooseUs = [
  {
    title: "Same-Day Service Available",
    description: "We know plumbing emergencies can't wait. We prioritize urgent calls to get your home back to normal fast.",
    icon: Clock
  },
  {
    title: "Upfront Pricing",
    description: "Know the exact cost before we start. No hidden fees, no hourly surprises, just honest flat-rate pricing.",
    icon: Shield
  },
  {
    title: "Licensed & Insured",
    description: "Your property is protected. Our team is fully licensed and insured for your complete peace of mind.",
    icon: CheckCircle
  },
  {
    title: "5-Star Rated",
    description: "Reputation matters. We've built our business on thousands of happy customers and word-of-mouth referrals.",
    icon: Star
  },
  {
    title: "Family Owned & Operated",
    description: "We're your neighbors, not a corporate franchise. We care about Houston because we live here too.",
    icon: Users
  },
  {
    title: "24/7 Emergency Support",
    description: "Plumbing disasters don't follow a 9-to-5 schedule. We're ready to help whenever you need us.",
    icon: Phone
  }
];

const testimonials = [
  {
    quote: "Called at 9pm with a burst pipe — they were here in 40 minutes and had it fixed by midnight. Absolute lifesavers.",
    author: "Maria T.",
    location: "Katy TX"
  },
  {
    quote: "Fair pricing, no upsells, clean work. Finally a plumber I'll actually call again.",
    author: "James R.",
    location: "Sugar Land TX"
  },
  {
    quote: "They repiped our whole house in two days. Professional from start to finish.",
    author: "Sandra K.",
    location: "Houston TX"
  }
];

export default function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://plus.unsplash.com/premium_photo-1661963478928-2d2d3e9b1e25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Professional Plumbing Service"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent"></div>
        </div>

        {/* Navbar inside hero */}
        <div className="absolute top-0 left-0 right-0 z-[99999]">
          <Navbar />
        </div>

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 pt-30">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block py-1.5 px-4 rounded-lg bg-orange text-white font-bold md:text-xs text-[10px] uppercase tracking-widest mb-8 shadow-lg shadow-orange/20">
                Serving {BUSINESS_DETAILS.city} & Surrounding Areas
              </span>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] md:leading-[1.05] mb-6 md:mb-8 tracking-tight">
                Houston&apos;s Trusted Plumber — <span className="text-orange">Fast, Fair & Reliable</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-200 mb-8 md:mb-12 leading-relaxed max-w-2xl font-light">
                From leaky pipes to full installations, we show up on time and get it done right. Professional service you can count on.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
                <a
                  href={`tel:${BUSINESS_DETAILS.phone}`}
                  className="inline-flex items-center justify-center gap-3 bg-orange text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-lg md:text-xl hover:bg-orange/90 transition-all shadow-2xl shadow-orange/30 group"
                >
                  <Phone className="group-hover:animate-bounce" />
                  Call Now for a Free Quote
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-lg md:text-xl text-white border-2 border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-4">
              What We Fix & Install
            </h2>
            <div className="w-20 md:w-24 h-1.5 bg-orange mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mb-6 text-orange">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-display font-bold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange/10 rounded-full blur-2xl"></div>
                <div className="inline-flex items-center gap-2 text-orange font-bold uppercase tracking-widest text-xs md:text-sm mb-4">
                  <span className="w-8 h-px bg-orange"></span>
                  About DYZ Plumbing
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-4">
                  Local Plumbers You Can Actually <span className="text-orange">Trust</span>
                </h2>
                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-600 leading-relaxed">
                  <p>
                    We&apos;re not a call center or a franchise. We&apos;re a local Houston plumbing team that picks up the phone, shows up when we say we will, and charges honest prices.
                  </p>
                  <p>
                    Whether it&apos;s an emergency at midnight or a planned renovation, we treat your home like our own. Our reputation is built on quality workmanship and transparent communication.
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-200 relative">
                        <Image
                          src={`https://picsum.photos/seed/plumber${i}/100/100`}
                          alt="Team Member"
                          fill
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-navy">Trusted by 2,000+ Families</p>
                    <div className="flex text-orange">
                      {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl md:aspect-video w-full">
                <Image
                  src="https://images.unsplash.com/photo-1454988501794-2992f706932e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Plumbing Work"
                  width={500}
                  height={300}
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-34 h-34 md:w-64 md:h-64 bg-navy rounded-3xl -z-0"></div>
              <div className="md:absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange/5 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 bg-navy text-white relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange/5 -skew-x-12 transform translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange/10 rounded-full blur-[120px] -ml-32 -mb-32"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-orange font-bold uppercase tracking-widest text-sm mb-4">
                <span className="w-8 h-px bg-orange"></span>
                The DYZ Difference
              </div>
              <h2 className="text-3xl md:text-6xl font-display font-bold leading-tight">
                Why Houston Homeowners <span className="text-orange">Call DYZ First</span>
              </h2>
            </div>
            <p className="text-gray-400 text-base md:text-lg max-w-md lg:text-right">
              We combine old-school service values with modern plumbing technology to give you the best experience possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/5 border border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] hover:bg-white/10 hover:border-orange/30 transition-all duration-500"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-orange/10 rounded-xl md:rounded-2xl flex items-center justify-center text-orange mb-4 md:mb-6 group-hover:bg-orange group-hover:text-white transition-all duration-500">
                  <item.icon size={24} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold mb-2 md:mb-4 group-hover:text-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {item.description}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-8 h-8 border-r-2 border-b-2 border-orange/50 rounded-br-lg"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-orange font-bold uppercase tracking-widest text-sm mb-4">
                <div className="w-10 h-0.5 bg-orange"></div>
                Customer Success Stories
              </div>
              <h2 className="text-3xl md:text-6xl font-display font-bold text-navy leading-tight">
                Trusted by Houston Families
              </h2>
            </div>
            <div className="bg-slate-50 p-4 md:p-6 rounded-2xl border border-slate-100 flex items-center gap-4 md:gap-6 shadow-sm">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-display font-bold text-navy">4.9/5</p>
                <div className="flex text-orange">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={12} className="md:w-3.5 md:h-3.5" fill="currentColor" />)}
                </div>
              </div>
              <div className="h-8 md:h-10 w-px bg-slate-200"></div>
              <div>
                <p className="font-bold text-navy text-sm md:text-base">Google Reviews</p>
                <p className="text-xs md:text-sm text-slate-500">Based on 250+ reviews</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-slate-50 p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] hover:bg-navy hover:text-white transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="absolute top-6 md:top-8 right-6 md:right-10 text-orange opacity-20 group-hover:opacity-40 transition-opacity">
                  <svg width="32" height="26" className="md:w-[45px] md:h-[36px]" viewBox="0 0 45 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 0C6.045 0 0 6.045 0 13.5C0 20.955 6.045 27 13.5 27H18V36L27 27V13.5C27 6.045 20.955 0 13.5 0ZM40.5 0C33.045 0 27 6.045 27 13.5C27 20.955 33.045 27 40.5 27H45V36L54 27V13.5C54 6.045 47.955 0 40.5 0Z" />
                  </svg>
                </div>

                <div className="flex text-orange mb-6 md:mb-8 group-hover:text-orange transition-colors">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} className="md:w-[18px] md:h-[18px]" fill="currentColor" />)}
                </div>

                <p className="text-lg md:text-xl leading-relaxed mb-8 md:mb-10 font-light italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 md:gap-4 mt-auto">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-orange/10 flex items-center justify-center text-orange font-bold text-lg md:text-2xl group-hover:bg-white/10 group-hover:text-white transition-all">
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg group-hover:text-white transition-colors">{t.author}</p>
                    <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-slate-500 group-hover:text-gray-400 transition-colors">
                      <MapPin size={12} className="md:w-3.5 md:h-3.5" />
                      {t.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-orange rounded-[3rem] p-8 md:p-20 shadow-2xl shadow-orange/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="text-center lg:text-left max-w-2xl">
                <div className="inline-block py-1 px-4 rounded-full bg-white/20 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6">
                  Available 24/7 for Emergencies
                </div>
                <h2 className="text-3xl md:text-6xl font-display font-bold text-white mb-6 md:mb-8 leading-[1.1]">
                  Got a Plumbing Problem? Let&apos;s Fix It Today.
                </h2>
                <p className="text-lg md:text-2xl text-white/90 font-light leading-relaxed">
                  Don&apos;t wait for a small leak to become a big disaster. Our expert team is standing by to help you right now.
                </p>
              </div>
              <div className="flex flex-col gap-4 w-full lg:w-auto shrink-0">
                <a
                  href={`tel:${BUSINESS_DETAILS.phone}`}
                  className="bg-navy text-white px-8 md:px-12 py-4 md:py-6 rounded-2xl font-bold text-xl md:text-2xl hover:bg-navy/90 transition-all shadow-xl flex items-center justify-center gap-3 md:gap-4 whitespace-nowrap group"
                >
                  <Phone size={24} className="md:w-7 md:h-7 group-hover:rotate-12 transition-transform" />
                  {BUSINESS_DETAILS.phone}
                </a>
                <button
                  className="bg-white text-orange px-8 md:px-12 py-4 md:py-6 rounded-2xl font-bold text-xl md:text-2xl hover:bg-white/90 transition-all shadow-xl whitespace-nowrap"
                >
                  Get a Free Quote
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Footer Content */}
      <footer className="bg-navy pt-24 pb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand */}
            <div className="space-y-6">
              <a href="#" className="text-white font-display font-bold text-2xl tracking-tight">
                {BUSINESS_DETAILS.name.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? 'text-orange' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </a>
              <p className="text-gray-400 leading-relaxed">
                Houston&apos;s premier plumbing experts. Family owned, locally operated, and committed to 5-star service for every homeowner.
              </p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-orange hover:text-white transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="text-white font-display font-bold text-lg mb-6 uppercase tracking-wider">Our Services</h4>
              <ul className="space-y-4 text-gray-400">
                {services.slice(0, 5).map((s, i) => (
                  <li key={i}>
                    <a href="#services" className="hover:text-orange transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange/40"></span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h4 className="text-white font-display font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#about" className="hover:text-orange transition-colors">About Our Team</a></li>
                <li><a href="#why-us" className="hover:text-orange transition-colors">Why Choose Us</a></li>
                <li><a href="#testimonials" className="hover:text-orange transition-colors">Customer Reviews</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Emergency Service</a></li>
                <li><a href="#" className="hover:text-orange transition-colors">Service Areas</a></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="text-white font-display font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h4>
              <ul className="space-y-6 text-gray-400">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-orange shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Call Anytime</p>
                    <a href={`tel:${BUSINESS_DETAILS.phone}`} className="text-white font-bold hover:text-orange transition-colors">
                      {BUSINESS_DETAILS.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-orange shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Email Us</p>
                    <a href={`mailto:${BUSINESS_DETAILS.email}`} className="text-white font-bold hover:text-orange transition-colors">
                      {BUSINESS_DETAILS.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-orange shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Our Location</p>
                    <p className="text-white font-bold">{BUSINESS_DETAILS.address}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} {BUSINESS_DETAILS.name}. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="/privacy-policy" className="hover:text-orange transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-orange transition-colors">Terms of Service</a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-orange transition-colors flex items-center gap-2"
              >
                <ArrowUp size={16} />
                <span className='text-[8px] md:text-base'>(Back to Top)</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
