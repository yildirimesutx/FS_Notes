from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    # print(request.method)
    # print(request.user)
    # print(request.path)
    return HttpResponse('<h1>Hello World</h1>')

def special(request):
    # context dic yapısında olmalı farklı isimde de olabilir
    context = {
        'title': 'clarusway',
        'dict1': {'django': 'best framework'},
        'my_list': [2, 3, 4]
    }    
    return render(request, "app/special.html", context)