import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loader2, BookOpen } from 'lucide-react';
import { getBlogs } from '../../features/blog/blogThunk';

const Blogs = () => {
  const dispatch = useDispatch();
  const { blogs, loading } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  // Helper function: Title se Slug banane ke liye (agar backend se slug nahi aa raha)
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <Loader2 className="w-12 h-12 text-orange-500 animate-spin mb-4" />
        <p className="text-slate-400 font-black uppercase tracking-widest text-xs">Fetching Insights...</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-end justify-between mb-16 border-b-2 border-slate-900 pb-6">
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            ADEN <span className="text-orange-500 italic font-serif lowercase">insights</span>
          </h1>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs?.map((blog) => {
            const slug = blog.slug || createSlug(blog.title);
            
            return (
              <Link 
                key={blog._id} 
                to={`/blog/${slug}`} 
                state={{ blogId: blog._id }} // ID ko state mein bhej rahe hain
                className="group flex flex-col h-full"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[16/10] bg-slate-100">
                  <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="h-[2px] w-8 bg-orange-500"></span>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    By {blog.author} • {new Date(blog.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <h2 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-orange-500 transition-colors uppercase">
                  {blog.title}
                </h2>

                <p className="text-slate-500 text-sm font-medium line-clamp-3 mb-6">
                  {blog.description.replace(/<[^>]*>?/gm, '')}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest border-b-2 border-slate-900 group-hover:border-orange-500 pb-1">
                    Read Article
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;