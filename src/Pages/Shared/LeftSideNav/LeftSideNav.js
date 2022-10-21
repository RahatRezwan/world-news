import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
   const [categories, setCategories] = useState([]);

   useEffect(() => {
      fetch("http://localhost:5000/categories")
         .then((res) => res.json())
         .then((data) => setCategories(data));
   }, []);

   return (
      <div>
         <h4>All Categories</h4>
         <div>
            {categories.map((category) => (
               <p key={category.id}>
                  <NavLink
                     to={`/category/${category.id}`}
                     className={`text-secondary text-decoration-none`}
                     end
                  >
                     {category.name}
                  </NavLink>
               </p>
            ))}
         </div>
      </div>
   );
};

export default LeftSideNav;
