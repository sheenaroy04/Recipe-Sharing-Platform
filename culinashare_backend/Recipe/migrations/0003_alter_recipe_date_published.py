# Generated by Django 5.0.2 on 2024-02-21 06:10

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("Recipe", "0002_alter_recipe_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="recipe",
            name="date_published",
            field=models.DateField(auto_now_add=True),
        ),
    ]
