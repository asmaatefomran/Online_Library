from django.urls import path
from . import views

urlpatterns = [
    path('borrow/<int:id>/', views.borrow_book, name='borrow_book'),
    path('borrowing/borrowed/', views.BorrowedList, name='BorrowedList'),
]