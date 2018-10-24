//create book object

function Book(title, author, isbn){

	this.title = title;
	this.author = author;
	this.isbn = isbn;
}


// UI Object

function UI(){}

UI.prototype.addBookToList = function(book){
	const list = document.getElementById('book-list');

	const row = document.createElement('tr');

	row.innerHTML = `

		<td>${book.title}</td>
		<td>${book.author}</td>
		<td>${book.isbn}</td>
		<td><a href="#" class="delete">Delete</a></td>


	`;

	list.appendChild(row);




	console.log(row);
};

//clear field prototype

UI.prototype.clearField = function(){

	document.getElementById('title').value = '';
	document.getElementById('author').value = '';
	document.getElementById('isbn').value = '';
}

//prevent users to submit empty field prototype

UI.prototype.preventEmptyField = function(){

	const 	title = document.getElementById('title').value,
			author = document.getElementById('author').value,
			isbn = document.getElementById('isbn').value;

	if(title ==='', author === '', isbn === ''){

		console.log('please insert data')
	}

}

//create alert message prototype

UI.prototype.alertMessage = function(message, classname){
	// body... 

	//create a div element
	const div = document.createElement('div');
	div.className = `alert ${classname}`;

	div.appendChild(document.createTextNode(message));

	//get the parent element

	const container = document.querySelector('.container');
	const book_form = document.getElementById('book-form');

	container.insertBefore(div, book_form);

	//set time out for the alert div

	setTimeout(function(){

		div.remove();
	}, 3000)
};


//Add event listener to add book

document.getElementById('book-form').addEventListener('submit', function(e){

	//get form values
	const 	title = document.getElementById('title').value,
			author = document.getElementById('author').value,
			isbn = document.getElementById('isbn').value;


	//institiate the book object

	const book = new Book(title, author, isbn);

	//instantiate UI

	const ui = new UI();

	

	if (title ==='' || author==='' || isbn ==='') {
		ui.alertMessage('The fields cannot be empty', 'error');
	}else{

		//add book to ui
		ui.addBookToList(book);

		//clear field after form submission
		ui.clearField();

		ui.alertMessage('Book added', 'success');
	}

	

	//prevent the user to submit empty fields;
	// ui.preventEmptyField();

	
	e.preventDefault();
});

//Add event listener to remove book

document.getElementById('book-list').addEventListener('click', function(e){

	if(e.target.className == 'delete'){

		e.target.parentElement.parentElement.remove();
	}

	e.preventDefault();
})