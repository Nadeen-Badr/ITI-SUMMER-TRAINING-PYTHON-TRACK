from django.shortcuts import render
from django.http import HttpResponse
from .models import Student
from .forms import StudentForm
from django.shortcuts import render, get_object_or_404, redirect
# Create your views here.
def index(request):
    return HttpResponse("this is index page")
# def ren(request):
#      return render(request, 'pages/ren.html')
def ren(request):
    with open('pages/templates/pages/names.txt') as f:
        names = [line.strip() for line in f]

    context = {'names': names}
    return render(request, 'pages/ren.html', context)
def des(request,namee):
    namee=namee
    
    with open('pages/templates/pages/names.txt') as f:
        names = [line.strip() for line in f]

    descriptions = {}
    for name in names:
        # Generate a random description for each name
        description = 'this is a description of .'+namee
        descriptions[name] = description

    # Retrieve the description for the given name from the dictionary
    description = descriptions.get(name)

    # Include the selected name in the context dictionary
    context = {'selected_name': namee, 'description': description}
    
    return render(request,'pages/renn.html', context)

def student(request):
    students = Student.objects.all()
    return render(request, 'pages/student.html', {'students': students})

def add_student(request):
    if request.method == 'POST':
        form = StudentForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('student_list')
    else:
        form = StudentForm()
    return render(request, 'pages/add_student.html', {'form': form})

def update_student(request, pk):
    student = get_object_or_404(Student, pk=pk)
    if request.method == 'POST':
        form = StudentForm(request.POST, request.FILES, instance=student)
        if form.is_valid():
            form.save()
            return redirect('student_list')
    else:
        form = StudentForm(instance=student)
    return render(request, 'pages/udpate_student.html', {'form': form, 'student': student})

def delete_student(request, pk):
    student = get_object_or_404(Student, pk=pk)
    if request.method == 'POST':
        student.delete()
        return redirect('student_list')
    return render(request, 'pages/delete-student.html', {'student': student})