# REST Function Based Views  


view.py 


```
@api_view(['GET'])
def studentList(request):
    student = Student.objects.all()
    serializer= StudentSerializer(student, many=True)

    return Response(serializer.data)




@api_view(['POST'])
def studentAdd(request):
    serializer =  StudentSerializer(data=request.data)  

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)



@api_view(['GET','POST'])
def studentListCreate(request):

    if request.method == 'GET':
        student = Student.objects.all()
    
        serializer= StudentSerializer(student, many=True)
  
        return Response(serializer.data)

    elif request.method == 'POST' :
        serializer= StudentSerializer(data = request.data)


        if serializer.is_valid():
            serializer.save()
    
        return Response(serializer.data)

@api_view(['DELETE'])
def studentDel(request, pk): 
   student = Student.objects.get(id=pk)
   student.delete()

   return Response("Item Deeleted")        
```
