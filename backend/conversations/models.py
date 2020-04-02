from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class Profile(models.Model):
    """Extension of User model with one-to-one link."""

    user = models.OneToOneField(User, related_name='profile', on_delete=models.CASCADE)
    line = models.CharField(max_length=150)
    bio = models.TextField(max_length=300)
    contactInfo = models.CharField(max_length=200)
    profilePhotoLink = models.URLField(max_length=200, blank=True)

    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(user=instance)

    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):
        instance.profile.save()

    def __str__(self):
        return user.first_name + " " + user.last_name


class Request(models.Model):
    """A conversation request that one user sends to another."""

    sender = models.ForeignKey(User, related_name='request_sender', on_delete=models.CASCADE)
    receiver = models.ForeignKey(User, related_name='request_receiver', on_delete=models.CASCADE)

    PENDING = 0
    PASSED = 1
    STATUS_CHOICES = (
        (PENDING, "pending"),
        (PASSED, "passed"),
    )
    status = models.PositiveSmallIntegerField(choices=STATUS_CHOICES)

    def __str__(self):
        return "request from " + self.sender.name + " to " + self.receiver.name


class Match(models.Model):
    """A conversation match between two users who want to talk to each other."""

    matchA = {'user': models.ForeignKey(User, on_delete=models.CASCADE),
              'friend': models.ForeignKey(User, on_delete=models.CASCADE)}
    matchB = {'user': models.ForeignKey(User, on_delete=models.CASCADE),
              'friend': models.ForeignKey(User, on_delete=models.CASCADE)}

    def __str__(self):
        return "match between " + matchA[user].name + " and " + matchA[friend].name
