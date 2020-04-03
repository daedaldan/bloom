from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from conversations import views

router = routers.DefaultRouter()
router.register(r'users', views.UserView)
router.register(r'requests', views.RequestView)
router.register(r'matches', views.MatchView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
