from django.urls import path
from .views import (
    CompanyList, 
    CompanyDetail,
    CompanyVacanciesList,
    VacancyList,
    VacancyDetail,
    TopTenVacancies
)

urlpatterns = [
    path('companies/', CompanyList.as_view(), name='company-list'),
    path('companies/<int:pk>/', CompanyDetail.as_view(), name='company-detail'),
    path('companies/<int:id>/vacancies/', CompanyVacanciesList.as_view(), name='company-vacancies'),
    path('vacancies/', VacancyList.as_view(), name='vacancy-list'),
    path('vacancies/<int:pk>/', VacancyDetail.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', TopTenVacancies.as_view(), name='vacancies-top-ten'),
]