// import React from 'react';
// import {
//     TextField,
//     Button,
//     FormControl,
//     InputLabel,
//     Select,
//     MenuItem
// } from '@mui/material';

// const [cloudName, setCloudName] = useState('');


// useEffect(() => {
//     async function fetchConfig() {
//         try {
//             const response = await fetch(`${baseURL}/config`);
//             const data = await response.json();
//             setCloudName(data.cloudName);
//         } catch (error) {
//             console.error('Error fetching cloud name:', error);
//         }
//     }
    
//     fetchConfig();
// }, []);

// function ArtworkForm({ artwork, onSave, onClose }) {
//     const [formData, setFormData] = React.useState(artwork || {
//         title: '',
//         artist: '',
//         description: '',
//         imageUrls: [],
//         category: '',
//         price: '',
//     });

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };

//     const handleImageUrlChange = (e, index) => {
//         const updatedUrls = [...formData.imageUrls];
//         updatedUrls[index] = e.target.value;
//         setFormData(prev => ({ ...prev, imageUrls: updatedUrls }));
//     };

//     const handleImageChange = (e) => {
//         // TODO: Implement image file selection logic here
//     };

//     const handleImageUpload = () => {
//         // TODO: Implement image upload logic here
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSave(formData);
//     };

//     return (
//         <div className="slide-in-form">
//             <Button onClick={onClose}>Close</Button>
//             <form onSubmit={handleSubmit}>
//                 <input type="file" onChange={handleImageChange} />
//                 <Button 
//                     onClick={handleImageUpload}
//                     // Disabled logic needs to be decided. Commented out for now.
//                     // disabled={!cloudName}
//                 >
//                     Upload Image
//                 </Button>

//                 <TextField
//                     fullWidth
//                     margin="normal"
//                     name="title"
//                     label="Title"
//                     value={formData.title}
//                     onChange={handleInputChange}
//                     sx={{ fontSize: '1.1rem', padding: '8px 0' }}
//                 />

//                 <TextField
//                     fullWidth
//                     margin="normal"
//                     name="artist"
//                     label="Artist"
//                     value={formData.artist}
//                     onChange={handleInputChange}
//                     sx={{ fontSize: '1.1rem', padding: '8px 0'}}
//                 />

//                 <TextField
//                     fullWidth
//                     margin="normal"
//                     name="description"
//                     label="Description"
//                     value={formData.description}
//                     onChange={handleInputChange}
//                     sx={{ fontSize: '1.1rem', padding: '8px 0' }}
//                 />

//                 {formData.imageUrls.map((url, index) => (
//                     <TextField
//                         key={index}
//                         fullWidth
//                         margin="normal"
//                         name={`imageUrl_${index}`}
//                         label={`Image URL ${index + 1}`}
//                         value={url}
//                         onChange={e => handleImageUrlChange(e, index)}
//                         sx={{ fontSize: '1.1rem', padding: '8px 0' }}
//                     />
//                 ))}
                
//                 <FormControl fullWidth margin="normal" sx={{ padding: '8px 0' }}>
//                     <InputLabel sx={{ fontSize: '1.1rem' }}>Category</InputLabel>
//                     <Select
//                         name="category"
//                         value={formData.category}
//                         onChange={handleInputChange}
//                         sx={{ fontSize: '1.1rem' }}
//                     >
//                         <MenuItem value="Painting">Painting</MenuItem>
//                         <MenuItem value="Sculpture">Sculpture</MenuItem>
//                         <MenuItem value="Photography">Photography</MenuItem>
//                         <MenuItem value="Wooden art piece">Wooden Art piece</MenuItem>
//                         <MenuItem value="Other">Other</MenuItem>
//                     </Select>
//                 </FormControl>

//                 <TextField
//                     fullWidth
//                     margin="normal"
//                     name="price"
//                     label="Price"
//                     value={formData.price}
//                     onChange={handleInputChange}
//                     type="number"
//                     sx={{ fontSize: '1.1rem', padding: '8px 0' }}
//                 />

//                 <Button variant="contained" color="primary" type="submit" sx={{ marginTop: '16px' }}>
//                     Add Artwork
//                 </Button>
//             </form>
//         </div>
//     );
// }

// export default ArtworkForm;
