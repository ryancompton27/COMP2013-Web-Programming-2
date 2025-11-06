

export default function PostForm({title, body, handleChange, handleSubmit}) {
    return (
        <div className="postForm">
            <form onSubmit={handleSubmit}>
                <label className="formTitle">Post Form </label>
                <br/>
                <label>Title: </label>
                <input type="text" name="title" value={title} onChange={handleChange}/>
                <br/>
                <label>Body: </label>
                <input type="text" name="body" value={body} onChange={handleChange}/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}