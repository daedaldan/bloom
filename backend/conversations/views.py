from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, RequestSerializer, MatchSerializer
from django.contrib.auth.models import User
from .models import Profile, Request, Match


class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class RequestView(viewsets.ModelViewSet):
    serializer_class = RequestSerializer
    queryset = Request.objects.all()


class MatchView(viewsets.ModelViewSet):
    serializer_class = MatchSerializer
    queryset = Match.objects.all()
