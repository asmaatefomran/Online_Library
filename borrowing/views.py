from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect,get_object_or_404, render
from book.models import Book
from .models import BorrowedBook
from pages.models import Registerate

# @login_required
def borrow_book(request, id):
    # Get the book object using its ID
    book = get_object_or_404(Book, id=id)
    
    # Get the currently logged-in user
    user = request.session['username']
    
    # Create a BorrowedBook object for the current user and the book
    BorrowedBook.objects.create(user=user, book=book)
    
    # Redirect to the book details page
    return redirect('BorrowedList')



def BorrowedList(request):
    username = request.session.get('username')

    # Query the BorrowedBook model to get books borrowed by the current user
    borrowed_books = BorrowedBook.objects.filter(user=username)

    # Pass the borrowed_books queryset to the template context
    context = {
        'borrowed_books': borrowed_books
    }

    return render(request, 'Categorypages/BorrowedList.html', {'borrowed_books': borrowed_books})











