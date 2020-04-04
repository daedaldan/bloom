from rest_framework import serializers

from django.contrib.auth.models import User
from .models import Profile, Request, Match


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('line', 'bio', 'contactInfo', 'profilePhotoLink')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    profile = ProfileSerializer(required=True)

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password', 'profile')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        Profile.objects.create(user=user, **profile_data)

        return user

    def update(self, instance, validated_data):
        profile_data = validated_data.pop('profile')
        profile = instance.profile

        instance.email = validated_data.get('email', instance.email)
        instance.save()

        profile.line = profile_data.get('line', profile.line)
        profile.bio = profile_data.get('bio', profile.bio)
        profile.contactInfo = profile_data.get('contactInfo', profile.contactInfo)
        profile.profilePhotoLink = profile_data.get('profilePhotoLink', profile.profilePhotoLink)
        profile.save()

        return instance


class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = ('sender', 'receiver', 'status')


class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = ('userA', 'friendA', 'userB', 'friendB')
