# Generated by Django 5.0.6 on 2024-05-21 21:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='category',
            field=models.CharField(choices=[('Novel', 'Novel'), ('Comic', 'Comic'), ('Romantic', 'Romantic'), ('fictional', 'fictional')], max_length=30),
        ),
    ]
