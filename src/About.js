import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import alpha from './img/logo2.jpeg';
import beta from './img/logo3.jpeg';
import Skills from './Skills';

const About = () => {

  <Skills/>

}
export default About;
//   const [images, setImages] = useState([
//     {
//       "id": 1,
//       "category": "flowers",
//       "src": beta
//     },
//     {
//       "id": 2,
//       "category": "flowers2",
//       "src": "https://source.unsplash.com/rMHNK_skwwU"
//     },
//     {
//       "id": 3,
//       "category": "flowers2",
//       "src": "https://source.unsplash.com/rMHNK_skwwU"
//     },
//     {
//       "id": 4,
//       "category": "flowers3",
//       "src": alpha
//     },
//     {
//       "id": 5,
//       "category": "flowers3",
//       "src": alpha
//     },
//     {
//       "id": 6,
//       "category": "flowers",
//       "src": beta
//     },
//     {
//       "id": 7,
//       "category": "flowers2",
//       "src": "https://source.unsplash.com/rMHNK_skwwU"
//     },
//     {
//       "id": 8,
//       "category": "flowers2",
//       "src": "https://source.unsplash.com/rMHNK_skwwU"
//     },
//     {
//       "id": 9,
//       "category": "flowers3",
//       "src": alpha
//     },
//     {
//       "id": 10,
//       "category": "flowers3",
//       "src": alpha
//     }
//   ]);

//   const [filteredImages, setFilteredImages] = useState([]);

//   const handleFilter = (category) => {
//     const filteredData = images.filter(image => image.category === category);
//     console.log(filteredData); // Check if data is filtered correctly
//     setFilteredImages(filteredData);
//   };

//   const resetFilter = () => {
//     setFilteredImages([]);
//   };

//   return (
//     <div className='flex flex-col bg-gray-800'>
//       <div classname='flex flex-row gap-10'>
//         <button className='border-2 border-gray-500 p-2 rounded-lg text-gray-200 transition ease-in-out delay-150 bg-gray-800 hover:-translate-y-1 hover:scale-110 hover:bg-teal-500 duration-300 hover:text-white m-4' onClick={() => handleFilter("flowers")}>Flowers</button>
//         <button className='border-2 border-gray-500 p-2 rounded-lg text-gray-200 transition ease-in-out delay-150 bg-gray-800 hover:-translate-y-1 hover:scale-110 hover:bg-teal-500 duration-300 hover:text-white m-4' onClick={() => handleFilter("flowers2")}>Flowers2</button>
//         <button className='border-2 border-gray-500 p-2 rounded-lg text-gray-200 transition ease-in-out delay-150 bg-gray-800 hover:-translate-y-1 hover:scale-110 hover:bg-teal-500 duration-300 hover:text-white m-4' onClick={() => handleFilter("flowers3")}>Flowers3</button>
//         <button className='border-2 border-gray-500 p-2 rounded-lg text-gray-200 transition ease-in-out delay-150 bg-gray-800 hover:-translate-y-1 hover:scale-110 hover:bg-teal-500 duration-300 hover:text-white m-4' onClick={resetFilter}>Reset Filter</button>
//       </div>

//       <ul className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
//         {(filteredImages.length > 0 ? filteredImages : images).map((image) => (
//           <li key={image.id}>
//             <img src={image.src} alt=""  />
//           </li>
//         ))}
//       </ul>

//       <Link to="/about">About</Link>
//     </div>
//   );
// };

// export default About;



// {/* <div class="p-5 sm:p-8 bg-gray-800">
// <div class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
//     <img src={alpha} alt='hello'/>
//     <img src={beta} alt='hello'/>
//     <img src="https://source.unsplash.com/lp40q07DIe0" alt='hello'/>
//     <img src="https://source.unsplash.com/wfalq01jJuU" alt='hello'/>
//     <img src="https://source.unsplash.com/rMHNK_skwwU" alt='hello'/>
//     <img src="https://source.unsplash.com/WBMjuGpbrCQ" alt='hello'/>
//     <img src="https://source.unsplash.com/nCUZ5BYBL_o" alt='hello'/>
//     <img src="https://source.unsplash.com/3u4fzMQZhjc" alt='hello'/>
//     <img src="https://source.unsplash.com/haOIqIPSwps" alt='hello'/>
//     <img src="https://source.unsplash.com/3UrYD7NNVxk" alt='hello'/>
//     <img src="https://source.unsplash.com/fm1JKDItlVM" alt='hello'/>
//     <img src="https://source.unsplash.com/qPpq1EVs8vw" alt='hello'/>
//     <img src="https://source.unsplash.com/xRyL63AwZFE" alt='hello'/>
//     <img src="https://source.unsplash.com/XeNKWTiCPNw" alt='hello'/>
//     <img src="https://source.unsplash.com/DFt3T5r_4FE" alt='hello'/>
//     <img src="https://source.unsplash.com/Ebwp2-6BG8E" alt='hello'/>
//     <img src="https://source.unsplash.com/fm1JKDItlVM" alt='hello'/>
//     <img src="https://source.unsplash.com/qPpq1EVs8vw" alt='hello'/>
//     <img src="https://source.unsplash.com/xRyL63AwZFE" alt='hello'/>
//     <img src="https://source.unsplash.com/XeNKWTiCPNw" alt='hello'/>
//     <img src="https://source.unsplash.com/DFt3T5r_4FE" alt='hello'/>
//     <img src="https://source.unsplash.com/Ebwp2-6BG8E" alt='hello'/>
//     <img src="https://source.unsplash.com/Ebwp2-6BG8E" alt='hello'/>
//     <img src="https://source.unsplash.com/Ebwp2-6BG8E" alt='hello'/>

// </div>
// </div> */}