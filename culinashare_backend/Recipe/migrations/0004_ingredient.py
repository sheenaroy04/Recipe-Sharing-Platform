# Generated by Django 5.0.2 on 2024-02-20 05:32

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("Recipe", "0003_remove_recipe_categories_recipe_categories"),
    ]

    operations = [
        migrations.CreateModel(
            name="Ingredient",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("ingredient_name", models.CharField(max_length=200)),
                ("quantity", models.CharField(max_length=50)),
                (
                    "recipe",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="ingredients",
                        to="Recipe.recipe",
                    ),
                ),
            ],
        ),
    ]
