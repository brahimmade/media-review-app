# Generated by Django 3.2.6 on 2021-10-13 16:31

from django.db import migrations, models
import upload.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Upload',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to=upload.models.upload_to, verbose_name='Image')),
            ],
        ),
    ]
