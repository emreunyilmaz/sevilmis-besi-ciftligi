import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import { loadBlogs } from '../../services/blogService';

export default function BlogDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const blogs = loadBlogs();
        const currentPost = blogs.find(blog => blog.id === parseInt(id));
        setPost(currentPost);
    }, [id]);

    if (!post) return <div>Yükleniyor...</div>;

    return (
        <div>
            <PageHeader 
                title={post.title}
                image={post.image}
            />
            <div className="container mx-auto px-4 py-12">
                <div className="prose max-w-none">
                    <p className="text-gray-600 mb-4">
                        {new Date(post.date).toLocaleDateString('tr-TR')}
                    </p>
                    <div className="whitespace-pre-wrap">
                        {post.content}
                    </div>
                </div>
            </div>
        </div>
    );
} 