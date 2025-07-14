import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: ""
  });

  const { toast } = useToast();

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    submitContactForm.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "shendevinod9585@gmail.com",
      href: "mailto:shendevinod9585@gmail.com",
      color: "text-[var(--accent-blue)]",
      bgColor: "bg-[var(--accent-blue)]/20",
      hoverBg: "group-hover:bg-[var(--accent-blue)]/30"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7741926093",
      href: "tel:+917741926093",
      color: "text-[var(--accent-green)]",
      bgColor: "bg-[var(--accent-green)]/20",
      hoverBg: "group-hover:bg-[var(--accent-green)]/30"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pune, India",
      href: "#",
      color: "text-[var(--accent-orange)]",
      bgColor: "bg-[var(--accent-orange)]/20",
      hoverBg: "group-hover:bg-[var(--accent-orange)]/30"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/vinod-shende-486a5116b/",
      color: "text-blue-500",
      bgColor: "bg-blue-500/20",
      hoverBg: "group-hover:bg-blue-500/30"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[var(--dark-slate)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-gray-400 text-lg">Ready to transform your data into actionable insights?</p>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-green)] mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            <div className="grid grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div key={index} className="group hover:transform hover:scale-105 transition-all duration-300">
                    <a href={contact.href} className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-[var(--dark-navy)] transition-colors">
                      <div className={`${contact.bgColor} ${contact.hoverBg} p-4 rounded-xl mb-3 transition-colors`}>
                        <IconComponent className={`${contact.color} text-2xl`} />
                      </div>
                      <h4 className="font-semibold text-white text-sm mb-1">{contact.title}</h4>
                      <p className={`text-gray-400 hover:${contact.color} transition-colors text-xs`}>
                        {contact.value}
                      </p>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[var(--dark-navy)] p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white font-semibold mb-2 block">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-[var(--dark-slate)] text-white border-gray-600 focus:border-[var(--accent-blue)] focus:ring-[var(--accent-blue)]"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white font-semibold mb-2 block">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-[var(--dark-slate)] text-white border-gray-600 focus:border-[var(--accent-blue)] focus:ring-[var(--accent-blue)]"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-white font-semibold mb-2 block">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project or data analysis needs..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="bg-[var(--dark-slate)] text-white border-gray-600 focus:border-[var(--accent-blue)] focus:ring-[var(--accent-blue)] resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={submitContactForm.isPending}
                className="w-full bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-green)] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-[var(--accent-blue)]/25 transition-all duration-300 disabled:opacity-50"
              >
                {submitContactForm.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
