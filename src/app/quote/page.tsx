"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Factory,
  Snowflake,
  Wrench,
  Home,
  Building2,
  MapPin,
  Calendar,
  DollarSign,
  Upload,
  Phone,
  Mail,
  User,
  Clock,
  FileText,
} from "lucide-react";

// Form validation schema
const quoteSchema = z.object({
  // Step 1
  serviceType: z.string().min(1, "Please select a service type"),

  // Step 2
  serviceDetails: z.array(z.string()).min(1, "Please select at least one service"),

  // Step 3
  propertyType: z.string().min(1, "Please select a property type"),
  propertySize: z.string().optional(),
  location: z.string().min(1, "Location is required"),
  currentEquipment: z.string().optional(),

  // Step 4
  timeline: z.string().min(1, "Please select a timeline"),
  budgetRange: z.string().optional(),
  additionalNotes: z.string().optional(),
  photos: z.any().optional(),

  // Step 5
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  preferredContact: z.string().min(1, "Please select a contact method"),
  bestTimeToContact: z.string().min(1, "Please select a time"),

  // Step 6
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "You must accept the privacy policy",
  }),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const serviceTypes = [
  {
    id: "industrial-commercial",
    title: "Industrial & Commercial HVAC",
    description: "Large-scale heating, cooling, and ventilation systems for commercial properties",
    icon: Factory,
  },
  {
    id: "refrigeration",
    title: "Refrigeration",
    description: "Commercial refrigeration systems for restaurants, warehouses, and retail",
    icon: Snowflake,
  },
  {
    id: "sheet-metal",
    title: "Sheet Metal Fabrication",
    description: "Custom ductwork and metal fabrication services",
    icon: Wrench,
  },
  {
    id: "residential",
    title: "Residential HVAC",
    description: "Home heating, cooling, and air quality solutions",
    icon: Home,
  },
];

const serviceDetailsByType: Record<string, string[]> = {
  "industrial-commercial": [
    "Installation",
    "Repair",
    "Maintenance",
    "Emergency Service",
    "System Design",
    "Energy Audit",
    "Controls & Automation",
    "Retrofit & Upgrades",
  ],
  refrigeration: [
    "Installation",
    "Repair",
    "Maintenance",
    "Emergency Service",
    "Walk-in Coolers",
    "Display Cases",
    "Ice Machines",
    "Temperature Monitoring",
  ],
  "sheet-metal": [
    "Custom Ductwork",
    "Duct Repair",
    "Fabrication",
    "Installation",
    "Ventilation Systems",
    "Exhaust Systems",
    "Metal Panels",
    "Custom Projects",
  ],
  residential: [
    "Installation",
    "Repair",
    "Maintenance",
    "Emergency Service",
    "Air Quality Testing",
    "Duct Cleaning",
    "Thermostat Installation",
    "System Replacement",
  ],
};

const propertyTypes = [
  "Commercial Building",
  "Industrial Facility",
  "Restaurant",
  "Retail Store",
  "Office Building",
  "Warehouse",
  "Residential Home",
  "Multi-Unit Residential",
  "Other",
];

