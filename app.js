
class Book {
    constructor(bookTitle, author, isbn) {
        this.bookTitle = bookTitle;
        this.author = author;
        this.isbn = isbn;
    }

    addBook() {
        // get the book-table
        const bookTable = document.getElementById("add-book");

        let row = bookTable.insertRow();

        let data = row.insertCell();
        let text = document.createTextNode(this.bookTitle);
        data.appendChild(text);

        let data2 = row.insertCell();
        let text2 = document.createTextNode(this.author);
        data2.appendChild(text2);

        let data3 = row.insertCell();
        let text3 = document.createTextNode(this.isbn);
        data3.appendChild(text3);


        let data4 = row.insertCell();
        let icon = document.createElement('a');
        icon.innerHTML = '<i class="fas fa-trash"></i>'
        data4.appendChild(icon);

    }


}




document.getElementById("book-form").addEventListener('submit',
    function (e) {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const isbn = document.getElementById("isbn").value;

        if (!title || !author || !isbn) {
            Swal.fire(
                'Did you enter any Information?',
                'Try adding a Book with valid Book details?',
                'question'
            )
        }
        else {
            const book = new Book(title, author, isbn);
            book.addBook();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your Book has been added!',
                showConfirmButton: false,
                timer: 1500
            })
            document.getElementById("display-books").style.display = "block";
            document.getElementById("book-form").reset();
        }


    }

)


document.getElementById('display-books').addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.classList.contains('fa-trash')) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                e.target.parentElement.parentElement.parentElement.remove();
                Swal.fire(
                    'Deleted!',
                    'Your Book has been deleted.',
                    'success'
                )
            }
        })
    }
})


