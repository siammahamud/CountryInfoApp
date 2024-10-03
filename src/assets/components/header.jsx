
// eslint-disable-next-line react/prop-types
export function Header({searchQuary, handleSearch, handleSorting}) {
  return (
   
    <header>
      <nav className="flex justify-between px-10 py-4 items-center fixed bg-blue-800/40 backdrop-blur-md w-full ">
        <div>
          <h1 className="font-bold text-2xl drop-shadow-[1px_1px_2px_red] text-white">
            COUNTRY@INFO
          </h1>
        </div>
        <div className="flex">
         <select onChange={handleSorting} name="sort" className="px-4 py-1 rounded-md mr-5 hidden md:block">
            <option value="">Sort Countries By</option>
            <option value="ascending"> Name (A - Z)</option>
            <option value="descending"> Name (Z - A)</option>
            <option value="population-ascending">Population(Ascending)</option>
            <option value="population-descending">Population(Descending)</option>
            <option value="independent">Independent</option>
            <option value="notIndependent">Not Independent</option>
         </select>
        
         <input 
         value={searchQuary}
         onChange={handleSearch}
         placeholder="Search...."
         className=" px-4 py-1 focus:outline-none border-none rounded-lg" 
         type="text" />
     

         
        </div>
      </nav>
    </header>
  );
}
