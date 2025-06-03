import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! I'll get back to you soon.",
      });
      setForm({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(form);
  };

  const handleSocialClick = (platform: string) => {
    const urls = {
      github: "https://github.com/sachin-chourasiya",
      linkedin: "http://linkedin.com/in/sachin-chourasiya-b66465193",
      twitter: "https://twitter.com/SachinC96892260",
      instagram:
        "https://www.instagram.com/sach_in_84ya?igsh=bGd5ZDRvMHUyYnll&utm_source=qr",
    };

    window.open(urls[platform as keyof typeof urls], "_blank");
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card card-custom">
              <div className="card-body p-5">
                <div className="row">
                  <div className="col-lg-6">
                    <h4 className="text-primary mb-4">Contact Information</h4>
                    <div className="mb-3">
                      <i className="fas fa-envelope text-primary me-3"></i>
                      <span>sachinchourasiya.c.123@gmail.com</span>
                    </div>
                    <div className="mb-3">
                      <i className="fas fa-phone text-primary me-3"></i>
                      <span>+91 7047661518</span>
                    </div>
                    <div className="mb-3">
                      <i className="fas fa-map-marker-alt text-primary me-3"></i>
                      <span>Noida, UP, India</span>
                    </div>
                    <div className="mb-4">
                      <i className="fas fa-graduation-cap text-primary me-3"></i>
                      <span>BE Computer Science - Sam College Bhopal</span>
                    </div>

                    <h5 className="text-primary mb-3">Follow Me</h5>
                    <div className="social-links">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSocialClick("github");
                        }}
                      >
                        <i className="fab fa-github"></i>
                      </a>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSocialClick("linkedin");
                        }}
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSocialClick("twitter");
                        }}
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSocialClick("instagram");
                        }}
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <h4 className="text-primary mb-4">Send Message</h4>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          name="name"
                          value={form.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                          name="email"
                          value={form.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                          name="subject"
                          value={form.subject}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <textarea
                          className="form-control"
                          rows={5}
                          placeholder="Your Message"
                          name="message"
                          value={form.message}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-custom text-white w-100"
                        disabled={contactMutation.isPending}
                      >
                        <i className="fas fa-paper-plane me-2"></i>
                        {contactMutation.isPending
                          ? "Sending..."
                          : "Send Message"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
