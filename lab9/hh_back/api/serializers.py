from rest_framework import serializers
from .models import Company, Vacancy

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['id', 'name', 'description', 'city', 'address']

class VacancySerializer(serializers.ModelSerializer):
    company_name = serializers.CharField(source='company.name', read_only=True)
    
    class Meta:
        model = Vacancy
        fields = ['id', 'name', 'description', 'salary', 'company', 'company_name']
        extra_kwargs = {
            'company': {'write_only': True} 
        }