from django.db import models

# Create your models here.
from django.db import models

class Student(models.Model):
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female')
    )

    name = models.CharField(max_length=255)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    gpa = models.DecimalField(max_digits=4, decimal_places=2)
    datetime_field = models.DateTimeField(auto_now_add=True)
    photo_field = models.ImageField(upload_to='student_photos/')
    phone_field = models.CharField(max_length=20)
    description_field = models.TextField()
    success = models.BooleanField(default=True)
    def __str__(self):
        return self.name
    class Meta:
        ordering =['name']