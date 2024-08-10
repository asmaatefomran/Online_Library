from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255,unique=True)

    def __str__(self):
        return self.name

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    category = models.ForeignKey(Category, related_name='books', on_delete=models.CASCADE)

    def __str__(self):
        return self.title
    

def Book_details(request, id):
    book = get_object_or_404(Book, id=id)
    # Retrieve suggested books (e.g., books from the same category)
    suggested_books = Book.objects.filter(category=book.category).exclude(id=id)[:5]
    return render(request, 'Categorypages/Book_details.html', {'book': book, 'suggested_books': suggested_books})