import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>SmartBox | All-in-One Tools</title>
      </Helmet>

      {/* Hero Section */}
      <motion.section
        className="bg-blue-50 py-20 text-center px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">Welcome to SmartBox</h1>
        <p className="text-lg text-gray-700 mt-4 max-w-xl mx-auto">
          20+ productivity tools in one simple, fast, and private platform.
        </p>
        <a
          href="/tools"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Explore Tools
        </a>
      </motion.section>

      {/* Tools Grid */}
      <motion.section
        className="py-14 px-4 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Popular Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Age Calculator",
              desc: "Find your exact age instantly.",
              link: "/tools/age-calculator",
            },
            {
              title: "Image Resizer",
              desc: "Resize your images easily.",
              link: "/tools/image-resizer",
            },
            {
              title: "Text Counter",
              desc: "Count characters and words.",
              link: "/tools/text-counter",
            },
          ].map((tool, i) => (
            <motion.a
              key={i}
              href={tool.link}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition border border-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <h3 className="text-lg font-semibold text-blue-600">{tool.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{tool.desc}</p>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Why SmartBox */}
      <motion.section
        className="bg-gray-50 py-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Why SmartBox?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          <div>
            <h4 className="font-semibold text-blue-600">🧰 20+ Tools</h4>
            <p className="text-gray-700 text-sm mt-2">All tools in one place, always accessible.</p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-600">🔐 100% Private</h4>
            <p className="text-gray-700 text-sm mt-2">No data is stored or shared. Fully secure.</p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-600">⚡ Super Fast</h4>
            <p className="text-gray-700 text-sm mt-2">Lightweight, fast, and mobile-friendly tools.</p>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 bg-blue-400 text-white text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold">Ready to Make Your Life Easier?</h2>
        <p className="mt-3 text-sm">Start using SmartBox tools now — free and instant access.</p>
        <a
          href="/tools"
          className="mt-5 inline-block bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-100 transition"
        >
          Browse All Tools
        </a>
      </motion.section>
    </>
  );
}
