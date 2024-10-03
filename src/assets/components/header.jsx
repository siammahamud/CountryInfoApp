
export function Header() {
  return (
   
    <header>
      <nav className="flex justify-between px-10 py-4 items-center fixed bg-blue-800/40 backdrop-blur-md w-full ">
        <div>
          <h1 className="font-bold text-2xl drop-shadow-[1px_1px_2px_red] text-white">
            COUNTRY@INFO
          </h1>
        </div>
        <div className="flex">
         <select name="sort" className="px-4 py-1 rounded-md mr-5 hidden md:block">
            <option value="">Sort Countries</option>
            <option value="name-a-z">#Sort by Name (A - Z)</option>
            <option value="name-z-a">#Sort by Name (Z - A)</option>
            <option value="population">#Sort by Population</option>
         </select>
        
         <input 
         placeholder="Search...."
         className=" px-4 py-1 focus:outline-none border-none rounded-lg" 
         type="text" />
     

         
        </div>
      </nav>
    </header>
  );
}
