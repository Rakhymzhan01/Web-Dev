from django.urls import path
from .views import company_list, company_detail,company_vacancies, vacancy_list, vacancy_detail, vacancies_top_ten


urlpatterns = [
    path('companies/', company_list, name='company_list'),
    path('companies/<int:id>/', company_detail, name='company_detail'),
    path('companies/<int:id>/vacancies/', company_vacancies, name='company_vacancies'),
    path('vacancies/', vacancy_list, name='vacancy_list'),
    path('vacancies/<int:id>/', vacancy_detail, name='vacancy_detail'),
    path('vacancies/top_ten/', vacancies_top_ten, name='vacancies_top_ten'),
]