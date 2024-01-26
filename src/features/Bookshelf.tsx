
import { Book, books } from "../data/books"
import './bookshelf.css' 
import { useRecoilState } from "recoil"
import { bookAtom } from "../data/atom"

const Bookshelf = () => {

	const [ myBooks, setMyBooks] = useRecoilState<Book[]>(bookAtom)
	console.log("loggar bookshelf1", myBooks);
	return(
		<div>			
			<ul className="books-list">{myBooks.map((book) => (				
				<li key={book.id}>
					<h4>{book.title}</h4>
					<div>
						<p>{book.author}</p>
						<p>{book.genre}</p>
					</div>
				</li>  ))}
				
			</ul>
		</div>
	)
	
}
export default Bookshelf