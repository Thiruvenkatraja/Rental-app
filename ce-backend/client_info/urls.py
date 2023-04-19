from django.urls import path
from .views import ClientsView

urlpatterns = [
    path("", ClientsView.as_view()),
    path("<int:Client_ID>/update", ClientsView.as_view()),
    path("<int:Client_ID>/delete", ClientsView.as_view()),
]



