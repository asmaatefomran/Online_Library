from django.shortcuts import render
from book.models import Book  # Import the Book model from your other app
from django.db.models import Count
import random
from django.shortcuts import redirect
from django.views.decorators.csrf import csrf_exempt
from django.contrib import messages
from .models import Registerate


# Create your views here.

def Home(request):
    books = list(Book.objects.all())  # Get all books and convert to a list
    random_books = random.sample(books, min(len(books), 9))  # Select 5 random books, or fewer if there are less than 5 books
    return render(request, 'pages/Home.html', {'random_books': random_books})  # Pass the random books to the template





def signup(request):
    username = None  # Initialize username variable
    if request.method == 'POST':
        ftname = request.POST.get('ftname')
        ltname = request.POST.get('ltname')
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        cpassword = request.POST.get('cpassword')
        choices = request.POST.get('choice')
        if Registerate.objects.filter(username=username).exists():
            messages.error(request, 'Username already taken')
        elif Registerate.objects.filter(email=email).exists():
            messages.error(request, 'Email already registered')        
        else:
            data = Registerate(ftname=ftname, ltname=ltname, username=username, email=email, password=password, cpassword=cpassword, choices=choices)
            data.save()
            messages.success(request, 'Account created successfully')
            return redirect('login')

    return render(request, 'pages/signup.html')





def login_view(request):
    if request.method == 'POST':
        input_username = request.POST.get('username')
        input_password = request.POST.get('password')
        users = Registerate.objects.all()
        for user in users:
            if user.username == input_username and user.password == input_password:
                messages.success(request, 'Login successful')
            
                # حفظ اسم المستخدم في الجلسة
                request.session['choices'] = user.choices
                request.session['username'] = input_username
               

                return redirect('Home')  # Redirect to your desired page after login
        messages.error(request, 'Invalid username or password')

    return render(request, 'pages/login.html')


# def reset_password(request):
#     return render (request, 'pages/reset_password.html')

# def profile(request):
#     # x={'name':'sara'}

#     return render(request,'pages/profile.html',{})







from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Registerate
from django.contrib import messages
from django.shortcuts import redirect, render
from .models import Registerate

def profile(request):
    if request.method == 'POST':
        password = request.POST.get('password')
        cpassword = request.POST.get('cpassword')
        new_username = request.POST.get('username')  # New username entered in the form

        if new_username and len(new_username) <= 15:
            try:
                user = Registerate.objects.get(username=request.session['username'])

                if password and cpassword:
                    if len(password) < 8:
                        messages.error(request, 'Password must be at least 8 characters long')
                        return redirect('p')

                    if password == cpassword:
                        user.password = password
                        user.cpassword = cpassword
                    else:
                        messages.error(request, 'Passwords do not match')
                        return redirect('p')

                # Update username if a new one is provided
                user.username = new_username
                request.session['username'] = new_username

                user.save()

                messages.success(request, 'Profile updated successfully')
                return redirect('p')
            except Registerate.DoesNotExist:
                messages.error(request, 'User not found')
        else:
            if len(new_username) > 15:
                messages.error(request, 'Username must be 15 characters or less')

            messages.error(request, 'Please fill out all fields')

    # Retrieve user data from session
    username = request.session.get('username')

    return render(request, 'pages/profile.html', {
        'username': username,
        'choices': request.session.get('choices'),
        'messages': messages.get_messages(request),  # Pass messages to the template
    })
