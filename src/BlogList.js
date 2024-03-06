const BlogList = ({blogs,title,handleDelete,handleSearchChange, handleAdd}) => { //destructured, much easier way for accepting props 



    // const blogs = props.blogs; ....standard props 
    // const title = props.title; ....standard props 

    return (  
        <div className =" blog-list content max-w-screen-md  mx-auto  p-20 pt-0 w-2/3">

            
            <form className=" flex flex-col items-end ">
                <label className=" focus:outline-none focus:border-blue-500">Search: 
                    <input
                    type="Text"
                    onChange={handleSearchChange}
                    placeholder="Search Here:"/>
                </label>
            </form>
            
        

        <h5 className="text-2xl font-semibold">{title}</h5>
        {blogs.map((blog) =>(
        <div className="blog-preview px-16 py-4 border-b hover:shadow-md hover:scale-105 transition duration-300 ease-in-out" key={blog.id}>
            <h5 className="text-2xl font-thin">{blog.title}</h5>
            <h2>Written By: {blog.author}</h2>
            
            <div className="flex flex-col items-end">
            <button className="bg-red-500 w-20 rounded-md text-white"onClick={() => handleDelete (blog.id)}>Delete</button>
            </div>
          
        </div>
       ))}
            
        </div>
    );
}
 
export default BlogList;
