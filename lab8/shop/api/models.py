from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)  # Добавляем unique
    
    class Meta:
        verbose_name_plural = "Categories"  # Правильное множественное число
    
    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Лучше чем Float
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='products/', null=True, blank=True)
    count = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    likes = models.PositiveIntegerField(default=0, null=True, blank=True)
    category = models.ForeignKey(
        Category, 
        on_delete=models.CASCADE,
        related_name="products"  # Добавляем related_name
    )
    created_at = models.DateTimeField(auto_now_add=True)  # Добавляем дату создания
    updated_at = models.DateTimeField(auto_now=True)  # Добавляем дату обновления
    
    def __str__(self):
        return self.name