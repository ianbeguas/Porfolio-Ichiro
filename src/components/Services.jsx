import React from 'react';
import { FiCloud, FiCode, FiCreditCard, FiCpu, FiServer } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const services = [
    {
      icon: <FiCode />,
      title: "Full Stack Development",
      description: "Building complete web applications with Angular, React, Laravel, PHP, and MySQL - from responsive interfaces to robust backends.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <FiCloud />,
      title: "Cloud & DevOps",
      description: "Deploying and managing applications using AWS services like S3, EC2, CloudFront, and Route 53.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <FiCreditCard />,
      title: "Payment Gateway",
      description: "Integrating secure payment solutions including PayMaya, Stripe, PayPal, and local payment processors.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <FiServer />,
      title: "Web Hosting",
      description: "Server setup, domain configuration, SSL certificates, and deployment on VPS and cloud platforms.",
      gradient: "from-sky-500 to-blue-500"
    },
    {
      icon: <FiCpu />,
      title: "AI Integration",
      description: "Implementing AI-powered features using OpenAI, machine learning APIs, and intelligent automation.",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: <FiCode />,
      title: "API Development",
      description: "Creating RESTful APIs and integrating third-party services for comprehensive solutions.",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <div className="py-16" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12">
          What I <span>Do</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description, gradient, index, inView }) => {
  return (
    <div
      className={`glass rounded-2xl p-6 card-hover group ${inView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon with gradient background */}
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} 
                      flex items-center justify-center mb-4
                      group-hover:scale-110 transition-transform duration-300`}>
        <span className="text-2xl text-white">{icon}</span>
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Services;
