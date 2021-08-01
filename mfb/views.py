from django.shortcuts import render
from django.urls import path


def index(request):
    # this will by default search in app/templates folder.
    return render(request, 'index.html')
