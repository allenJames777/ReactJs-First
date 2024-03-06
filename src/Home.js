import { useState } from "react";
import BlogList from "./BlogList";
import AddNote from "./AddNote";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:'First title', body:'First body', author:'arc',id:'1'},
        {title:'Second title', body:'Second body',author:'allen', id:'2'},
        {title:'Third title', body:'Third body',author:'arc', id:'3'},
        {title:'Fourth title', body:'Fourth body',author:'john', id:'4'},
        {title:'Fifth title', body:'Fifth body',author:'carlo', id:'5'},
        {title:'Sixth title', body:'Sixth body',author:'carlo', id:'6'}
    ]);

    const [originalBlogs, setOriginalBlogs] = useState(blogs); // Store the original list of blogs

    const handleDelete = (id) =>{ 
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    const handleSearchChange = (event) => { //If the search bar is empty the items will return. 
        const searchTerm = event.target.value.toLowerCase();
        if (searchTerm === '') {
            setBlogs(originalBlogs);
        } else {
            const filteredBlogs = originalBlogs.filter(blog => blog.author.toLowerCase().includes(searchTerm));
            setBlogs(filteredBlogs);
        }
    }

    const handleAdd = (title, author) => { 
        if(title.trim() !== '' && author.trim() !== ''){
            const newBlog = {
                title: title,
                author: author,
                id: Math.random().toString()
            };
            setBlogs([...blogs, newBlog]);
            alert('Note Saved!');
        } else {
            alert('Please enter title and author');
        }
    }
    

    return ( 
        <div className="Home">
            <AddNote handleAdd={handleAdd} />
            <BlogList 
                blogs={blogs} 
                title="NOTES" 
                handleDelete={handleDelete} 
                handleSearchChange={handleSearchChange}
                handleAdd={handleAdd}  
            /> 
        </div>
    );
}

export default Home;
