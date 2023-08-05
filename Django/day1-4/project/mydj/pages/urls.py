from django.urls import path
from . import views

urlpatterns = [
    path('',views.index),
    path('ren',views.ren),
    path('ren/<namee>',views.des, ),
    path('s',views.student, name='student_list'),
    path('add/', views.add_student, name='add_student'),
    path('update/<int:pk>/', views.update_student, name='update_student'),
    path('delete/<int:pk>/', views.delete_student, name='delete_student'),
]
