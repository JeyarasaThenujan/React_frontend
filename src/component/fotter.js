import React from "react";
import '../styles/global.css';
import { FiArrowUpRight } from "react-icons/fi"; 
import { TbStar } from "react-icons/tb"; 
import { BiCube } from "react-icons/bi";
import { FiTool } from "react-icons/fi"; 
import { BiShield } from "react-icons/bi"; 
import { FiPackage } from "react-icons/fi"; 
import { FiBarChart2 } from "react-icons/fi"; 

const Footer = () => {
  const services = [
    {
      icon: <TbStar />,
      title: "Production and Assembly",
      description: "Details on production processes, assembly, capacity, and product types.",
    },
    {
      icon: <BiCube />,
      title: "Custom Manufacturing",
      description: "Custom product creation with design and customization options.",
    },
    {
      icon: <FiTool />,
      title: "Quality Control",
      description: "Procedures and systems in place to ensure high product quality.",
    },
    {
      icon: <BiShield />,
      title: "Technology and Innovation",
      description: "Details on the latest manufacturing technologies and ongoing innovations.",
    },
    {
      icon: <FiPackage />,
      title: "Packaging and Logistics",
      description: "Packaging and logistics for shipping to customers and distributors.",
    },
    {
      icon: <FiBarChart2 />,
      title: "Consulting Market Research",
      description: "Services to help companies understand market needs and provide strategic advice.",
    },
  ];

  return (
    <div className="footer1">
      <div className="footer-header">
        <h2>Efficient and Integrated</h2>
           <h2>Manufacturing Services</h2>
        <p>Simplify operations with our efficient, quality-focused services.</p>
      </div>
      <div className="footer-services">
        {services.map((service, index) => (
          <div key={index} className="footer-card">
            <div className="footer-card-top">
              <div className="footer-icon">{service.icon}</div>
              <div className="footer-arrow">
                <FiArrowUpRight />
              </div>
            </div>
            <h3 className="footer-title">{service.title}</h3>
            <p className="footer-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
