import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import blogs from "../../config/blogs";

const Blogs = () => {
  // Don't render if no blogs
  if (blogs.length === 0) return null;

  return (
    <section className="py-32 relative px-6" id="blogs">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="mb-8 flex flex-col md:flex-row justify-between items-end mb-24 border-b border-zinc-800 pb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-xs font-body uppercase tracking-widest text-muted-foreground mb-4">
              Thoughts
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Latest Articles
            </h2>
          </div>
          <span className="text-zinc-500 font-mono text-sm mt-4 md:mt-0">
            04 // BLOG_DATA
          </span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <motion.a
              key={blog.id}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card rounded-sm p-6 corner-borders block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 text-xs text-muted-foreground font-body mb-4">
                <span>
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {blog.readTime}
                </span>
              </div>

              <h3 className="font-heading text-lg md:text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {blog.title}
              </h3>

              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                {blog.excerpt}
              </p>

              <span className="inline-flex items-center gap-1 text-sm font-body text-foreground group-hover:text-primary transition-colors link-arrow">
                Read More
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
