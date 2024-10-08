# Generated by Django 5.0.6 on 2024-05-23 21:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Registerate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ftname', models.CharField(max_length=50)),
                ('ltname', models.CharField(max_length=50)),
                ('username', models.CharField(max_length=50, unique=True)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('password', models.CharField(max_length=20)),
                ('cpassword', models.CharField(max_length=20)),
                ('choices', models.CharField(choices=[('option1', 'User'), ('option2', 'Admin')], max_length=10)),
            ],
        ),
    ]
