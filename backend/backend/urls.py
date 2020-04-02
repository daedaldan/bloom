from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from conversations import views

router = routers.DefaultRouter()
# router.register(r'conversations', views.)

# need to do more work on this

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api'/, include(router.urls))
]
