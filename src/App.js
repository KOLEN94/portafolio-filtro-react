import React,{useState} from 'react';
import './App.css';
import Menu from './Componets/Menu';
import Categories from './Componets/Categories';
import items from './Componets/Data';


const allCategories = ['all', ...new Set(items.map((item)=>item.category))]
function App() {

  const [menuItems,setMenusItems] = useState(items)
   const [categories,setCategories] = useState(allCategories)

   const filterItem =(category)=>{
      if(category == 'all'){
        setMenusItems(items)
        return;
      }

      const newItem = items.filter((item)=>item.category == category);
      setMenusItems(newItem)
   }
  return (
    <>
       <div className="menu section">
             <div className="title">
                 <h2>Our Filter Menu</h2>
                 <div className="underline"></div>
             </div>
             <Categories categories ={categories} filterItem={filterItem}  />
              <Menu items={menuItems} />
      </div>
    </>
  );
}

export default App;
