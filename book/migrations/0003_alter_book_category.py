# Generated by Django 5.0.6 on 2024-05-22 20:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0002_alter_book_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='category',
            field=models.CharField(choices=[('Novel', 'Novel'), ('Comic', 'Comic'), ('Romantic', 'Romantic'), ('fictional', 'fictional'), ('Cooking', 'Cooking'), ('Finance', 'Finance'), ('Sport', 'Sport')], max_length=30),
        ),
    ]