const timelines = [
  "Urgent (Within 1 week)",
  "Within 1 month",
  "Within 3 months",
  "Planning ahead (3+ months)",
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000 - $100,000",
  "Over $100,000",
  "Prefer not to say",
];

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    trigger,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      serviceDetails: [],
      privacyPolicy: false,
    },
    mode: "onChange",
  });

  const watchServiceType = watch("serviceType");
  const watchServiceDetails = watch("serviceDetails");

  // Load saved progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem("quoteFormProgress");
    if (savedProgress) {
      const data = JSON.parse(savedProgress);
      Object.keys(data).forEach((key) => {
        setValue(key as keyof QuoteFormData, data[key]);
      });
      setSelectedServiceType(data.serviceType || "");
    }
  }, [setValue]);

  // Save progress to localStorage
  useEffect(() => {
    const subscription = watch((value) => {
      localStorage.setItem("quoteFormProgress", JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const totalSteps = 6;

  const validateStep = async (step: number) => {
    let fieldsToValidate: (keyof QuoteFormData)[] = [];

    switch (step) {
      case 1:
        fieldsToValidate = ["serviceType"];
        break;
      case 2:
        fieldsToValidate = ["serviceDetails"];
        break;
      case 3:
        fieldsToValidate = ["propertyType", "location"];
        break;
      case 4:
        fieldsToValidate = ["timeline"];
        break;
      case 5:
        fieldsToValidate = ["firstName", "lastName", "email", "phone", "preferredContact", "bestTimeToContact"];
        break;
      case 6:
        fieldsToValidate = ["privacyPolicy"];
        break;
    }

    const result = await trigger(fieldsToValidate);
    return result;
  };

  const nextStep = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleServiceTypeSelect = (typeId: string) => {
    setSelectedServiceType(typeId);
    setValue("serviceType", typeId);
    setValue("serviceDetails", []); // Reset service details when changing type
  };

  const handleServiceDetailToggle = (service: string) => {
    const current = watchServiceDetails || [];
    const updated = current.includes(service)
      ? current.filter((s) => s !== service)
      : [...current, service];
    setValue("serviceDetails", updated);
  };

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        localStorage.removeItem("quoteFormProgress");
      } else {
        alert("Failed to send quote request. Please try again.");
      }
    } catch (error) {
      alert("Failed to send quote request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <main>
          <HeroSection
            title="Quote Request Sent!"
            subtitle="Thank you for your interest. We'll get back to you within 24 hours."
            backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1400&q=90"
            ctaText="Back to Home"
          />
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quote Request Received!
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We've received your detailed quote request and will contact you within 24
                hours with a customized estimate.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  What Happens Next?
                </h3>
                <ul className="text-left text-blue-800 space-y-2">
                  <li>1. Our team reviews your request within 2 hours</li>
                  <li>2. We prepare a detailed quote based on your needs</li>
                  <li>3. You'll receive your quote via email within 24 hours</li>
                  <li>4. One of our specialists will follow up to discuss details</li>
                </ul>
              </div>
              <p className="text-gray-600">
                Need immediate assistance? Call us at{" "}
                <span className="text-blue-600 font-medium">(647) 704-1780</span>
              </p>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection
          title="Request a Quote"
          subtitle="Get a free, detailed quote for your HVAC needs in 6 easy steps"
          backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1400&q=90"
          ctaText="Contact Us"
        />

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            {/* Progress Indicator */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-700">
                  Step {currentStep} of {totalSteps}
                </span>
                <span className="text-sm text-gray-500">
                  Estimated Response Time: 24 hours
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Service Type</span>
                <span>Details</span>
                <span>Property</span>
                <span>Project</span>
                <span>Contact</span>
                <span>Review</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Step 1: Service Type */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Select Your Service Type
                      </h2>
                      <p className="text-gray-600">
                        Choose the service category that best fits your needs
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {serviceTypes.map((service) => {
                        const Icon = service.icon;
                        return (
                          <div
                            key={service.id}
                            onClick={() => handleServiceTypeSelect(service.id)}
                            className={`cursor-pointer border-2 rounded-lg p-6 transition-all hover:shadow-lg ${
                              selectedServiceType === service.id
                                ? "border-blue-600 bg-blue-50"
                                : "border-gray-200 hover:border-blue-300"
                            }`}
                          >
                            <Icon
                              className={`h-12 w-12 mb-4 ${
                                selectedServiceType === service.id
                                  ? "text-blue-600"
                                  : "text-gray-400"
                              }`}
                            />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                              {service.title}
                            </h3>
                            <p className="text-gray-600">{service.description}</p>
                            {selectedServiceType === service.id && (
                              <CheckCircle className="h-6 w-6 text-blue-600 mt-4" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                    {errors.serviceType && (
                      <p className="text-red-600 text-sm">{errors.serviceType.message}</p>
                    )}
                  </div>
                )}

                {/* Step 2: Service Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Select Services Needed
                      </h2>
                      <p className="text-gray-600">
                        Choose all services that apply to your project
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {serviceDetailsByType[watchServiceType]?.map((service) => (
                        <label
                          key={service}
                          className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all hover:bg-gray-50 ${
                            watchServiceDetails?.includes(service)
                              ? "border-blue-600 bg-blue-50"
                              : "border-gray-200"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={watchServiceDetails?.includes(service)}
                            onChange={() => handleServiceDetailToggle(service)}
                            className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-gray-900 font-medium">{service}</span>
                        </label>
                      ))}
                    </div>
                    {errors.serviceDetails && (
                      <p className="text-red-600 text-sm">{errors.serviceDetails.message}</p>
                    )}
                  </div>
                )}

                {/* Step 3: Property Information */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Property Information
                      </h2>
                      <p className="text-gray-600">
                        Tell us about your property
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register("propertyType")}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                      >
                        <option value="">Select property type</option>
                        {propertyTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.propertyType && (
                        <p className="text-red-600 text-sm mt-1">{errors.propertyType.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property Size (sq ft)
                      </label>
                      <input
                        type="text"
                        {...register("propertySize")}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                        placeholder="e.g., 5000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location (Address or Postal Code) <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          {...register("location")}
                          className="w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                          placeholder="Toronto, ON or M5V 2K7"
                        />
                      </div>
                      {errors.location && (
                        <p className="text-red-600 text-sm mt-1">{errors.location.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Equipment (if applicable)
                      </label>
                      <textarea
                        {...register("currentEquipment")}
                        rows={3}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                        placeholder="Describe your current HVAC equipment..."
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Project Details */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Project Details
                      </h2>
                      <p className="text-gray-600">
                        Help us understand your project timeline and scope
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Timeline <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register("timeline")}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>
                            {timeline}
                          </option>
                        ))}
                      </select>
                      {errors.timeline && (
                        <p className="text-red-600 text-sm mt-1">{errors.timeline.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range (Optional)
                      </label>
                      <select
                        {...register("budgetRange")}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        {...register("additionalNotes")}
                        rows={4}
                        maxLength={500}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                        placeholder="Any additional information about your project..."
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        {watch("additionalNotes")?.length || 0}/500 characters
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Photos (Optional)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600 mb-1">
                          Drag and drop files here, or click to select
                        </p>
                        <p className="text-sm text-gray-500">
                          Max file size: 5MB per file
                        </p>
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          {...register("photos")}
                          className="hidden"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 5: Contact Information */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Contact Information
                      </h2>
                      <p className="text-gray-600">
                        How should we reach you?
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            {...register("firstName")}
                            className="w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                            placeholder="John"
                          />
                        </div>
                        {errors.firstName && (
                          <p className="text-red-600 text-sm mt-1">{errors.firstName.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            {...register("lastName")}
                            className="w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                            placeholder="Doe"
                          />
                        </div>
                        {errors.lastName && (
                          <p className="text-red-600 text-sm mt-1">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                          <input
                            type="email"
                            {...register("email")}
                            className="w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                            placeholder="john@example.com"
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                          <input
                            type="tel"
                            {...register("phone")}
                            className="w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                            placeholder="(647) 123-4567"
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Contact Method <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        {["Email", "Phone", "Text"].map((method) => (
                          <label
                            key={method}
                            className="flex items-center justify-center space-x-2 p-4 border-2 rounded-lg cursor-pointer transition-all hover:bg-gray-50"
                          >
                            <input
                              type="radio"
                              value={method}
                              {...register("preferredContact")}
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-gray-900">{method}</span>
                          </label>
                        ))}
                      </div>
                      {errors.preferredContact && (
                        <p className="text-red-600 text-sm mt-1">{errors.preferredContact.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Best Time to Contact <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register("bestTimeToContact")}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-50 py-3 px-4"
                      >
                        <option value="">Select time</option>
                        <option value="Morning (8AM-12PM)">Morning (8AM-12PM)</option>
                        <option value="Afternoon (12PM-5PM)">Afternoon (12PM-5PM)</option>
                        <option value="Evening (5PM-8PM)">Evening (5PM-8PM)</option>
                        <option value="Anytime">Anytime</option>
                      </select>
                      {errors.bestTimeToContact && (
                        <p className="text-red-600 text-sm mt-1">{errors.bestTimeToContact.message}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 6: Confirmation */}
                {currentStep === 6 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Review Your Request
                      </h2>
                      <p className="text-gray-600">
                        Please review your information before submitting
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                      <div className="border-b pb-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Service Information</h3>
                        <p className="text-gray-700">
                          <span className="font-medium">Type:</span>{" "}
                          {serviceTypes.find((s) => s.id === watch("serviceType"))?.title}
                        </p>
                        <p className="text-gray-700">
                          <span className="font-medium">Services:</span>{" "}
                          {watch("serviceDetails")?.join(", ")}
                        </p>
                      </div>

                      <div className="border-b pb-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Property Information</h3>
                        <p className="text-gray-700">
                          <span className="font-medium">Type:</span> {watch("propertyType")}
                        </p>
                        <p className="text-gray-700">
                          <span className="font-medium">Location:</span> {watch("location")}
                        </p>
                        {watch("propertySize") && (
                          <p className="text-gray-700">
                            <span className="font-medium">Size:</span> {watch("propertySize")} sq ft
                          </p>
                        )}
                      </div>

                      <div className="border-b pb-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Project Details</h3>
                        <p className="text-gray-700">
                          <span className="font-medium">Timeline:</span> {watch("timeline")}
                        </p>
                        {watch("budgetRange") && (
                          <p className="text-gray-700">
                            <span className="font-medium">Budget:</span> {watch("budgetRange")}
                          </p>
                        )}
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
                        <p className="text-gray-700">
                          <span className="font-medium">Name:</span> {watch("firstName")}{" "}
                          {watch("lastName")}
                        </p>
                        <p className="text-gray-700">
                          <span className="font-medium">Email:</span> {watch("email")}
                        </p>
                        <p className="text-gray-700">
                          <span className="font-medium">Phone:</span> {watch("phone")}
                        </p>
                        <p className="text-gray-700">
                          <span className="font-medium">Preferred Contact:</span>{" "}
                          {watch("preferredContact")}
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-blue-900">
                            Estimated Response Time
                          </h4>
                          <p className="text-blue-800">
                            We'll review your request and send you a detailed quote within 24
                            hours.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        {...register("privacyPolicy")}
                        className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500 mt-0.5"
                      />
                      <label className="text-sm text-gray-700">
                        I agree to the{" "}
                        <a href="/privacy" className="text-blue-600 hover:underline">
                          privacy policy
                        </a>{" "}
                        and understand that Quantum HVAC will contact me regarding this quote
                        request. <span className="text-red-500">*</span>
                      </label>
                    </div>
                    {errors.privacyPolicy && (
                      <p className="text-red-600 text-sm">{errors.privacyPolicy.message}</p>
                    )}
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      onClick={prevStep}
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ChevronLeft className="h-5 w-5" />
                      Previous
                    </Button>
                  )}
                  {currentStep < totalSteps ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="ml-auto flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                    >
                      Next
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="ml-auto flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-5 w-5" />
                          Submit Quote Request
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </div>

            {/* Help Section */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-2">Need help with this form?</p>
              <p className="text-gray-700">
                Call us at{" "}
                <a href="tel:6477041780" className="text-blue-600 font-medium hover:underline">
                  (647) 704-1780
                </a>{" "}
                and one of our specialists will assist you.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
