import { useState } from "react"


function AddArticle ({articles, setArticles}){
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [date, setDate] = useState('')
   
    const article = {
        id,
        title,
        author,
        date
    }

    console.log(article)
    const SubmitForm =(e)=>{
        e.preventDefault()
        setArticles([...articles, article])
    }
    return<>
    <form onSubmit={SubmitForm}>
        <input type="number" onChange={(e)=>setId(e.target.value)}/>
        <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" onChange={(e)=>setAuthor(e.target.value)}/>
        <input type="date" onChange={(e)=>setDate(e.target.value)}/>
        <input type="submit"/>
    </form>
    </>

}
export default AddArticle;