# Generated by Django 4.0.4 on 2022-05-17 11:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fscohort', '0003_student_register_date_student_update_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='year_in_school',
            field=models.CharField(choices=[('FR', 'Freshman'), ('SP', 'Sophomore'), ('JR', 'Junior'), ('SR', 'Senior'), ('GRD', 'Graduate')], default='FR', max_length=3),
        ),
    ]
