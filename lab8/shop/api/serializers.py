from rest_framework import serializers 
from .models import Product, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name"]  

class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    category_id = serializers.IntegerField(write_only=True)
    category_name = serializers.CharField(source='category.name', read_only=True)  # Добавлено
    image = serializers.ImageField(required=False, allow_null=True)
    likes = serializers.IntegerField(read_only=True)  # Добавлено
    
    class Meta:
        model = Product
        fields = [
            "id", 
            "name", 
            "price", 
            "description",
            "count", 
            "is_active", 
            "category", 
            "category_id",
            "category_name",  # Добавлено
            "image",         # Добавлено
            "likes",         # Добавлено
            "created_at",     # Добавлено
            "updated_at"      # Добавлено
        ]
        read_only_fields = ["created_at", "updated_at"]  # Добавлено