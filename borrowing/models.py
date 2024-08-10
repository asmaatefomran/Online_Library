
# borrowing/models.py
from django.db import models
from pages.models import Registerate
from book.models import Book
from datetime import timedelta
from django.utils import timezone


class BorrowedBook(models.Model):
    user = models.CharField(max_length=50)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    borrowing_at = models.DateTimeField(default=timezone.now)
    DURATION_DAYS = 21

    @property
    def return_date(self):
        return self.borrowing_at + timedelta(days=self.DURATION_DAYS)



   