from django.db import models

class User(models.Model):
    """stuff"""

    def __str__(self):
        return "stuff"

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
