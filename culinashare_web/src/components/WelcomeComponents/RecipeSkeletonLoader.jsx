// RecipeSkeletonLoader.js

const RecipeSkeletonLoader = () => {
    return (
        <div className="h-[45vh] bg-black/30 backdrop-blur-md shadow-md   
        rounded-lg drop-shadow-2xl flex flex-col">
            <div className="animate-pulse flex flex-col w-full ">
                <div className="bg-slate-700 h-48 w-full rounded-lg"></div>
                <div className="space-y-3 mt-3 p-4">
                    <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-700 rounded w-1/4"></div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-4 bg-slate-700 rounded col-span-1"></div>
                        <div className="h-4 bg-slate-700 rounded col-span-2"></div>
                    </div>
                </div>
            </div>
        </div>
        
    );
  };
  
  export default RecipeSkeletonLoader;
  