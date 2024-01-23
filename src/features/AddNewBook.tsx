

const AddNewBook = () => {

	return(
		<section>
			<form action="" className="add-new-book-form">
				<h3>Add a new book </h3>
				<div>
					<label htmlFor="">Title</label>
					<input type="text" />
				</div>
				<div>
					<label htmlFor="">Author</label>
					<input type="text" />
				</div>
				<div>
					<label htmlFor="">Genre</label>
					<input type="text" />
				</div>
			</form>
		</section>
	)
}

export default AddNewBook