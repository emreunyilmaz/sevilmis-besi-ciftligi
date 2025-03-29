import { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import AOS from 'aos';
import { loadBlogs } from '../services/blogService';
import { Link } from 'react-router-dom';

export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
        
        const unsubscribe = loadBlogs((blogs) => {
            setPosts(blogs);
            setLoading(false);
        });

        return () => {
            if (typeof unsubscribe === 'function') {
                unsubscribe();
            }
        };
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="loading loading-spinner loading-lg"></div>
            </div>
        );
    }

    return (
        <div>
            <PageHeader 
                title="Blog" 
                image="https://images.unsplash.com/photo-1605280263929-1c42c62ef169?ixlib=rb-4.0.3"
            />
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div 
                            key={post.id} 
                            className="card bg-base-100 shadow-xl" 
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {post.image && (
                                <figure>
                                    <img 
                                        src={post.image} 
                                        alt={post.title} 
                                        className="w-full h-48 object-cover"
                                    />
                                </figure>
                            )}
                            <div className="card-body">
                                <h2 className="card-title">{post.title}</h2>
                                <p className="text-gray-600 text-sm mb-2">
                                    {new Date(post.date).toLocaleDateString('tr-TR')}
                                </p>
                                <p className="line-clamp-3">{post.content}</p>
                                <div className="card-actions justify-end mt-4">
                                    <Link 
                                        to={`/blog/${post.id}`}
                                        className="btn btn-primary text-white"
                                    >
                                        Devamını Oku
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 