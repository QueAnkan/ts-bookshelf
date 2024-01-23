import { useState } from "react"
import { Book, books } from "../data/books"
import './bookshelf.css' 

const Bookshelf = () => {

	const [ myBooks, setMyBooks] = useState<Book[]>(books)
	
	return(
		<div>
			<ul className="books-list">{myBooks.map((book) => (
				
			<li key={book.id}>
				<h4>{book.title}</h4>
				<div>
					<p>{book.author}</p>
					<p>{book.genre}</p>
				</div>
			</li> ))}
				</ul>
		</div>
	)
}

export default Bookshelf