from django.urls import path
from . import views

#second make the url of the page home

urlpatterns=[
     path('Home',views.Home,name='Home'),
    path ('',views.signup,name= 'signup'),
    path ('login',views.login_view,name='login'),
    path ('p',views.profile,name='p'),

    # path ('reset_password',views.reset_password,name='reset_password'),

    # path ('profile',views.profile,name='profile'),
   
]