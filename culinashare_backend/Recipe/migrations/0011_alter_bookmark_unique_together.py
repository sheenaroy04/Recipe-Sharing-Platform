# Generated by Django 5.0.2 on 2024-03-09 06:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Recipe', '0010_bookmark'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='bookmark',
            unique_together=set(),
        ),
    ]
