import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadBlogs, addBlog, deleteBlog } from '../../services/blogService';

export default function AdminPanel() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newPost, setNewPost] = useState({
        title: '',
        content: '',
        image: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        // Admin girişi kontrolü
        const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
        if (!isLoggedIn) {
            navigate('/admin');
            return;
        }

        const fetchBlogs = async () => {
            setLoading(true);
            const blogs = await loadBlogs();
            setPosts(blogs);
            setLoading(false);
        };

        fetchBlogs();
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await addBlog(newPost);
        if (result) {
            const updatedBlogs = await loadBlogs();
            setPosts(updatedBlogs);
            setNewPost({ title: '', content: '', image: '' });
        }
    };

    const handleDelete = async (id) => {
        const success = await deleteBlog(id);
        if (success) {
            const updatedBlogs = await loadBlogs();
            setPosts(updatedBlogs);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('isAdminLoggedIn');
        navigate('/admin');
    };

    return (
        <div className="min-h-screen bg-base-200 p-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Admin Panel</h1>
                    <button 
                        onClick={handleLogout}
                        className="btn btn-ghost"
                    >
                        Çıkış Yap
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Yeni Blog Ekleme Formu */}
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Yeni Blog Ekle</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Başlık</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        value={newPost.title}
                                        onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                                        className="input input-bordered" 
                                        required
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Görsel URL</span>
                                    </label>
                                    <input 
                                        type="url" 
                                        value={newPost.image}
                                        onChange={(e) => setNewPost({...newPost, image: e.target.value})}
                                        className="input input-bordered" 
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">İçerik</span>
                                    </label>
                                    <textarea 
                                        value={newPost.content}
                                        onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                                        className="textarea textarea-bordered h-32" 
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary w-full">
                                    Blog Ekle
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Mevcut Bloglar Listesi */}
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title mb-4">Mevcut Bloglar</h2>
                            <div className="space-y-4">
                                {posts.map(post => (
                                    <div key={post.id} className="card bg-base-200">
                                        <div className="card-body">
                                            <h3 className="card-title">{post.title}</h3>
                                            <p className="text-sm text-gray-600">
                                                {new Date(post.date).toLocaleDateString('tr-TR')}
                                            </p>
                                            <div className="card-actions justify-end">
                                                <button 
                                                    onClick={() => handleDelete(post.id)}
                                                    className="btn btn-error btn-sm"
                                                >
                                                    Sil
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 