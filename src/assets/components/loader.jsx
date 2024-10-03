

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-cyan-50">
      <div className="flex space-x-4">
        <div className=" w-4 h-4 rounded-xl bg-blue-600 animate-rightspin"></div>
        <div className="w-4 h-4 rounded-full bg-pink-400 animate-pulse"></div>
        <div className="w-4 h-4 rounded-full bg-red-600 animate-leftspin"></div>
      </div>
    </div>
  );
};

export default Loader;
