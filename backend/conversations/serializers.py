from rest_framework import serializers
from .models import Request, Match


class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = ('')
