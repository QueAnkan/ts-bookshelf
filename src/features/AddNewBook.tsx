import { Book, books } from "../data/books"
import { bookAtom } from "../data/atom"
import { useRecoilState } from "recoil"

const AddNewBook = () => {
	const [ myBooks, setMyBooks] = useRecoilState<Book[]>(bookAtom)

const handleOnclick = () => {
	setMyBooks
}

// TODO add value to input fields and finish handleOnclick

	return(
		<section>
			<form action="" className="add-new-book-form">
				<h3>Add a new book </h3>
				<div>
					<label htmlFor="title">Title</label>
					<input 
						type="text"
						id="title"
						value="" />
				</div>
				<div>
					<label htmlFor="author">Author</label>
					<input 
						type="text"
						id="author"
						value="" />
				</div>
				<div>
					<label htmlFor="genre">Genre</label>
					<input 
						type="text"
						id="genre"
						value="" />
				</div>
				<button onClick={handleOnclick}>Add book</button>
			</form>
		</section>
	)
}

export default AddNewBook