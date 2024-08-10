from django.shortcuts import render, get_object_or_404
from book.models import Book  # Import the Book model from the other app
from django.http import JsonResponse


def category_view(request):
    categories = Book.objects.values('category').distinct()  # Get all unique categories
    return render(request, 'Categorypages/Category.html', {'categories': categories})





def category_details(request, category):
    search = Book.objects.filter(category=category)
    title = None
    if 'book_search' in request.GET:
        title = request.GET['book_search']
        if title:
            search = search.filter(name__icontains=title)

    books = search  # Get books with the specified category
    return render(request, 'Categorypages/Category_details.html', {'category': category, 'books': books})




def Book_details(request, id):
    book = get_object_or_404(Book, id=id)
    # Retrieve suggested books (e.g., books from the same category)
    suggested_books = Book.objects.filter(category=book.category).exclude(id=id)[:5]
    return render(request, 'Categorypages/Book_details.html', {'book': book, 'suggested_books': suggested_books})

#  def Home(request):
#     return render(request, 'my_project/Home.html')