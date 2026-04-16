import { motion } from "motion/react";
import { Send, Linkedin, Mail, Twitter } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Submitted:", data);
    toast.success("Message sent successfully! I'll get back to you soon.");
    reset();
  };

  return (
    <div className="space-y-24 pb-24 font-sans" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <Toaster position="bottom-right" />
      {/* Header */}
      <section className="pt-12 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100 border border-teal-200 text-sm font-medium text-teal-800 mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
            Available for freelance & full-time roles
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Let's <span className="text-teal-500">Connect</span>
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed mb-12">
            Whether it's bridging the gap in your performance marketing funnel or building an AI-driven digital experience, I'm ready to talk strategy.
          </p>
        </motion.div>
      </section>

      <section className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/3 space-y-8"
        >
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-6">Socials & Email</h3>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:border-violet-300 hover:bg-violet-50 transition-all group">
                <Linkedin className="text-violet-500 group-hover:scale-110 transition-transform" size={24} />
                <span className="font-semibold text-slate-800">LinkedIn</span>
              </a>
              <a href="mailto:hello@example.com" className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-300 hover:bg-teal-50 transition-all group">
                <Mail className="text-teal-500 group-hover:scale-110 transition-transform" size={24} />
                <span className="font-semibold text-slate-800">Email Me</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 hover:border-orange-300 hover:bg-orange-50 transition-all group">
                <Twitter className="text-orange-500 group-hover:scale-110 transition-transform" size={24} />
                <span className="font-semibold text-slate-800">Twitter (X)</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Minimalist Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full md:w-2/3"
        >
          <div className="bg-white/60 backdrop-blur-xl border border-slate-200 p-8 sm:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className={`w-full px-5 py-4 bg-slate-50 border ${errors.name ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-teal-400'} rounded-2xl outline-none focus:ring-2 focus:border-transparent transition-all font-medium text-slate-900 placeholder-slate-400`}
                  placeholder="Jane Doe"
                />
                {errors.name && <p className="mt-2 text-sm text-red-500 font-medium">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className={`w-full px-5 py-4 bg-slate-50 border ${errors.email ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-teal-400'} rounded-2xl outline-none focus:ring-2 focus:border-transparent transition-all font-medium text-slate-900 placeholder-slate-400`}
                  placeholder="jane@company.com"
                />
                {errors.email && <p className="mt-2 text-sm text-red-500 font-medium">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                  className={`w-full px-5 py-4 bg-slate-50 border ${errors.message ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-teal-400'} rounded-2xl outline-none focus:ring-2 focus:border-transparent transition-all font-medium text-slate-900 placeholder-slate-400 resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="mt-2 text-sm text-red-500 font-medium">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send size={20} className="group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
