from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset.filter(is_active=True)

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
    def perform_destroy(self, instance):
        instance.is_active = False
        instance.save()

class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetail(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryProductsList(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category = get_object_or_404(Category, id=self.kwargs["id"])
        return Product.objects.filter(category=category, is_active=True)

# Добавляем функцию для лайков после классов представлений
@api_view(['POST'])
def product_like(request, pk):
    product = get_object_or_404(Product, pk=pk)
    product.likes = (product.likes or 0) + 1
    product.save()
    return Response({'likes': product.likes})