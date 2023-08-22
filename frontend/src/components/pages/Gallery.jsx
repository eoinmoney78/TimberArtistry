import React, { useState, useEffect } from 'react';
import { baseURL } from '../../environment/index';

function Gallery() {
    const [userRole, setUserRole] = useState(localStorage.getItem('isAdmin') ? 'admin' : 'user');

    const [artworks, setArtworks] = useState([]);
    const [newArtwork, setNewArtwork] = useState({
        title: '',
        artist: '',
        description: '',
        imageUrl: '',
        category: '',
        price: '',
    });

    useEffect(() => {
        console.log('Fetching artworks...');

        fetch(`${baseURL}/artwork`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Fetched artworks:', data);
                setArtworks(data);
            })
            .catch(error => console.error('Error fetching artworks:', error));
    }, []);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewArtwork(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting new artwork:', newArtwork);
    
        const token = localStorage.getItem("token");
        if (!token) {
            console.error('No token found in localStorage. Redirecting to login...');
            // Redirect user to login or show an error message
            return;
        }
    
        // Log the token's value here
        console.log('Token from sessionStorage:', token);
    
        fetch(`${baseURL}/artwork`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(newArtwork),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Artwork created:', data);
            setArtworks(prevArtworks => [...prevArtworks, data]);
        })
        .catch(error => console.error('Error creating artwork:', error));
    };
    

    return (
        <div>
            <div>Gallery</div>

            {/* Conditional rendering for admin actions */}
            {userRole === 'admin' && (
                <div>
                    {/* Render the "Add New Artwork" form */}
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="title" placeholder="Title" value={newArtwork.title} onChange={handleInputChange} />
                        <input type="text" name="artist" placeholder="Artist" value={newArtwork.artist} onChange={handleInputChange} />
                        <input type="text" name="description" placeholder="Description" value={newArtwork.description} onChange={handleInputChange} />
                        <input type="text" name="imageUrl" placeholder="Image URL" value={newArtwork.imageUrl} onChange={handleInputChange} />
                        <select name="category" value={newArtwork.category} onChange={handleInputChange}>
                            <option value="Painting">Painting</option>
                            <option value="Sculpture">Sculpture</option>
                            <option value="Photography">Photography</option>
                            <option value="Other">Other</option>
                        </select>
                        <input type="number" name="price" placeholder="Price" value={newArtwork.price} onChange={handleInputChange} />
                        <button type="submit">Add Artwork</button>
                    </form>
                </div>
            )}

            {/* Other Gallery components and logic */}
        </div>
    );
}

export default Gallery;
