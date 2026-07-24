import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loader2, Calendar, User, ArrowLeft } from 'lucide-react';
import { getBlogs } from '../../features/blog/blogThunk';

const BlogDetails = () => {
  const { slug } = useParams(); // URL se slug uthayega
  const location = useLocation();
  const dispatch = useDispatch();
  
  // State se ID nikalna (Link component se jo pass kiya tha)
  const blogIdFromState = location.state?.blogId;

  // Redux store se data lena
  const { blogs, loading } = useSelector((state) => state.blog);
  
  // Find logic: Pehle ID se search, fir fallback Slug par
  const blog = blogs.find((b) => b._id === blogIdFromState) || 
               blogs.find((b) => (b.slug || b.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')) === slug);

  useEffect(() => {
    // Agar blogs array khali hai (jaise refresh karne par hota hai), toh fetch karein
    if (blogs.length === 0) {
      dispatch(getBlogs());
    }
    // Hamesha page ke upar scroll karein
    window.scrollTo(0, 0);
  }, [dispatch, blogs.length]);

  // Loading State
  if (loading && blogs.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
      </div>
    );
  }

  // Not Found State (Sirf tab dikhaye jab loading khatam ho chuki ho)
  if (!blog && !loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Insight not found</h2>
        <Link to="/blogs" className="text-orange-500 font-bold uppercase tracking-widest text-xs border-b-2 border-orange-500 pb-1">
          Return to Insights
        </Link>
      </div>
    );
  }

  // Return null if blog isn't found yet but we are still in initial check
  if (!blog) return null;

  return (
    <article className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-[60vh] md:h-[75vh] relative overflow-hidden">
        <img 
          src={blog.imageUrl} 
          className="w-full h-full object-cover" 
          alt={blog.title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 lg:p-20">
          <div className="max-w-5xl mx-auto">
            <Link 
              to="/blogs" 
              className="inline-flex items-center gap-2 text-orange-500 font-black text-[10px] uppercase tracking-[0.2em] mb-8 hover:gap-4 transition-all group"
            >
              <ArrowLeft size={14} /> Back to Insights
            </Link>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-[0.95] uppercase tracking-tighter mb-8 max-w-4xl italic">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-slate-300 text-[10px] font-black uppercase tracking-[0.2em]">
              <div className="flex items-center gap-2">
                <User size={14} className="text-orange-500" />
                <span>Written by <span className="text-white">{blog.author}</span></span>
              </div>
              <span className="hidden md:block w-1.5 h-1.5 bg-white/20 rounded-full"></span>
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-orange-500" />
                <span>
                  {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : "Recently"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        
        <div className="prose prose-slate prose-orange lg:prose-xl max-w-none 
          prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter
          prose-p:text-slate-600 prose-p:leading-loose prose-p:font-medium
          prose-img:rounded-3xl prose-strong:text-slate-900 prose-strong:font-black">
          
          {/* dangerouslySetInnerHTML is used because 'description' contains Jodit Editor HTML */}
          <div 
            dangerouslySetInnerHTML={{ __html: blog.description }} 
            className="blog-rich-content"
          />

        </div>

        {/* Footer / Social Share */}
        <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
           <div>
              <p className="font-black text-slate-900 uppercase tracking-[0.2em] text-[10px] mb-1">Share this insight</p>
              <p className="text-slate-400 text-sm font-medium italic">Empowering industry through knowledge.</p>
           </div>
           <div className="flex gap-3">
             {['Facebook', 'Twitter', 'LinkedIn'].map(sm => (
               <button key={sm} className="px-6 py-3 border border-slate-200 text-slate-900 text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all active:scale-95">
                 {sm}
               </button>
             ))}
           </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDetails;