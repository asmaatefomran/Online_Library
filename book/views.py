from django.shortcuts import render, get_object_or_404, redirect
from .models import Book
from django.http import JsonResponse



def AddBook(request):
     
     if request.method== 'POST':
          bookname=request.POST.get('Book_Name')
          author=request.POST.get('Author')
          category=request.POST.get('Category')
          description=request.POST.get('Description')
          data = Book(name=bookname,
                    author=author,
                    category=category,
                    description=description)
          data.save()
          return redirect('AddBook')
     
     return render(request,'book/AddBook.html',{'pro':Book.objects.all()})



def edit_book(request,book_id):
     # print(f'Editing book with ID: {book_id}')
     book = get_object_or_404(Book, id=book_id)
     if request.method == 'POST':
        book.name = request.POST.get('Book_Name')
        book.author = request.POST.get('Author')
        book.category = request.POST.get('Category')
        book.description = request.POST.get('Description')
        book.save()  # يحفظ التعديلات في قاعدة البيانات
        return redirect('AddBook')
     
     return render(request, 'book/edit_book.html', {'book': book})
     
def DeleteBook(request,book_id):
     book_delete=get_object_or_404(Book, id=book_id)
     if request.method == 'POST':
          book_delete.delete()
          return redirect('AddBook')
     return render(request, 'book/DeleteBook.html')





def bookList(request):
    search = Book.objects.all()
    title = None
    if 'search_name' in request.GET:
        title = request.GET['search_name']
        if title:
            search = search.filter(name__icontains=title)
    return render(request, 'book/bookList.html', {'book': search})

def autocomplete(request):
    if 'q' in request.GET:
        term = request.GET.get('q')
        books = Book.objects.filter(name__icontains=term)
        suggestions = [book.name for book in books]
        return JsonResponse(suggestions, safe=False)
    return JsonResponse([], safe=False)


