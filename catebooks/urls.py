from django.urls import path
from . import views

urlpatterns = [
    path('Category/', views.category_view, name='category'),
    path('Category/<str:category>/', views.category_details, name='category_details'),
    path('book/<int:id>/', views.Book_details, name='Book_details')
]
