from django.http import JsonResponse
from .models import Company, Vacancy

# Create your views here.

def company_list(request):
    companies = Company.objects.all()
    data = []
    for company in companies:
        data.append({
            'id': company.id,
            'name': company.name,
            'description': company.description,
            'city': company.city,
            'address': company.address,
        })
    return JsonResponse(data, safe=False)

def company_detail(request, id):
    company = Company.objects.get(id=id)
    data = {
        'id': company.id,
        'name': company.name,
        'description': company.description,
        'city': company.city,
        'address': company.address,
    }
    return JsonResponse(data)

def company_vacancies(request, id):
    company = Company.objects.get(id=id)
    vacancies = Vacancy.objects.filter(company=company)
    data = []
    for vacancy in vacancies:
        data.append({
            'id': vacancy.id,
            'name': vacancy.name,
            'description': vacancy.description,
            'salary': vacancy.salary,
            'company': vacancy.company.name,
        })
    return JsonResponse(data, safe=False)


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    data = []
    for vacancy in vacancies:
        data.append({
            'id': vacancy.id,
            'name': vacancy.name,
            'description': vacancy.description,
            'salary': vacancy.salary,
            'company': vacancy.company.name,
        })
    return JsonResponse(data, safe=False)

def vacancy_detail(request, id):
    vacancy = Vacancy.objects.get(id=id)
    data = {
        'id': vacancy.id,
        'name': vacancy.name,
        'description': vacancy.description,
        'salary': vacancy.salary,
        'company': vacancy.company.name,
    }

    return JsonResponse(data)

def vacancies_top_ten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    data = []
    for vacancy in vacancies:
        data.append({
            'id': vacancy.id,
            'name': vacancy.name,
            'description': vacancy.description,
            'salary': vacancy.salary,
            'company': vacancy.company.name
        })
    return JsonResponse(data, safe=False)