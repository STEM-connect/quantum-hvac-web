import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Thermometer,
  Wind,
  Fan,
  Wrench,
  Settings,
  RefreshCw,
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({
  title,
  description,
  icon = <Thermometer />,
}: ServiceCardProps) => {
  return (
    <Card className="bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-none overflow-hidden">
      <CardHeader className="flex flex-col items-center text-center pb-2">
        <div className="p-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-4 shadow-md">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold text-gray-800">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      title: "Heating",
      description:
        "Expert installation and maintenance of furnaces, boilers, and heat pumps to keep your home warm and comfortable.",
      icon: <Thermometer size={24} />,
    },
    {
      title: "Air Conditioning",
      description:
        "Professional cooling solutions including installation, repair, and maintenance of all AC systems.",
      icon: <Wind size={24} />,
    },
    {
      title: "Ventilation",
      description:
        "Improve indoor air quality with our comprehensive ventilation services and solutions.",
      icon: <Fan size={24} />,
    },
    {
      title: "Installation",
      description:
        "Professional installation of new HVAC systems with expert guidance on the best options for your space.",
      icon: <Wrench size={24} />,
    },
    {
      title: "Maintenance",
      description:
        "Regular maintenance programs to ensure your HVAC systems operate efficiently and reliably year-round.",
      icon: <Settings size={24} />,
    },
    {
      title: "Repair",
      description:
        "Fast, reliable repair services for all HVAC systems with 24/7 emergency availability.",
      icon: <RefreshCw size={24} />,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive HVAC solutions tailored to your comfort needs,
            delivered by certified professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
