import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Award, CheckCircle } from "lucide-react";

interface TrustItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TrustItem = (
  { icon, title, description }: TrustItemProps = {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Trust Item",
    description: "Description of why customers should trust us.",
  },
) => {
  return (
    <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <CardContent className="flex flex-col items-center text-center p-6">
        <div className="mb-4 p-3 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const TrustSection = () => {
  const trustItems = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Certified Professionals",
      description:
        "Our technicians are fully certified and trained to handle all HVAC systems.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Emergency Service",
      description:
        "We're available around the clock for any HVAC emergency you may have.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Guarantee",
      description:
        "We stand behind our work with a 100% satisfaction guarantee on all services.",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Customer Satisfaction",
      description:
        "Our priority is your comfort and satisfaction with every service we provide.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At Quantum HVAC System Inc., we pride ourselves on delivering
            exceptional service and value to every customer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <TrustItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
