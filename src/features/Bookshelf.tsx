import { useState } from "react"
import { Book, books } from "../data/books"


const Bookshelf = () => {

	const [ myBooks, setMyBooks] = useState<Book[]>(books)
	
	return(
		<div>
			<ul>{myBooks.map((book) => (
				
			<li key={book.id}>
				<h4>{book.title}</h4>
				<p>{book.author}</p>
				<p>{book.genre}</p>
			</li> ))}
				</ul>
		</div>
	)
}

export default Bookshelf