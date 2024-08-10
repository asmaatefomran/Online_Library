from django.urls import path
from  . import views
from .views import  AddBook,edit_book

urlpatterns =[
     path('AddBook/', views.AddBook ,name='AddBook'),
     path('edit_book/<int:book_id>/', views.edit_book ,name='edit_book'),
     path('DeleteBook/<int:book_id>/', views.DeleteBook ,name='DeleteBook'),
     path('', views.bookList, name='bookList'),
    path('autocomplete/', views.autocomplete, name='autocomplete'),
     
]