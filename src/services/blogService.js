import { collection, getDocs, addDoc, deleteDoc, doc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';

// Blog verilerini yükle
export const loadBlogs = (callback) => {
    try {
        const blogsRef = collection(db, 'blogs');
        const q = query(blogsRef, orderBy('date', 'desc'));
        
        // Realtime updates
        return onSnapshot(q, (snapshot) => {
            const blogs = [];
            snapshot.forEach((doc) => {
                blogs.push({ id: doc.id, ...doc.data() });
            });
            callback(blogs);
        });
    } catch (error) {
        console.error("Error loading blogs: ", error);
        callback([]);
        return () => {}; // Boş cleanup fonksiyonu
    }
};

// Blog ekle
export const addBlog = async (newBlog) => {
    try {
        const blogsRef = collection(db, 'blogs');
        const docRef = await addDoc(blogsRef, {
            ...newBlog,
            date: new Date().toISOString()
        });
        return { id: docRef.id, ...newBlog };
    } catch (error) {
        console.error("Error adding blog: ", error);
        return null;
    }
};

// Blog sil
export const deleteBlog = async (id) => {
    try {
        const blogRef = doc(db, 'blogs', id);
        await deleteDoc(blogRef);
        return true;
    } catch (error) {
        console.error("Error deleting blog: ", error);
        return false;
    }
}; 