from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def customers(request):
    return render(request, 'customers.html')

def contact(request):
    return render(request, 'contact.html')
