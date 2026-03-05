'use client';

import React, { useState, useEffect } from 'react';
import { X, Phone, Mail, Calendar, Clock, User, Home, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_DETAILS } from '@/lib/constants';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mobile focus and scroll management
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll on mobile
      document.body.style.overflow = 'hidden';

      // Focus the modal container for accessibility
      const modalElement = document.querySelector('[role="dialog"]');
      if (modalElement) {
        (modalElement as HTMLElement).focus();
      }
    } else {
      // Restore body scroll
      document.body.style.overflow = '';
    }

    // Cleanup
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const services = [
    'Emergency Plumbing Repairs',
    'Drain Cleaning & Unclogging',
    'Water Heater Installation & Repair',
    'Toilet, Faucet & Fixture Repair',
    'Pipe Installation & Repiping',
    'Bathroom & Kitchen Plumbing',
  ];

  const timeSlots = [
    '8:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 2:00 PM',
    '2:00 PM - 4:00 PM',
    '4:00 PM - 6:00 PM',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        service: '',
        message: '',
        preferredDate: '',
        preferredTime: '',
      });
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[999999] md:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[999999] hidden md:block"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[999999] md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl md:max-h-[90vh] bg-white md:rounded-2xl shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
          >
            {/* Header */}
            <div className="bg-navy text-white p-4 md:p-6 flex justify-between items-center">
              <div>
                <h2 id="booking-modal-title" className="text-xl md:text-2xl font-display font-bold">Book Your Service</h2>
                <p className="text-gray-300 text-sm mt-1">Get a free quote from DYZ Plumbing</p>
              </div>
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white transition-colors p-2"
              >
                <X size={24} className="md:w-6 md:h-6" />
              </button>
            </div>

            {/* Form */}
            <div className="p-4 md:p-6 overflow-y-auto md:max-h-[calc(90vh-120px)]">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-display font-bold text-navy mb-4 flex items-center gap-2">
                    <User size={20} />
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-all"
                        placeholder="+1 832-877-9600"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Service Information */}
                <div>
                  <h3 className="text-lg font-display font-bold text-navy mb-4 flex items-center gap-2">
                    <Home size={20} />
                    Service Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Service Type *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-all"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Service Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-all"
                        placeholder="123 Main St, Houston, TX"
                      />
                    </div>
                  </div>
                </div>

                {/* Scheduling */}
                <div>
                  <h3 className="text-lg font-display font-bold text-navy mb-4 flex items-center gap-2">
                    <Calendar size={20} />
                    Preferred Schedule
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Preferred Time
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-all"
                      >
                        <option value="">Select time slot</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="text-lg font-display font-bold text-navy mb-4 flex items-center gap-2">
                    <MessageSquare size={20} />
                    Additional Information
                  </h3>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange transition-all resize-none"
                    placeholder="Please describe your plumbing issue or any special requirements..."
                  />
                </div>

                {/* Emergency Option */}
                <div className="bg-orange/10 border border-orange/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Phone className="text-orange flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-bold text-navy">Emergency Service Available</p>
                      <p className="text-sm text-slate-600 mt-1">
                        For urgent plumbing emergencies, call us directly at{' '}
                        <a href={`tel:${BUSINESS_DETAILS.phone}`} className="text-orange font-bold">
                          {BUSINESS_DETAILS.phone}
                        </a>
                        {' '}for immediate assistance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col md:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-orange text-white px-6 py-4 rounded-xl font-bold hover:bg-orange/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Book Service Request'}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 md:flex-none bg-slate-100 text-slate-700 px-6 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
