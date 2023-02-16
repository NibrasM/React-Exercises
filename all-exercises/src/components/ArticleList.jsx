
export default function ArticleList({articles}){
console.log(articles)

const drawData = ()=>{
    return articles.map((article)=>{
        return <div key={article.id} style={{border:"1px solid black", display:"flex", flexDirection:"column"}}>
            <span>{article.id}: </span>
            <span>title: {article.title}</span>
            <span>author: {article.author}</span>
            <span>date: {article.date}</span>
        </div>
    })
}
return<>
{drawData()}
</>
}