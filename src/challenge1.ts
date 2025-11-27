type Book = { //Tipe Data Book agar setiap buku memiliki struktur yang konsisten
  title: string; // Judul buku
  author: string; // Nama penulis
  year: number; // Tahun terbit
};

// Array untuk menyimpan seluruh buku yang ditambahkan
const books: Book[] = [];

// Fungsi untuk menambahkan buku baru ke dalam array 'books'
function addBook(title: string, author: string, year: number): void {
  const newBook: Book = { title, author, year };
  books.push(newBook);

  // Output log sesuai format yang diminta
  console.log(`Book added: "${title}" by ${author} (${year})`);
}

// Fungsi untuk menampilkan semua buku yang telah disimpan
function listBooks(): void {
  console.log("All Books:");

  // Melakukan iterasi untuk menampilkan tiap buku
  books.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  });
}

// Fungsi untuk mencari buku berdasarkan judul
function searchBook(title?: string): void {
    // Jika title tidak diberikan → tampilkan pesan
  if (!title) {
    console.log("Please provide a title to search.");
    return;
  }

  // Menyaring buku yang judulnya mengandung title (case-sensitive)
  const results = books.filter((b) => b.title.includes(title));
// Jika tidak ada hasil → tampilkan pesan khusus
  if (results.length === 0) {
    console.log(`No books found with title containing "${title}".`);
    return;
  }
// Menampilkan hasil pencarian
  console.log(`Search Results for "${title}":`);
// Menampilkan setiap buku yang cocok dengan pencarian
  results.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.year})`);
  });
}

// Don't delete code bellow and this code must be at the bottom of the file
// Export fungsi agar bisa digunakan di file test Jest
export { addBook, listBooks, searchBook };
