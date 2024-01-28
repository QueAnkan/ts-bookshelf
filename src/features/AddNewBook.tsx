import { Book, books } from "../data/books"
import { bookAtom } from "../data/atom"
import { useRecoilState } from "recoil"
import { useState } from "react"

const AddNewBook = () => {
	const [ myBooks, setMyBooks] = useRecoilState<Book[]>(bookAtom)
	const [newBook, setNewBook] = useState<Book>({ id: 0, title: "", author: "", genre: "" })

	const newId = () => {
		let id = myBooks.length + 1;
		return id;
	  }

	const handleInput = (event:React.ChangeEvent<HTMLInputElement>) =>{
		const { id, value } = event.target;
		setNewBook((prevBook) => ({ ...prevBook, id: newId() ,[id]: value }))


	}

const handleOnclick = (event:any) => {
	event.preventDefault()
	 setMyBooks( myBooks.concat(newBook))
	 console.log('myBooks', myBooks);
	 
	 localStorage.setItem('mySavedBooks', JSON.stringify(myBooks.concat(newBook)))
	setNewBook({ id: 0, title: "", author: "", genre: "" })

}


	return(
		<section>
			<form 
			action="" 
			className="add-new-book-form"
			onSubmit={handleOnclick}>
				<h3>Add a new book </h3>
				<div>
					<label htmlFor="title">Title</label>
					<input 
						type="text"
						id="title"
						value={newBook.title}
						onChange={handleInput} 
						/>
				</div>
				<div>
					<label htmlFor="author">Author</label>
					<input 
						type="text"
						id="author"
						value={newBook.author} 
						onChange={handleInput} 
						/>
				</div>
				<div>
					<label htmlFor="genre">Genre</label>
					<input 
						type="text"
						id="genre"
						value={newBook.genre}
						onChange={handleInput} 
						/>
				</div>
				<button type="submit">Add book</button>
			</form>
		</section>
	)
}

export default AddNewBook