import React, { useState, useEffect } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

// Helper: simple email validator
const isValidEmail = (email) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Auto-hide success banner
  useEffect(() => {
    if (!success) return;
    const t = setTimeout(() => setSuccess(false), 3000);
    return () => clearTimeout(t);
  }, [success]);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name";
    if (!form.email.trim()) newErrors.email = "Please enter your email";
    else if (!isValidEmail(form.email)) newErrors.email = "Please enter a valid email";
    if (!form.message.trim()) newErrors.message = "Please write a message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    // Simulate API call
    await new Promise((res) => setTimeout(res, 1200));

    setLoading(false);
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div
      name="Contacts"
      className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-6"
    >
      {/* Success banner */}
      {success && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-slideDown">
          <div className="flex items-center gap-2 rounded-2xl bg-green-600 text-white px-4 py-2 shadow-lg">
            <CheckCircle2 className="h-5 w-5" />
            <span>Message successfully sent!</span>
            
          </div>
        </div>
      )}

      <div className="relative w-full max-w-2xl">
        {/* Animated blobs */}
        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-indigo-300 blur-3xl animate-pulse opacity-40"></div>
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-purple-300 blur-3xl animate-pulse opacity-40"></div>

        <div className="relative z-10 rounded-3xl bg-white/80 backdrop-blur shadow-xl p-6 sm:p-10 border border-black/5 animate-fadeUp">
          <header className="mb-6 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight animate-fadeIn">
              Contact Us
            </h1>
            <p className="text-sm text-gray-500">
              Fill your name, email, and message. Tap send; you'll see a success note.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className={`mt-1 w-full rounded-2xl border bg-white/80 px-4 py-3 outline-none transition-all duration-200 shadow-sm placeholder:text-gray-400 focus:scale-[1.01] ${
                  errors.name
                    ? "border-red-400"
                    : "border-gray-300 focus:ring-2 focus:ring-indigo-400"
                }`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`mt-1 w-full rounded-2xl border bg-white/80 px-4 py-3 outline-none transition-all duration-200 shadow-sm placeholder:text-gray-400 focus:scale-[1.01] ${
                  errors.email
                    ? "border-red-400"
                    : "border-gray-300 focus:ring-2 focus:ring-indigo-400"
                }`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className={`mt-1 w-full rounded-2xl border bg-white/80 px-4 py-3 outline-none transition-all duration-200 shadow-sm placeholder:text-gray-400 focus:scale-[1.005] ${
                  errors.message
                    ? "border-red-400"
                    : "border-gray-300 focus:ring-2 focus:ring-indigo-400"
                }`}
                placeholder="Write your message here..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-2xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg disabled:opacity-70 disabled:cursor-not-allowed active:scale-95 transition-transform"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>

              {success && (
                <div className="mt-3 flex items-center gap-2 text-green-600 animate-fadeIn">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Your message was sent successfully.</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp { animation: fadeUp 0.6s ease-out; }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
        .animate-slideDown { animation: slideDown 0.5s ease-out; }
      `}</style>
    </div>
  );
}
