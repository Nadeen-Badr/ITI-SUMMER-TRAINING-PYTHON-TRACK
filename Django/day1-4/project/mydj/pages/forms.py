# forms.py

# forms.py

# forms.py
# forms.py

from django import forms
from .models import Student

class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = ('name', 'gender', 'gpa', 'photo_field', 'phone_field', 'description_field', 'success')
     