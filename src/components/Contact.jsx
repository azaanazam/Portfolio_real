import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const Contact = () => {
  const whatsappNumber = "923700365884";
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "", // 'success' | 'error' | 'loading'
    message: "",
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // EmailJS configuration
  const serviceId = "service_30m8j5e";
  const templateId = "template_p381ewe";
  const publicKey = "5DHvKwlhQZ5bMmPTF";

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields.",
      });
      return;
    }

    setStatus({ type: "loading", message: "Sending message..." });

    try {
      const templateParams = {
        // Use these variables in your EmailJS template.
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        reply_to: formData.email.trim(),
        subject: formData.subject.trim() || "Portfolio Contact Message",
        message: formData.message.trim(),
        // Extra aliases support templates that use the simpler variable names.
        name: formData.name.trim(),
        email: formData.email.trim(),
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    } catch (error) {
      console.error("EmailJS error:", error?.text || error);
      setStatus({
        type: "error",
        message: error?.text
          ? `Email could not be sent: ${error.text}`
          : "Message could not be sent. Check your EmailJS Service ID, Template ID, Public Key, and template settings.",
      });
    }
  };

  // Contact info cards
  const contactInfo = [
    {
      icon: <Mail className="text-cyan-400" size={24} />,
      label: "Email",
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
    },
    {
      icon: <Phone className="text-cyan-400" size={24} />,
      label: "Phone",
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`,
    },
    {
      icon: <MapPin className="text-cyan-400" size={24} />,
      label: "Location",
      value: personalInfo.location,
      link: null,
    },
  ];

  // Social links
  const socials = [
    {
      icon: <GithubIcon size={20} />,
      link: personalInfo.github,
      label: "GitHub",
      color: "hover:text-white hover:border-white",
    },
    {
      icon: <LinkedinIcon size={20} />,
      link: personalInfo.linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-400 hover:border-blue-400",
    },
    {
      icon: <Mail size={20} />,
      link: `mailto:${personalInfo.email}`,
      label: "Email",
      color: "hover:text-red-400 hover:border-red-400",
    },
    {
      icon: <Phone size={20} />,
      link: `tel:${personalInfo.phone}`,
      label: "Phone",
      color: "hover:text-green-400 hover:border-green-400",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* ==================== SECTION HEADING ==================== */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-cyan-400">Work Together</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Agar aapko modern, fast aur animated website chahiye jo logon ko
            impress kare — to aap bilkul sahi jagah aaye ho. Let's build
            something amazing together! 🚀
          </p>
        </motion.div>

        {/* ==================== MAIN GRID ==================== */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* ==================== LEFT SIDE - CONTACT INFO ==================== */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-6"
          >
            {/* Heading */}
            <div>
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                <MessageSquare className="text-cyan-400" size={28} />
                Get in Touch
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Have a project in mind? Want to collaborate? Or just want to say
                hi? Feel free to reach out — I'm always open to new
                opportunities and ideas.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group bg-gray-800/50 border border-gray-700 rounded-xl p-5 hover:border-cyan-500/50 hover:bg-gray-800 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 rounded-lg border border-cyan-500/30 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                        {info.label}
                      </div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-sm md:text-base font-medium text-white hover:text-cyan-400 transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-sm md:text-base font-medium text-white">
                          {info.value}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability Card */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 border border-green-500/30 rounded-xl p-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                <span className="font-semibold text-green-400">
                  Available for Work
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Currently accepting freelance projects and full-time
                opportunities. Response time: within 24 hours.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Connect with me
              </h4>
              <div className="flex gap-3">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-12 h-12 flex items-center justify-center bg-gray-800 border border-gray-700 rounded-xl text-gray-400 transition-all duration-300 hover:-translate-y-1 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ==================== RIGHT SIDE - CONTACT FORM ==================== */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-2">Send Me a Message</h3>
              <p className="text-gray-400 text-sm mb-6">
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email Row */}
                <div className="grid md:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry / Collaboration / Just saying hi"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell me about your project or idea..."
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Status Message */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 p-3 rounded-lg text-sm ${
                      status.type === "success"
                        ? "bg-green-500/10 border border-green-500/30 text-green-400"
                        : status.type === "error"
                          ? "bg-red-500/10 border border-red-500/30 text-red-400"
                          : "bg-cyan-500/10 border border-cyan-500/30 text-cyan-400"
                    }`}
                  >
                    {status.type === "success" && <CheckCircle size={18} />}
                    {status.type === "error" && <AlertCircle size={18} />}
                    {status.type === "loading" && (
                      <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                    )}
                    <span>{status.message}</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status.type === "loading"}
                  className="group w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {status.type === "loading" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* ==================== BOTTOM CTA ==================== */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-2xl p-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Prefer a Quick Chat? 💬
          </h3>

          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Skip the form and reach out directly — I'm just one message away!
          </p>

          <div className="flex flex-wrap gap-4 justify-center">

            {/* WhatsApp Chat Button */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <MessageSquare size={18} />
              WhatsApp Chat
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
