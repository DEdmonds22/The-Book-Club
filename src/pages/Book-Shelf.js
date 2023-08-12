
export default function BookShelf({bookList}) {
    return (
        <div>
            <h1>Book Shelf page</h1>
            {bookList.map((book) => (
                <div key={book.id} className="book" >
                <h2>{book.title}</h2>
                <img src={book.img} />
                <p>by: {book.authors?.join(", ")}</p>
            </div>
        ))}
        </div>
    )
}