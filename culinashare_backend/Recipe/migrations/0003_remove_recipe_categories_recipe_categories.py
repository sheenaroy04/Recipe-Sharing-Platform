# Generated by Django 5.0.2 on 2024-02-20 04:12

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("Recipe", "0002_alter_recipe_recipe_id"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="recipe",
            name="categories",
        ),
        migrations.AddField(
            model_name="recipe",
            name="categories",
            field=models.ManyToManyField(related_name="recipes", to="Recipe.category"),
        ),
    ]
