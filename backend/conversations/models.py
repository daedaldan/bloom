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
    def create_save_user_profile(sender, instance, created, **kwargs):
        try:
            instance.profile.save()
        except ObjectDoesNotExist:
            Profile.objects.create(user=instance)

    def __str__(self):
        return self.user.first_name + " " + self.user.last_name


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
        return "request from " + self.sender.first_name + " to " + self.receiver.first_name


class Match(models.Model):
    """A conversation match between two users who want to talk to each other."""

    userA = models.ForeignKey(User, related_name='match_user_A', on_delete=models.CASCADE, null=True)
    friendA = models.ForeignKey(User, related_name='match_friend_A', on_delete=models.CASCADE, null=True)
    userB = models.ForeignKey(User, related_name='match_user_B', on_delete=models.CASCADE, null=True)
    friendB = models.ForeignKey(User, related_name='match_friend_B', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return "match between " + self.userA.first_name + " and " + self.friendA.first_name
